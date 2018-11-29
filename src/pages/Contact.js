import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1> Drop me a line</h1>
    <h2>jasongatsby@gmail.com</h2>
    <input type="text" placeholder="Your email"></input>
    <input type="text" placeholder="Say hello"></input>

    <button> Send</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
