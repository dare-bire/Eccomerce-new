import React, { useState } from 'react';
import './Addproduct.css';
import uploadarea from '../../assets/upload_area.svg';

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProductDetails({ ...productDetails, image: URL.createObjectURL(file) });
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    let response;

    // Upload the image
    let formData = new FormData();
    formData.append('image', image);

    response = await fetch("https://eccomerce-new-backend-nmhw.onrender.com/upload", {
      method: 'POST',
      body: formData,
    });
    const imageData = await response.json();

    if (imageData.success) {
      const product = {
        ...productDetails,
        image: imageData.image_url // Use the URL returned from the image upload
      };

      // Add the product details
      response = await fetch("https://eccomerce-new-backend-nmhw.onrender.com/addproducts", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const productData = await response.json();
      if (productData.success) {
        alert("Product added successfully");
      } else {
        alert("Failed to add product");
      }
    } else {
      alert("Failed to upload image");
    }
  };

  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
      </div>
      <div className='addproduct-prices'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          <img src={image ? URL.createObjectURL(image) : uploadarea} className='addproduct-thumbnail-img' alt='' />
        </label>
        <input onChange={imageHandler} type='file' name="image" id='file-input' hidden />
      </div>
      <button onClick={addProduct} className='addproduct-btn'>Add</button>
    </div>
  );
};

export default Addproduct;
