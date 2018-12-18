import React from 'react'
// import { Link } from 'gatsby'
import Tech from '../components/Tech'
import Layout from '../components/layout'
// import body from '../images/body.png';
import face from '../images/face.jpg';
const IndexPage = () => (
  <Layout>
    <h1>Jason Laico</h1>
    <h4>Software engineer looking for new ideas</h4>
    <div style={{ maxWidth: '500px', height: "auto",   border: "1px solid black",   }}>
      <img src={face} alt=''/>
 
    </div>
    <Tech> </Tech>

  </Layout>
)

export default IndexPage
