// Write your JS code here
import './index.css'
import Header from '../Header'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <img
        className="products-img"
        alt="products"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
      />
    </div>
  </>
)

export default Products
