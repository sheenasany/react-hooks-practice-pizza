import React from "react";

function Pizza({pizza, onSelectedPizza}) {

  //when pizza is selected, sends it's value to the form which causes it to appear
  const handleClick = () => {
    onSelectedPizza(pizza)
  }

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Vegetarian" : "Not Vegetarian" }</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
