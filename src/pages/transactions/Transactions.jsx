import style from "./Transaction.module.scss"
import { useCollectionsData } from "../../hooks/useCollectionData"
import React from 'react'
import dayjs from "dayjs"

function Transactions() {
  const {data,isPending} = useCollectionsData()
  const transactions = data?.transactions || [];
  const categories = [...new Set(transactions.map((t) => t.category))];

  console.log(categories)
  console.log(transactions);
  return (
    <div className={style.transactions_main_div}>
      <h1 className={style.transaction_title}>Transactions</h1>
      
       <div className={style.details_div}>
       <form className={style.transactions_functions}>
          <input name="search" type="text" placeholder="Search transaction"/>
          <div className={style.sort_div}>
          <label className={style.label}>Sort by</label>
          <select className={style.selection} id="sort" name="sort">
                <option value="latest">Latest</option>
                <hr/>
                <option value="oldest">Oldest</option>
                <hr/>
                <option value="atoz">A to Z</option>
                <hr/>
                <option value="ztoa">Z to A</option>
                <hr/>
                <option value="highest">Highest</option>
                <hr/>
                <option value="lowest">Lowest</option>
          </select>
          </div>

          <div className={style.categ_div}>
              
              <label className={style.label}>Category </label>
              <select className={style.selection} id="category" name="category">
                    {data && categories.map((c,id)=>{
                      return(<option key={id} value={c}>{c}</option>)
                      
                    })}
              </select>
              
          </div>
        </form>
        
        {/* <div className={style.types_div}>
        // there need be types of data
        </div> */}

        <div className={style.res_send_main_div}>
            {data && transactions.map((t,id)=>{
              return (
                  <div className={style.person_blank} key={id}>
                    <div className={style.person_div}>
                        <img className={style.person_ava} src={t.avatar} />
                        <p className={style.person_name}>{t.name}</p>
                    </div>
                    <div className={style.person_date_categ}>  
                      <p className={style.person_categ}>{t.category}</p>
                      <p className={style.person_date}>{t.date ? dayjs(t.date).format("DD MMM YYYY") : "No date"}</p>
                    </div>
                  
                          <h4
                            style={{ color: t.amount > 0 ? "#277C78" : "black" }}
                            className={style.person_amount}
                          >
                            ${t.amount.toFixed(2)}
                          </h4>
                          

                  </div>
              )
            })}
        </div>
       </div>
      
    </div>
  )
}

export default Transactions
