import { Link } from "react-router-dom"
import style from "./Navbar.module.scss"
function Navbar() {
  return (
    <div className={style.navbar_main_div}>
      <div className={style.navbar_img_div}>
        <img className={style.navbar_img}  src="../public/assets/images/logo-large.svg"/>
      </div>
      <nav className={style.navbar_navigate}>
        <Link className={style.navbar_link} to="/">
          <img
           className={style.navbar_link_img} 
           src="../public/assets/images/icon-nav-overview.svg"
           alt="overview-image"
           />
           <p className={style.navbar_link_sentence}>Overview</p>
        </Link>
        <Link className={style.navbar_link} to="/transactions">
          <img
           className={style.navbar_link_img} 
           src="../public/assets/images/icon-nav-transactions.svg"
           alt=""
           />
           <p className={style.navbar_link_sentence}>Transactions</p>
        </Link>
        <Link className={style.navbar_link} to="/budgets">
          <img
           className={style.navbar_link_img} 
           src="../public/assets/images/icon-nav-budgets.svg"
           alt=""
           />
           <p className={style.navbar_link_sentence}>Budgets</p>
        </Link>
        <Link className={style.navbar_link} to="/posts">
          <img
           className={style.navbar_link_img} 
           src="../public/assets/images/icon-nav-pots.svg"
           alt=""
           />
           <p className={style.navbar_link_sentence}>Pots</p>
        </Link>
        <Link className={style.navbar_link} to="/recurringBills">
          <img
           className={style.navbar_link_img} 
           src="../public/assets/images/icon-nav-recurring-bills.svg"
           alt=""
           />
           <p className={style.navbar_link_sentence}>Recurring Bills</p>
        </Link>
      </nav>
      <div className={style.minimize_div}>
        <Link className={style.minimize_menu}>
          <img className={style.minimize_img} src="../public/assets/images/icon-minimize-menu.svg"/>
          <p className={style.minimize_sentence}>Minimize Menu</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
