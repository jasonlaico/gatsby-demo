import React from 'react';
//  import Image from './image';

import react from '../images/react.png'
import vue from '../images/vue.png'
import npm from '../images/npm.webp'
import postman from '../images/postman.webp'
import git from '../images/git.webp'
import node from '../images/node.webp'

const Tech = () =>{
    return(
    <div style={{height:"40%", width: "100%",display: "flex", justifyContent: "center" } }>
       {/* <Image imageLocation="../images/face.jpg"></Image> */}
       <a href="https://reactjs.org/"target="_blank" rel="noopener norefferer"> <img src={react} alt="react logo"   className= "logos" id="portfolio1" /> </a>
       <a href="https://vuejs.org/"target="_blank" rel="noopener norefferer"> <img src={vue} alt="vue logo"   className= "logos" id="portfolio1" /> </a>

 
       <a href="https://www.getpostman.com/"target="_blank" rel="noopener norefferer"> <img src={postman} alt="postman logo"   className= "logos" id="portfolio1" /> </a>
       <a href="https://www.npmjs.com/"target="_blank" rel="noopener norefferer"> <img src={npm} alt="npm logo"   className= "logos" id="portfolio1" /> </a>
       <a href="https://www.nodejs.org/"target="_blank" rel="noopener norefferer"> <img src={node} alt="node logo"   className= "logos" id="portfolio1" /> </a>
       <a href="https://www.git-scm.com/"target="_blank" rel="noopener norefferer"> <img src={git} alt="git logo"   className= "logos" id="portfolio1" /> </a>
 
   
 

    </div>
    )}

export default Tech