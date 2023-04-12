import React, { useState } from 'react';

// const availableToppings = [
//   { name: 'Pepperoni', image: 'pepperoni.png' },
//   { name: 'Mushrooms', image: 'mushrooms.png' },
//   { name: 'Onions', image: 'onions.png' },
//   { name: 'Sausage', image: 'sausage.png' },
//   { name: 'Bacon', image: 'bacon.png' },
//   { name: 'Extra cheese', image: 'extra-cheese.png' },
//   { name: 'Black olives', image: 'black-olives.png' },
//   { name: 'Green peppers', image: 'green-peppers.png' },
//   { name: 'Pineapple', image: 'pineapple.png' },
//   { name: 'Spinach', image: 'spinach.png' },
// ];

const availableToppings = [
    { name: 'BaseCheese', image: 'https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/BaseCheese.png?raw=true' },
    { name: 'Basil', image: 'https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Basil.png?raw=true' },
    { name: 'Mushroom', image: 'https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Mushroom.png?raw=true' },
    { name: 'Olive', image: 'https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Olive.png?raw=true' },
    { name: 'Pineaple', image: 'https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Pineapple.png?raw=true' },
    { name: 'Tomato', image: 'https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/Tomato.png?raw=true' },
   
  ];
  

function Pizza() {
  const [toppings, setToppings] = useState([]);

  function toggleTopping(topping) {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((t) => t !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  }

  return (
    <div className='main'>
     <div className='addToppings'>
     <h2>Choose your toppings:</h2>
      <div>
        {availableToppings.map((topping) => (
          <label key={topping.name}>
            <input
              type="checkbox"
              checked={toppings.includes(topping)}
              onChange={() => toggleTopping(topping)}
            />
            {topping.name}<br />
          </label> 
        ))}
      </div>
     </div>
    <div>
    <h2>Your pizza:</h2>
      <div className='pizzacontainer'>
        <img className='mainbase' src='https://github.com/dhavaljardosh/PizzaBuilder/blob/master/src/assets/PizzaBase.png?raw=true' alt="Pizza base"  />
        
        {toppings.map((topping) => (
          <img key={topping.index}  className="topping" src={topping.image} alt={topping.name} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Pizza;
