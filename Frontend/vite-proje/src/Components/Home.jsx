import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import '../Components/Home.scss'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000").then(res=>{
            setData(res.data)
            
        })
    },[data])
  return (
    <>
   
    <div className='picture'>
       
        <div className='picture__text'>
            <h1>Best IT Solition <br />in your city </h1>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae ipsa non repellendus?</p>

        </div>
        <div>
        <button className='btn1'>Find Out More</button>
        </div>
       
    
    </div>
    <div className='main'>
        <div  className='main__text'>
            <p>INDUSTRY WE OFFER</p>
            <h3>Managed IT services customized for your industry</h3>
            <p>We understand the complexities of modern <br /> markets and translate them into real business solutions br    for automotive, financial, insurance, pharma & life sciences,</p>
        </div>
        <div className="main__cards">
            <div className="card">
                <div className='plane'>
                <AirplanemodeActiveIcon/>
                </div>
                <div className='card__text'>Industries & Manufacturing</div>
               
            </div>
            <div className="card">
                <div className='plane'>
                <AirplanemodeActiveIcon/>
                </div>
                <div className='card__text'>Industries & Manufacturing</div>
               
            </div>
            <div className="card">
                <div className='plane'>
                <AirplanemodeActiveIcon/>
                </div>
                <div className='card__text'>Industries & Manufacturing</div>
               
            </div>
            <div className="card">
                <div className='plane'>
                <AirplanemodeActiveIcon/>
                </div>
                <div className='card__text'>Industries & Manufacturing</div>
               
            </div>
        </div>
    </div>
    <div className='twodivs'>
        <div className='div1'>
           <div> <h1>Insights to help you do what you do <br /> better, faster and more profitably.</h1>
            <p>We understand the complexities of <br /> modern markets and translate them into real business solutions <br /> for automotive, financial, insuranc.</p></div>
            <div><button className='btn'>Learn More</button></div>
        </div>

        <div className='div2'>
           <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg" alt="" />
        </div>
    </div>
    <div className='crudsection'>
        <div className='crudsection__text'>
            <p>OUR CASE STUDY</p>
            <h1>We work with global brands</h1>
        </div>
        <div className='crud__cards'>
            {
                data.map(item=>{
                    return(
                        <div className="crud__card">
                <div className='crud__card__img'>
                    <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog5.jpg" alt="" />
                </div>
                <div className='crud__card__text'>
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                </div>
                

            </div>
                    )
                })
            }
            
            
        </div>

    </div>
    <div className='footer__div'>
        <div> <h1>Let's work together.</h1></div>
       <div><p>We understand the complexities of <br /> modern markets and translate them into real business solutions <br /> for automotive, financial, insuranc.</p></div>
        <div>   <button className='btn3'>Start Discussion</button></div>
     
    </div>
    <div className='footersection'>
        <div className='footer'>
        Copyright ©2023 All rights reserved | This template is made with  by Colorlib
        </div>
    </div>
       

    </>
  )
}

export default Home