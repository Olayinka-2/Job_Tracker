import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt=""  className='play-icon' onClick={() => {
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur impedit doloremque minus explicabo culpa perspiciatis, quo, fugit ratione fuga eius aliquam quia! Eaque, voluptate nesciunt laboriosam necessitatibus itaque perspiciatis!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta possimus odio et quaerat asperiores pariatur voluptas quod dicta laborum earum.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla odio harum obcaecati, error qui delectus id aliquid soluta sapiente. Odit similique officiis ex delectus aliquam incidunt impedit recusandae quidem minus minima, sapiente soluta laborum quis!</p>
      </div>
    </div>
  )
}

export default About
