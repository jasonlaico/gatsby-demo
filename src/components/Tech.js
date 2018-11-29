import React from 'react';
//  import Image from './image';

import react from '../images/react.png'
import python from '../images/python.webp'
import npm from '../images/npm.webp'
import postman from '../images/postman.webp'
import git from '../images/git.webp'
import node from '../images/node.webp'

const Tech = () =>{
    return(
    <div style={{height:"40%", width: "100%",display: "flex", justifyContent: "center" } }>
       {/* <Image imageLocation="../images/face.jpg"></Image> */}

    <img src={react} className = "logos" alt=""></img>
    <img src={python} className = "logos" alt=""></img>

    <img src={npm} className = "logos" alt=""></img>

    <img src={postman} className = "logos" alt=""></img>

    <img src={git} className = "logos" alt=""></img>
    <img src={node} className = "logos" alt=""></img>


    </div>
    )}

export default Tech