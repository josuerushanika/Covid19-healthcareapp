import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import NavbarDetail from './NavbarDetail';
import Footer from './Footer';
//import { BiRightArrowCircle } from 'react-icons/bi';
//import { Link } from 'react-router-dom';
//import { SiBuzzfeed } from "react-icons/si";
import styling from '../styles/Datailspage.module.css';

function Detailspage() {
  const history = useNavigate();
  const { summary } = useSelector((state) => state.summary);
  const {id}=useParams()
  const Countries = summary.find(item => item.Country === id)
  return (

    <main className={ styling.mainwrapper }>
          <main className={ styling.maindiv  }>
          <NavbarDetail/> 
             <div>
            <button className={ styling.button } onClick={() => history(-1)}>Go Back</button>
            </div>
            <div >
              <div className={ styling.country }>
                <p> Country Name : {Countries?.Country}</p>
              </div>
              <div >
                <p >
                  <span>TotalConfirmed : {Countries?.TotalConfirmed}</span>
                </p>
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
