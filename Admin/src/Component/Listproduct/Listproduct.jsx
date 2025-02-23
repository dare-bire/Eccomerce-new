import React, { useEffect, useState } from 'react';
import './Listproduct.css';
import cross_icon from '../../assets/cross_icon.png';

const Listproduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    const response = await fetch('https://eccomerce-new-backend-nmhw.onrender.com/allproducts');
    const data = await response.json();
    setAllproducts(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const remove_product = async (id)=>{
    await fetch('https://eccomerce-new-backend-nmhw.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accepts:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All products list</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr/>
        {allproducts.map((product, index) => (
           <>
          <div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} alt='' className='listproduct-icon'/>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}}className='listproduct-remove-icon' src={cross_icon} alt=''/>
          </div>
          <hr/>
          </>
        ))}
      </div>
    </div>
  );
};

export default Listproduct;
