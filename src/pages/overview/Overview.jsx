import style from  "./Overview.module.scss"
import { useCollectionsData } from "../../hooks/useCollectionData"
import { useCollection } from "../../hooks/useCollection";
// import { Chart } from "../../components/Chart";

function Overview() {
  const {data,isPending} = useCollectionsData()
  console.log(data);
  const potsTotal = data ? data.pots.reduce((total, pot) => total + pot.total, 0) : 0;
  return (
    <div className={style.overviewMainDiv}>
      <h1 className={style.overviewTitle}>Overview</h1>
     <section className={style.ballance_section}>
      <div className={style.ballance_div}>
        <h4 className={style.ballance_title}>Current Balance</h4>
        <h3>$ {data && data.balance[0].current}.00</h3>
      </div>
      <div className={style.ballance_div}>
        <h4 className={style.ballance_title}>Income</h4>
        <h3>$ {data && data.balance[0].income}</h3>
      </div>
      <div className={style.ballance_div}>
        <h4 className={style.ballance_title}>Expenses</h4>
        <h3>$ {data && data.balance[0].expenses}0</h3>
      </div>
     </section>

     <div className={style.four_Details_div}>
      <section className={style.Pots_section}>
        <div className={style.pots_title_div}>
          <h3 className={style.pots_title}>Pots</h3>
          <a className={style.see_details}>See details <img  src="../../images/icon-caret-right.svg" width="8px" height="12px" /></a>
        </div>
        <div className={style.totals_div}>
          <div className={style.total_saved_main}>
            <img  src="../../images/icon-pot.svg"/>
            <div className={style.total_saved}>
              <h4 className={style.total_saved_title}>Total Saved</h4>
              <h3 className={style.total_saved_count}>{data && potsTotal}</h3>
            </div>
          </div>
          <div className={style.other_pots_main_div}>
          {data && data.pots.map((pot, index) => {
              if (index !== 4) {
                return (
                  <div className={style.other_pots_div} id={pot.id} key={pot.id}>
                    <h4 className={style.pot_title}>{pot.title}</h4>
                    <p className={style.pot_total}>{pot.total}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
      <section className={style.budgets_section}>2</section>
      <section className={style.transactions_section}>3</section>
      <section className={style.bills_section}>4</section>
     </div>
     
    </div>
  )
}

export default Overview
