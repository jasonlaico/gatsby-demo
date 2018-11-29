import React from 'react'
import { Link } from 'gatsby'
import portfoliocheckout from '../images/portfoliocheckout.webp'
import portfolioconnect from '../images/portfolioconnect.webp'
import portfoliocytexone from '../images/portfoliocytexone.webp'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
    <h1>Take a look at my previous projects</h1>
    <img src={portfolioconnect} className = "logos" id="portfolio" alt=""></img>
    <h3 className = "descrips"> ConnectUS is a website used to connect new and old devices in your home seamlessly.</h3>
    <img src={portfoliocytexone} className = "logos" id="portfolio" alt=""></img>
    <h3 className = "descrips"> Cytexone is a tool used to develop websites that focus on tech.  It uses Node, React, and Express.</h3>

    <img src={portfoliocheckout} className = "logos" id="portfolio" alt=""></img>
    <h3 className = "descrips"> Payfriend is an app used to process payments and estimates in seconds </h3>


    <Link to="/">Go back to the homepage</Link> 
  </Layout>
)

export default Experience

 