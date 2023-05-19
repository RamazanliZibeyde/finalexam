import React from 'react'
import '../Components/Navbar.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar1">
        <div className='navbar11'>
        <div className='navbar1__text'>
            <p>Now Hiring: Are you a driven and motivated 1st Line IT Support Engineer?</p>
        </div>
        <div className='navbar1__icons'>
         <FacebookIcon/>
         <TwitterIcon/>
         <LinkedInIcon/>
         <YouTubeIcon/>



        </div>
        </div>
       
    </div>
    <div className="navbar2">
        <div className='logo__links'>
        <div className='logo'><a href="#"> <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" /> </a></div>
        <div className='links'>
        <ul>
            <li>
              <Link className='link' to="/">Home</Link>

            </li>
            <li>
                <Link className='link' to="/Add">Add</Link>
            </li>
        </ul>
        
    </div>
        </div>
       
    <div className="btn__icon">
        <div className='button'>
        <button className='btn'>Free Quote</button>
        </div>
        <div className="icon__text">
        <div className="icon">
            <HeadphonesIcon/>
        </div>
        <div className="text">
            <p>Have any Question?</p>
            <p>Call: 10 (78) 837 3647</p>
        </div>
        </div>
        

        

    </div>
    </div>
   
    
    </>
    
  )
}

export default Navbar