import style from  "./Budgets.module.scss"
import {useCollectionsData} from "../../hooks/useCollectionData"
import { Chart } from "../../components/Chart"

function Budgets() {
  const {data,isPending} = useCollectionsData()
  const budgets = data?.budgets || []
  console.log(budgets)
  return (
    <div className={style.budgets_main_div}>
        <div className={style.title_add_btn_div}></div>
        <div className={style.budget_details}>
          <div className={style.budget_charts}>
            {data && <Chart budgets={budgets}/>}
          </div>
          <div className={style.budget_elements}>
            {data && budgets.map((b,id)=>{
              return(
                <div className={style.element_main_div}>
                  <div className={style.element_header_div}>
                      <div className={style.element_theme}></div>
                      <h3 className={style.element_title}>{b.category}</h3>
                      <button><img src="../assets/images/icon-ellipsis.svg"/></button>
                  </div>

                  <div className={style.element_skills}>
                    <p className={style.element_maximum}>Maximum of {b.maximum}</p>
                    <div className={style.represent_line}>
                      <div className={style.present_line}></div>
                    </div>
                    <div className={style.spent_remain_div}>
                        <div className={style.spent_div}>
                          <p className={style.spent_title}>Spent</p>
                          <p className={style.spent_amount}></p>
                        </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Budgets
