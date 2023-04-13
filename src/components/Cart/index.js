// Write your JS code here

import './index.css'

import Header from '../Header'

const Cart = () => (
  <div className="cart-page">
    <Header />
    <div className="cart-container">
      <img
        className="cart-img"
        alt="cart"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
      />
    </div>
  </div>
)

export default Cart
