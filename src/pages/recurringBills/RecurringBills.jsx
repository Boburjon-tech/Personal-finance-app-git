import  "./RecurringBills.module.scss"
import {useCollectionsData} from "../../hooks/useCollectionData"
import React from 'react'

function RecurringBills() {
  const {data,isPending} = useCollectionsData()
  return (
    <div>
      RecurringBills
    </div>
  )
}

export default RecurringBills
