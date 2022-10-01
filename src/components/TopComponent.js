import { Grid } from '@mui/material'
import React from 'react'
import './styles/top-component.css';
import programmer2 from '../images/output-onlinegiftools.gif'

export default function TopComponent() {
  return (
    <Grid>
        <div className='container' >
        <Grid>
        <div className='information' >
        <h1>
        Hi, I am Vishwaraj.
        </h1>
        <h3>
            Full Stack Developer
        </h3>
        <p>
        Full Stack Developer proficient in MERN stack as well as many other libraries based on JavaScript. I have built many projects throughout my learning journey, some of them being full-stack web apps. I am an avid learner, I aim to enhance my knowledge and skills by working in a growth-focused environment.
        </p>
        </div>
        </Grid>
        <Grid>
         <img src={programmer2} alt='some-img' className='image' />
        </Grid>
        </div>

    </Grid>
  )
}
