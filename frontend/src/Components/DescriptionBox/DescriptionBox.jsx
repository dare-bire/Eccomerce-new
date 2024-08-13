import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='description-box'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-navi-box'>Description</div>
        <div className='descriptionbox-navi-box-fade'>Reviews(122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce website is a site designed for buying and selling products or services online. It allows businesses to reach customers over the internet, providing various functionalities to support online transactions. Here are some key features of an e-commerce website:

Product Catalog: A comprehensive list of products or services, often categorized and searchable.
Shopping Cart: A system that lets customers select items to purchase, view selected items, and proceed to checkout.
Payment Gateway: Integration with payment processors to handle transactions securely.
User Accounts: Features for users to create accounts, manage orders, and save payment and shipping information.
Order Management: Tools for tracking orders, managing inventory, and handling returns.
Customer Service: Support options like chatbots, FAQs, and contact forms to assist customers.
Security: Measures like SSL certificates to protect user data and transaction details.
Mobile Compatibility: Design elements that ensure the site works well on mobile devices.
Marketing and SEO: Tools to promote products, such as discounts, email marketing, and search engine optimization.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
