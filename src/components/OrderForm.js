import React from 'react'



const OrderForm = (props) => {
  const { name, size, toppings, specialInstructions } = props.values
  const { pepperoni, mushroom, pineapple, jalapeno } = toppings
  const [ onTextChange, onChecked, onSubmit ] = props.handlers
  const { errors } = props
  const { disabled } = props

  return (
    <form onSubmit={onSubmit}>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.specialInstructions}</div>
      </div>
        <h3>Customer Info:</h3>
      <label>Name:&nbsp;<input type="text" name="name" value={name} placeholder="Please enter your name..." onChange={onTextChange} / ></label>
        <br />
        <h3>Build Your Pizza:</h3>
      <label>Size:&nbsp;&nbsp;
        <select name="size" value={size} onChange={onTextChange}>
          <option value="">Please select a size</option>
          <option value="xs">Personal Pan (4 slices)</option>
          <option value="sm">Small (6 slices) </option>
          <option value="reg">Regular (8 slices) </option>
          <option value="lg">Large (10 slices) </option>
          <option value="xl">Largest (12 slices)</option>
        </select>
      </label>
        <br />
      <label>Toppings:<br />
        <label><input name="pepperoni" type="checkbox" checked={pepperoni} onChange={onChecked} />Beyond Pepperoni</label><br />
        <label><input name="mushroom" type="checkbox" checked={mushroom} onChange={onChecked} />Mushroom</label><br />
        <label><input name="pineapple" type="checkbox" checked={pineapple} onChange={onChecked} />Pineapple</label><br />
        <label><input name="jalapeno" type="checkbox" checked={jalapeno} onChange={onChecked} />Jalapeno</label>
      </label>

      <div className="notes-textbox-input">
        <label>Special Instructions:<br />
          <textarea
          name="specialInstructions"
          placeholder="Do you have any allergies or dietary restrictions?"
          value={specialInstructions} 
          onChange={onTextChange}
          rows="7"
          cols="50" />
        </label>
      </div>

      <div className="submit-container">
            <input type="submit" value="Send My Order" disabled={disabled} />
      </div>
    </form>
  )
}

export default OrderForm