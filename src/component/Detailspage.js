import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './NavbarDetail';
import Footer from './Footer';
import {ImArrowLeft } from "react-icons/im";
import styling from '../styles/Datailspage.module.css';
import img from '../img/img.jpg';

function Detailspage() {
  const history = useNavigate();
  const { summary } = useSelector((state) => state.summary);
  const {id}=useParams()
  const Countries = summary.find(item => item.Country === id)
  return (

    <main className={ styling.mainwrapper }>
          <main className={ styling.maindiv  }>
            <li  className={ styling.backIcon } onClick={() => history(-1)}> <  ImArrowLeft/> </li>
            <span></span>
          <Navbar />
            
            <div >
              <div className={ styling.countrydetails }>
                <p> Country Name : {Countries?.Country}</p>
                <span>TotalConfirmed : {Countries?.TotalConfirmed}</span>
                <img  className={styling.img} src={img} alt='img' />
              </div>
              <div>
                <p >NewDeaths : {Countries?.NewDeaths}</p>
              </div>
              <div>
                <p > TotalDeaths:   {Countries?.TotalDeaths}</p>
              </div>
              <div>
                <p > NewRecovered:  {Countries?.NewRecovered}</p>
              </div>
            </div>
            <div >
              <div>
                <p > TotalRecovered : {Countries?.NewRecovered}</p>
              </div>
              <div>

                <p>
                  <span>Dates</span>
                  {Countries?.Date}
                </p>
              </div>
            </div>
           </main> 
          <Footer />
        </main>
  )
}

export default Detailspage
