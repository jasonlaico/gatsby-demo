import React from 'react'
import { Link } from 'gatsby'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.jpg'
import medium from '../images/medium.png'
import Layout from '../components/layout'

const Social = () => (
  <Layout>
    <h1>Add me on my socials</h1>
    <img src={linkedin} className = "logos" id="portfolio1" alt=""></img>
    <h3 className = "descrips"> Linkedin: Jason Gatsby</h3>
    <img src={twitter} className = "logos" id="portfolio1" alt=""></img>
    <h3 className = "descrips"> Tweet me @JasonGatsby</h3>

    <img src={medium} className = "logos" id="portfolio1" alt=""></img>
    <h3 className = "descrips"> Medium </h3>


     <Link to="/">Go back to the homepage</Link> 
  </Layout>
)

export default Social
 