import React from 'react'
import { Link } from 'gatsby'
import Tech from '../components/Tech'
import Layout from '../components/layout'
import body from '../images/body.png';
const IndexPage = () => (
  <Layout>
    <h1>Jason Gatsby</h1>
    <h4>Developer. Philanthropist. Captain America.</h4>
    {/* <p>Jason and Ben are cool.</p> */}
    <div style={{ maxWidth: '2000px', height: "30%", marginBottom: '1.45rem', border: "1px solid black" }}>
      <img src={body} alt=''/>
 
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Tech> </Tech>

  </Layout>
)

export default IndexPage
