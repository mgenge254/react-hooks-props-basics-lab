import React from "react";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p>
      implementing conditional renedring using ternary operator where
      if(props.bio && props.bio.lenth>1 //that is if the bio has content{
        therefore display props.bio else display null
      }) */}
       {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
      
     
    </div>
  );
}

export default About;