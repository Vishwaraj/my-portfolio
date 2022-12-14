import { Button, Grid, IconButton } from '@mui/material'
import React from 'react'
import './styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Footer() {

    const linkedinUrl = 'https://www.linkedin.com/in/vishwaraj-kamble/';
    const githubUrl = 'https://github.com/Vishwaraj'

    const resumeButton = {
        backgroundColor: 'rgb(149, 151, 251)',
        marginLeft: '0.9rem'
    }

    const resumeurl = 'https://drive.google.com/file/d/148dY0WuQdYa3h32P-aEALPfaqMH9VOhi/view?usp=sharing'


  return (
    <>
        <Grid>
            <Grid>
                <div className='footer-container' >
                <div className='footer-info' >
                <h3>Liked the Portfolio?</h3>
                 <h3>Let's Talk!😃</h3>
                </div>
                <div className='reachout-info' >
                   <div className='reachout-icons' >
                   <IconButton onClick={()=>window.open(linkedinUrl, '_blank')} >
                    <LinkedInIcon fontSize='large' />
                   </IconButton>
                   <IconButton onClick={()=>window.open(githubUrl, '_blank')} >
                    <GitHubIcon fontSize='large' />
                   </IconButton>
                   <Button onClick={()=>window.open(resumeurl, '_blank')} style={resumeButton} variant='contained' startIcon={<DescriptionIcon fontSize='large'/>} >
                        Resume
                   </Button>
                   </div>
                    
                    <div className='email-info' >
                    <GoogleIcon fontSize='large' />
                    <p>vishwarajk96@gmail.com</p>
                    </div>

                    <div className='phone-info' >
                        <PhoneIcon fontSize='large' />
                        <p>9637774387</p>
                    </div>
                   
                </div>
                </div>
            </Grid>
        </Grid>
    </>
  )
}
