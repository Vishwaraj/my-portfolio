import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton } from '@mui/material'
import React from 'react'
import './styles/OtherProjects.css';
import pokedexImg from '../images/pokedex.png';
import breakingBadImg from '../images/breakingBad.png';
import newsHubImg from '../images/newsHub.png';
import dogsDB from '../images/dogsDB.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function OtherProjects() {

    const otherProjects = [
        {
            title: 'Dogs DB',
            tech: 'React, CSS, Material UI',
            desc: 'An App which showcases multiple breeds of dogs and their details Fetches data from dogs API',
            link: 'https://cerulean-starlight-efcbd9.netlify.app/',
            image: dogsDB
        },
        {
            title: 'PokeDex',
            tech: 'HTML, CSS, JavaScript',
            desc: 'An App built with HTML, CSS, JavaScript, which allows user to view 500+ pokemons from 4 different regions. It fetches data from PokeAPI.',
            link: 'https://zesty-fairy-0cedd7.netlify.app/',
            image: pokedexImg
        },
        {
            title: 'BreakingBad DB',
            tech: 'HTML, CSS, JavaScript',
            desc: 'An app built with HTML, CSS, JavaScript which showcases all the characters from the series Breaking Bad. User can individually see character details, and also search a specific character. fetches data from BreakingBad API',
            link: 'https://eclectic-genie-63895c.netlify.app/',
            image: breakingBadImg
        },
        {
            title: 'NewsHub',
            tech: 'HTML, CSS, JavaScript',
            desc: 'You can view all the latest news and even search news of your choice. fetches data from news API',
            link: 'https://comforting-profiterole-4ffe01.netlify.app/',
            image: newsHubImg
        },
    ]

  return (
    <>
        <Grid>
            <Grid>
                <div className='other-projects-container' >
                <h3>Other Fun-Sized Projects</h3>
                <div className='other-projects-list' >
                {
                    otherProjects.map((app) => {
                        return <OtherProjectCard app={app} />
                    })
                }
                </div>
                </div>
            </Grid>
        </Grid>
    </>
  )
}


function OtherProjectCard({app}) {

    let screen = window.innerWidth;

    

    const buttonStyle = {
        backgroundColor: 'rgb(149, 151, 251)',
        // marginLeft: '12rem'
    }

    const buttonStyleMin = {
        backgroundColor: 'rgb(149, 151, 251)',
        // marginLeft: '8rem'
    }

    return (
        <>
            <Card elevation={2} style={screen > 480 ? {width: '35vw', }  : {width:'80vw', textAlign: 'center'}} >
            
            <div className='card-body' >

           <div  >
           <CardMedia
             component="img"
             alt="some-img"
             height="200"
             image={app.image}
             className='card-image'
              />
           </div>
            
       
           
            <div className='card-info-body' >
            <CardContent>
     
     <p className='card-info' >{app.title}<IconButton
     onClick={()=>window.open(app.link, '_blank')}
     ><ArrowForwardIcon fontSize='small' /></IconButton></p>
       <p className='card-info' >{app.tech}</p>
       <p className='card-info' >{app.desc}</p>


       </CardContent>
            </div>
          
         
             </div>
          
            
            </Card>
        </>
    )
}