import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'



const Image = ({props}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "city.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} 
    style={
     { height: "20vh",
    width: "100vw",zIndex:1}

     } />}
  />
   
)
export default Image
