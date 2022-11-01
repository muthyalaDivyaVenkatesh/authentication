import React from 'react'
import {Card} from '../../ui/Card'
import topDealItems from './TopDealItems'
import topDealStyles from './TopDeals.module.css'

export default function  TopDeals() {
  return (
    <>
    <h3>TopDeals</h3>
    <div className={topDealStyles.DealsContainer}>
        {
            topDealItems.map((val,index) => (
                 <Card  name={val.name } imageUrl={val.image} />
            ))
        }
    </div>
    </>
  )
}
