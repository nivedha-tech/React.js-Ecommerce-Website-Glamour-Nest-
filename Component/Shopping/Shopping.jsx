import React, { useState } from 'react';
import './Shopping.css';
import { menu_list } from '../images/image';
import may1 from '../images/may1.jpeg';
import may2 from '../images/may2.jpeg';
import may3 from '../images/may3.jpeg';
import may4 from '../images/may4.jpeg';
import may5 from '../images/may5.jpeg';
import may6 from '../images/may6.jpeg';
import may7 from '../images/may7.jpeg';
import may8 from '../images/may8.jpeg';
import may9 from '../images/may9.jpeg';
import may10 from '../images/may10.jpeg';
import may11 from '../images/may11.jpeg';
import may12 from '../images/may12.jpeg';
import may13 from '../images/may13.jpeg';
import may14 from '../images/may14.jpeg';
import may15 from '../images/may15.jpeg';
import may16 from '../images/may16.jpeg';
import may17 from '../images/may17.jpeg';
import may18 from '../images/may18.jpeg';

const Shopping = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'MAC COSMETICS', displayName: 'Foundation Cream', price: 78, quantity: 0, image: may1 },
    { id: 2, name: 'CLINIQUE', displayName: 'Liquid Lipstick Brown Shade', price: 17, quantity: 0, image: may18 },
    { id: 3, name: 'URBAN DECAY', displayName: 'Red shade lipstick', price: 10, quantity: 0, image: may3 },
    { id: 4, name: 'MAYBELLINE', displayName: 'Make-up Brush', price: 30, quantity: 0, image: may4 },
    { id: 5, name: 'BURBERRY 4', displayName: 'Eyeshadow Palette', price: 70, quantity: 0, image: may5 },
    { id: 6, name: 'FENTY BEAUTY', displayName: 'Tarte Shape Tape Concealer', price: 40, quantity: 0, image: may6 },
    { id: 7, name: 'ANASTASIA BEVERLY HILLS', displayName: 'All eye make-up set', price: 29, quantity: 0, image: may7 },
    { id: 8, name: 'MAYBELLINE', displayName: 'Nail Polish', price: 60, quantity: 0, image: may8 },
    { id: 9, name: 'URBAN DECAY', displayName: 'All Nighter Setting Spray', price: 70, quantity: 0, image: may9 },
    { id: 10, name: 'ESTÉE LAUDER', displayName: 'Concealer', price: 65, quantity: 0, image: may10 },
    { id: 11, name: 'TOO FACED', displayName: 'Fake Eye lashes', price: 90, quantity: 0, image: may11 },
    { id: 12, name: 'FENTY BEAUTY', displayName: 'Highlighter Set', price: 25, quantity: 0, image: may12 },
    { id: 13, name: 'ANASTASIA BEVERLY HILLS', displayName: 'Eye make-up set', price: 15, quantity: 0, image: may13 },
    { id: 14, name: 'HUDA BEAUTY', displayName: 'All size Make-up Brush', price: 25, quantity: 0, image: may14 },
    { id: 15, name: 'MAC COSMETICS', displayName: 'Various Colour Eyeshadow Palette', price: 20, quantity: 0, image: may15 },
    { id: 16, name: 'NARS', displayName: 'Concealer', price: 70, quantity: 0, image: may16 },
    { id: 17, name: 'MAC COSMETICS', displayName: 'All Nighter Setting Spray', price: 20, quantity: 0, image: may17 },
    { id: 18, name: 'TOO FACED', displayName: 'Dark Colour Nail Polish', price: 30, quantity: 0, image: may18 },
  ]);

  const [category, setCategory] = useState('All');
  const [selectedProducts, setSelectedProducts] = useState({});
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [details, setDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, { product, quantity }) => {
      return total + (product.price * quantity);
    }, 0);
  };
  
  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product.quantity > 0) {
      setSelectedProducts((prev) => {
        const updated = { ...prev };
        updated[productId] = (updated[productId] || 0) + product.quantity;
        setCartItems(prevItems => {
          const existingItem = prevItems.find(item => item.product.id === productId);
          if (existingItem) {
            return prevItems.map(item =>
              item.product.id === productId
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            );
          } else {
            return [...prevItems, { product, quantity: product.quantity }];
          }
        });
        alert(`Added ${product.displayName} x ${product.quantity} to cart`);
        return updated;
      });
      // Reset the product quantity after adding to cart
      setProducts(prevProducts =>
        prevProducts.map(p => p.id === productId ? { ...p, quantity: 0 } : p)
      );
    } else {
      alert(`Please select a quantity for ${product.displayName}`);
    }
  };

  const handleQuantityChange = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity = product.quantity + change;
          if (newQuantity >= 0) {
            return {
              ...product,
              quantity: newQuantity,
            };
          }
        }
        return product;
      })
    );
    // Update selectedProducts state
    setSelectedProducts((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (updatedSelected[id]) {
        updatedSelected[id] += change;
      } else {
        updatedSelected[id] = change > 0 ? 1 : 0;
      }
      if (updatedSelected[id] <= 0) delete updatedSelected[id];
      return updatedSelected;
    });
  };

  const handleBuy = () => {
    const formSection = document.getElementById("user-details");
    formSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setDetails(null);

    // Validate input fields
    if (name === "") {
      setError("Please provide your name");
      return;
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      setError("Name should contain only alphabetic characters");
      return;
    }
    if (phoneNumber === "") {
      setError("Please provide your phone number");
      return;
    } else if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
      setError("Please provide a valid 10-digit phone number");
      return;
    }
    if (address === "") {
      setError("Please provide your address");
      return;
    } else if (address.length < 10) {
      setError("Address is too short");
      return;
    }

    if (cartItems.length === 0) {
      setDetails(
        <h2 className='bucket-style'>
          YOUR CART IS EMPTY. PLEASE CHOOSE PRODUCTS TO BUY!!!
        </h2>
      );
      return;
    }

    setDetails(
      <div><br/><br/><br/>
        <h4 style={{ color: 'green', textAlign: 'center' }}>PERSONAL DETAILS OF THE CUSTOMER</h4>
        <h3 style={{ color: 'red', textAlign: 'center' }}>Name: {name}</h3>
        <h3 style={{ color: 'red', textAlign: 'center' }}>Phone Number: {phoneNumber}</h3>
        <h3 style={{ color: 'red', textAlign: 'center' }}>Address: {address}</h3>
        <br/><br/>
        <h4 style={{ color: 'green', textAlign: 'center' }}>SELECTED PRODUCTS</h4>
        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src={product.image}
              alt={product.displayName}
              style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }}
            />
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              {product.displayName} - Quantity: {quantity}
            </p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Each Product price: ${product.price * quantity}
            </p>
          </div>
        ))}
        <h3 style={{ color: 'green', textAlign: 'center', fontWeight: 'bold' }}>TOTAL AMOUNT: ${calculateTotalAmount()}</h3>
      </div>
    );
};
  const overallTotal = calculateTotalAmount();

  return (
    <div>
      <div className='body'>
      <div className='explore-menu' id='explore-menu'>
        <center><h1>EXPLORE OUR MENU</h1></center>
        <div className='explore-menu-list'>
          {menu_list.map((item, index) => (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className='explore-menu-list-item'
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr />
      </div>

      <section id='product1'>
        <h1 className="h1-style">FEATURED PRODUCTS</h1>
        <center>
          <strong style={{ color: 'green', fontWeight: 'bold', fontSize: '30px' }}>TOTAL = ${overallTotal}</strong>
        </center>
        <div className="button-actions"> 
        <button 
            className="view-cart-button" 
            type="button" 
            onClick={() => setIsCartVisible(prev => !prev)}    
          >
          {isCartVisible ? 'Hide Cart' : 'View Cart'}
          </button>
        
           <button className='btn-style' onClick={handleBuy}>BUY</button>
         </div>
        <div className="pro-container">
          {products.map(product => (
            <div key={product.id} className="pro">
              <img src={product.image} alt={product.name} />
              <div className='des'>
                <span>{product.name}</span>
                <h3>{product.displayName}</h3>
                <h4>${product.price}</h4>
                <button className='addtocart' onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
              </div>
              <div className='button-container'>
                <button className='cart-qty-plus' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <input
                  type="text"
                  className="input-box-for-shopping1"
                  value={product.quantity}
                  readOnly
                />
                <button className='cart-qty-plus' onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isCartVisible && cartItems.length > 0 && (
        <div><br/><br/>
          <h4 style={{ color: 'green', textAlign: 'center' }}>ITEMS IN YOUR CART</h4>
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img
                src={product.image}
                alt={product.displayName}
                style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }}
              />
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                {product.displayName} - Quantity: {quantity}
              </p>
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                Total Price: ${product.price * quantity}
              </p>
            </div>
          ))}
        </div>
      )}
      <br/>  <br/>  <br/>
      <center><h1>CUSTOMER DETAILS</h1></center> <br/>
      <form id="user-details" onSubmit={handleSubmit} className='shop-buy-form'>
        <center>
        <label className="text">Name</label></center>
        <input type="text" className="input-box" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <center>
        <label className="text">Phone Number</label></center>
        <input type="text" className="input-box" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br /><br />
        <center>
        <label className="text">Address</label></center>
        <input type="text" className="input-box" value={address} onChange={(e) => setAddress(e.target.value)} /><br /><br />
        {error && <h3><p className="error-style" style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{error}</p></h3>}
        <center><button className="submit-form" type="submit">Buy</button></center>
      </form>
      {details && <div>{details}</div>}
      </div>
    </div>
  );
};
export default Shopping;