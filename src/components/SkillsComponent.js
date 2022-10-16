import { Grid } from '@mui/material'
import React from 'react'
import './styles/skills-component.css'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import next from '../images/next2.png'
import node from '../images/node2.png'
import express from '../images/express.png'
import mongodb from '../images/mongodb2.png'
import mongoose from '../images/mongoose.jpg'
import materialui from '../images/materialui.png'
import redux from '../images/redux.png'
import git from '../images/git.png'


export default function SkillsComponent() {

    // const array = [
    //     html,css,javascript, react, next, express, node, mongodb, materialui, mongoose, redux
    // ]



    const array = [

        {
            photo: html,
            name: 'HTML5' 
        }
        ,
        {
            photo: css,
            name: 'CSS3' 
        },
        {
            photo: javascript,
            name: 'JavaScript' 
        },
        {
            photo: react,
            name: 'React' 
        },
        {
            photo: node,
            name: 'Node.js' 
        },
        
        {
            photo: express,
            name: 'express.js' 
        },
        {
            photo: next,
            name: 'Next.js' 
        },
                {
            photo: mongodb,
            name: 'Mongo DB' 
        },
        {
            photo: materialui,
            name: 'Material UI' 
        },
        {
            photo: git,
            name: 'Git' 
        },
        {
            photo: redux,
            name: 'Redux' 
        },
      
        {
            photo: mongoose,
            name: 'Mongoose' 
        },
    ]


  return (
    <>
        <Grid>
            <Grid>
                <div className='skills-container'>
                <h3>Skills</h3>
                <div className='skill-list' >
                {array.map((photo) => {
                    return <SkillCard image={photo} />
                })}
                </div>
                </div>
            </Grid>
        </Grid>
    </>
  )
}


function SkillCard({image}) {

    return (
        <>
            <div className='skill-card' >
            <img src={image.photo}  alt='some-img'/>
            <p>{image.name}</p>
            </div>
        </>
    )
}
