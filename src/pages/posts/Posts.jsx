import style from "./Posts.module.scss"

import React from 'react'
import {useCollectionsData} from "../../hooks/useCollectionData"
function Posts() {
  const {data,isPending} = useCollectionsData()
  const pots = data?.pots||[];
  console.log(pots)
  return (
    <div className={style.pots_main_div}>
      <div className={style.pots_header_div}>
          <h1 className={style.pots_title}>Pots</h1>
          <button className={style.add_pot_btn}>Add New Pot</button>
      </div>
      <div className={style.pots_detail_main_div}>
        {data && pots.map((p,id)=> {
          return (
            <div key={id} className={style.pot_main_div}>
              <div className={style.pot_header}>
                <div style={{backgroundColor: data ? p.theme:"black"}} className={style.pot_theme}></div>
                <h3 className={style.pot_name}>{p.name}</h3>

                <button className={style.pot_edit_del}><img src="../assets/images/icon-ellipsis.svg"/></button>
              </div>

              <div className={style.pot_coeffs_div}>
                <div className={style.pot_total_saved_div}>
                  <p className={style.total_title}>Total Saved</p>
                  <h4 className={style.total_amount}>${p.total}.00</h4>
                </div>
                <div className={style.represent_line}>
                  <div style={{width : `${((p.total/p.target)*100).toFixed(1)}%`, backgroundColor:p.theme }} className={style.present_line}></div>
                </div>
                <div className={style.the_present_target}>
                  <p className={style.the_present}>{((p.total/p.target)*100).toFixed(1)}%</p>
                  <p className={style.the_target}>Target of ${p.target}</p>
                </div>
                <div className={style.add_with_btn}>
                    <button className={style.add_pots_btn}>+ Add Money</button>
                    <button className={style.withdraw_pot_btn}>Withdraw</button>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
