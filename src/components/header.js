import React from 'react'
import { Link } from 'gatsby'
import Image from './image'
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '0  ',
      height: 200,
      borderBottom: "2px white solid"

    }}
  >
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 1360,
        padding: '0',
      }}
    > */}
      <Image imageLocation="../images/table.jpg"></Image>
      {/* <div style={{background: 'black', height: 300, zIndex:3}}/> */}
      <div style={{
        display:"flex",
        justifyContent: "space-between"
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
    
        <Link
          to="/Experience/"
          style={{
            color: 'white',
            textDecoration: 'none',


          }}
        >
          Experience
        </Link>

        <Link
          to="/Contact/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Contact
        </Link>
        
        <Link
          to="/Social/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Social
        </Link>
        </div>
    {/* </div> */}
  </div>
)

export default Header
