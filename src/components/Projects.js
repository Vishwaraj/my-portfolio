import { Button, Grid } from '@mui/material'
import React from 'react'
import './styles/projects.css'
import HypeKicks from '../images/Hype Kicks.png';
import moviedb from '../images/movie-db.png';

export default function Projects() {



  return (
    <>
        <Grid>
            <Grid>
                <div className='projects-container' >
                <h3>Full Stack Projects</h3>
                <div className='project-list' >
                <HypeKicksComponent />
                <MovieDB/>
                </div>
                </div>
            </Grid>
        </Grid>
    </>
  )
}


function HypeKicksComponent() {

  const buttonStyle ={
    backgroundColor: 'rgb(149, 151, 251)'
  }

  const hypekicksUrl = 'https://joyful-shortbread-7b3c03.netlify.app';

  return (
    <>
                <div className='hypekicks' >
                <img src={HypeKicks} alt='' />
                <div className='hypekicks-info' >
                <h3>Hype Kicks</h3>
                <p><strong>Client :</strong> React, Material UI, HTML, CSS, React-Router, Formik, Yup, React Hooks</p>
                <p><strong>Server :</strong> NodeJS, Express, MongoDB, Stripe Integration, Bcrypt, Json Web Token, Multer,
                NodeMailer</p>
                <p>Hype Kicks is an online sneaker store. It offers huge collection of sneakers to choose from. The users can search, filter and sort through cool sneakers. It offers a complete user experience with the ability to add and update address as well as account details. The app also sends notification e-mail once your order is placed. It also has an Admin Portal which offers all the control over App data. The Admin can perform all CRUD operations on sneakers and also delete bot user accounts.</p>
                <Button onClick={() => window.open(hypekicksUrl, '_blank')} style={buttonStyle} variant='contained' color='secondary'>Check It Out</Button>
                </div>
                </div>
    </>
  )
}



function MovieDB() {

  const buttonStyle ={
    backgroundColor: 'rgb(149, 151, 251)'
  }

  const movieUrl = 'https://celadon-capybara-4cf642.netlify.app/'

  return (
    <>
                <div className='hypekicks' >
                <div style={{paddingLeft: '1rem'}} className='hypekicks-info' >
                <h3>Movie DB</h3>
                <p><strong>Client :</strong> React, Material UI, HTML, CSS, Formik, Yup, React-Router</p>
                <p><strong>Server :</strong> NodeJS, Express, MongoDB, Bcrypt, JWT</p>
                <p>Movie DB is your personal movies showcase.The app allows users to create a new account and login using those credentials. Here users can add their favourite movies, also edit or delete them. The app also has a dark/light mode. There is also a built in fun game if tic tac toe. Users can also view every single movie individually and watch their trailer.</p>
                <Button onClick={() => window.open(movieUrl, '_blank')} style={buttonStyle} variant='contained' color='secondary'>Check It Out</Button>
                </div>
                <img style={{height: '50vh', width: '35vw'}} src={moviedb} alt='' />
                </div>
    </>
  )
}