import React from 'react'

const SubTotal = ({length, totalPrice}: { length:number, totalPrice:number}) => {

  return (
    <div>
          <h2 className="text-left text-lg">Subtoat ({length}) items : <span className="font-bold">${totalPrice}</span></h2>
    </div>
  )
}

export default SubTotal
