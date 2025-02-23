import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from'../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addTocart}=useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className='product-display-left'>
      <div className='product-image-list'>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
      </div>
      <div className='productdisplay-image'>
          <img className='productdisplay-main-img' src={product.image} alt=''/>
      </div>
      </div>
      <div className='product-display-right'>
         <h1>{product.name}</h1>
         <div className='productdisplay-right-star'>
            <img src={star_icon}alt=''/>
            <img src={star_icon}alt=''/>
            <img src={star_icon}alt=''/>
            <img src={star_icon}alt=''/>
           <img src={star_dull_icon}alt=''/>
           <p>(122)</p>
         </div>
         <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-prices-old'>${product.old_price}</div>
            <div className='productdisplay-right-prices-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                A lightweight,usually knitted,pullover shirt,close-fitting and weer a round neckline and short sleeves,worn as an undershirt or outer germant
            </div>
            <div className='productdisplay-right-size'>
                <h1> select size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span> women,T-shirt,crop-top</p>
            <p className='productdisplay-right-category'><span>Tags:</span> Modern,latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
