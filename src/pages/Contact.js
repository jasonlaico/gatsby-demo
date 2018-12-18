import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1> Drop me a line</h1>
    <h2>Jason.laico@gmail.com</h2>
    
    {/* <input type="text" placeholder="Your email" style = {{  width: 400}}></input>
    <input type="text" placeholder="Say hello" style = {{height:300, width: 400}}></input>

    <button className= "button" style = {{  width: 400}}> Send</button> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
