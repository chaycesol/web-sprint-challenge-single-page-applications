import React from 'react'

//Need to grab individual toppings in an object array and print them into a string
const createToppingsString = (toppings) => {
  let toppingSelect = []
  let toppingValues = []
// maps key value pair of topping and if its selected to pull out each value selected only and push them into a new array to be converted into a string
  for (let key in toppings) {
    toppingSelect.push(toppings[key])
    toppingValues.push(key)
  }
  //For each topping value selected, print in a ...topping, topping... format
  return toppingValues.filter((toppingValue, i) => toppingSelect[i] ).toString()
}


const OrderConfirmation = (props) => {
  const { name, size, specialInstructions } = props.order

  return (
    <div>
      <h3>Name: {name}</h3>
      <ul>
      <li>Size: {size}</li>
      <li>Toppings: {createToppingsString(props.order.toppings)}</li>
      <li>Special Instructions: {specialInstructions}</li>
      </ul>
    </div>
  )
}

export default OrderConfirmation