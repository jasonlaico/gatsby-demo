import React from 'react'
import { Link } from 'gatsby'
import Daddysgarage from '../images/Daddysgarage.png'
import Topspin from '../images/Topspin.png'
// import portfoliocytexone from '../images/portfoliocytexone.webp'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
    <h1>Take a look at my previous projects</h1>
    <img src={Topspin} className = "logos" id="portfolio" alt="" style={{width:"auto", height:"600px"} } ></img>
    <h3 className = "descrips" style={{width:"80%"}}>TopSpin is a table tennis tournament generator and social media website. 
    This was a group project written in Vue using Vuetify. The database used was postgreSQL and image upload/storage
     was handled with Amazon AWS S3, API Gateway, and Lambda products.</h3>
     <a href="http://top-spin.pro">Check it out here</a>
    <img src={Daddysgarage} className = "logos" id="portfolio" alt="" style={{width:"auto", height:"600px"}}></img>
    <h3 className = "descrips" style={{width:"80%"}}> Daddy's Garage is a peer to peer tool lending platform which has a marketplace and booking feature. 
    This was a personal project written in React and implemented Stripe for payment processing, Amazon S3 for image storage, 
    and SendGrid for email services.</h3>

    {/* <img src={portfoliocheckout} className = "logos" id="portfolio" alt=""></img>
    <h3 className = "descrips"> Payfriend is an app used to process payments and estimates in seconds </h3> */}


    <Link to="/">Go back to the homepage</Link> 
  </Layout>
)

export default Experience

 