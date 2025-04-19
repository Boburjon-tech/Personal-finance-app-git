import style from "./FooterBar.module.scss"
import { Link } from "react-router-dom"

function FooterBar() {
  return (
    <div className={style.footerbarMain_Div}>
       <nav className={style.bar_navigate}>
              <Link className={style.footbar_link} to="/">
                <img
                 className={style.footbar_link_img} 
                 src="../public/images/icon-nav-overview.svg"
                 alt="overview-image"
                 />
                 <p className={style.footbar_link_sentence}>Overview</p>
              </Link>
              <Link className={style.footbar_link} to="/transactions">
                <img
                 className={style.footbar_link_img} 
                 src="../public/images/icon-nav-transactions.svg"
                 alt=""
                 />
                 <p className={style.footbar_link_sentence}>Transactions</p>
              </Link>
              <Link className={style.footbar_link} to="/budgets">
                <img
                 className={style.footbar_link_img} 
                 src="../public/images/icon-nav-budgets.svg"
                 alt=""
                 />
                 <p className={style.footbar_link_sentence}>Budgets</p>
              </Link>
              <Link className={style.footbar_link} to="/posts">
                <img
                 className={style.footbar_link_img} 
                 src="../public/images/icon-nav-pots.svg"
                 alt=""
                 />
                 <p className={style.footbar_link_sentence}>Pots</p>
              </Link>
              <Link className={style.footbar_link} to="/recurringBills">
                <img
                 className={style.footbar_link_img} 
                 src="../public/images/icon-nav-recurring-bills.svg"
                 alt=""
                 />
                 <p className={style.footbar_link_sentence}>Recurring Bills</p>
              </Link>
            </nav>
    </div>
  )
}

export default FooterBar
