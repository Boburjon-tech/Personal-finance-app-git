import style from  "./Overview.module.scss"
import { useCollectionsData } from "../../hooks/useCollectionData"
import { useCollection } from "../../hooks/useCollection";

function Overview() {
  const {data,isPending} = useCollectionsData()
  console.log(data);

  return (
    <div className={style.overviewMainDiv}>
      <h1 className={style.overviewTitle}>Overview</h1>
     <section className={style.ballance_section}>
      <div className={style.ballance_div}>
        <h4 className={style.ballance_title}></h4>
        <h3>{data && data.balance.current}</h3>
      </div>
      <div></div>
      <div></div>
     </section>

     <div className={style.four_Details_div}>
      <section className={style.Pots_section}></section>
      <section className={style.budgets_section}></section>
      <section className={style.transactions_section}></section>
      <section className={style.bills_section}></section>
     </div>
     
    </div>
  )
}

export default Overview
