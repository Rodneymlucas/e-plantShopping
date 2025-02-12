import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
//Dispacth the updateQuantity action to update the quantity of the cart item
//Dispatch the addItem action to add an item to the cart
//Dispatch the removeItem action to remove an item from the cart


  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 //iterate trhough the item array, find the quantity of each item using the item.quantity propery and multiply it by the item.cost property. Add all the results together and return the total amount.    
cart.map(item => {item.quantity * item.cost}).reduce((a, b) => a + b, 0); 
};

  const handleContinueShopping = (e) => {
//call the function passed by the parent compponent to the child component as a prop  
alert('Click on Plants at the top of the screen to continue shopping');
    console.log('Continue Shopping');
  };



  const handleIncrement = (item) => {
    // Dispatch an action to update the quantity of the item
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    console.log('Increment');
  };

  const handleDecrement = (item) => {
    // Dispatch an action to update the quantity of the item
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    console.log('Decrement');
   
  };

  const handleRemove = (item) => {
    // Dispatch an action to remove the item from the cart
    dispatch(removeItem(item.name));
    console.log('Remove');
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  console.log('in the CartItem component');
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) =>handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


