//Package Library Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Axios from 'axios'

//Form Validation imports
import * as yup from 'yup'
import formSchema from './validation/formSchema'


//Import Components for Switch:
import OrderForm from './components/OrderForm'
import OrderConfirmation from './components/OrderConfirmation'

const api_url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    extraCheese: false,
    pineapple: false
  },
  specialInstructions: ''
}
const initialOrderList = []
const initialErrorList = {
  name: '',
  size: '',
  specialInstructions: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orderList, setOrderList] = useState(initialOrderList)
  const [errorList, setErrorList] = useState(initialErrorList)
  const [disabled, setDisabled] = useState(true)

  const onTextChange = evt => {
    const { name, value } = evt.target

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrorList({
          ...errorList,
          [name]: ''
        })
      })
      .catch(err => {
        setErrorList({
          ...errorList,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onChecked = evt => {
    const { name, checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    //Posts new orders to API
    postOrder(formValues) 
    //Clears out field values for the next field
    setFormValues(initialFormValues)
  }

  const postOrder = order => {
    Axios.post(api_url, order)
      .then(res => {
        setOrderList([...orderList, res.data])
        console.log(`Order sent for ${res.data.name}`)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <Router>
      <div className="pizza-menu-container">
        <header>
          <nav className="main-nav">
            <div>
              <h1>Lambda Pizza Portal</h1>
              <p>The Pizza is Vegan, The Attitude isn't!</p>
            </div>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/pizza" name="orderForm">Pizza</Link>
              <Link to="/orders" name="ordersButton">My Orders</Link>
            </nav>
          </nav>

          <Switch>
          <Route path="/orders" render={() => (
            <div className='app-container'>
              {
                orderList.map(order => (
                  <OrderConfirmation key={order.id} order={order} />
                ))
              }
            </div>
          )} />
          <Route path="/pizza" render={() => (
            <div className='app-container'>
              <OrderForm values={formValues} handlers={[onTextChange, onChecked, onSubmit]} errors={errorList} disabled={disabled} />
            </div>
          )} />
          <Route path="/" render={() => (
            <div className='app-container'>
              <p>Cheesin for some Pie?</p>
              <Link to="/pizza">Pizza ?</Link>
            </div>
          )} />
          </Switch>
        </header>
      </div>
    </Router>
  );
};
export default App;
