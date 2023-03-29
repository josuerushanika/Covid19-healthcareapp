import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import NavbarDetail from './NavbarDetail';
import Footer from './Footer';
//import { Link } from 'react-router-dom';
//import styles from '../styles/Home.module.css';
//import { SiBuzzfeed } from "react-icons/si";
function Detailspage() {
  const history = useNavigate();
  const { summary } = useSelector((state) => state.summary);
  const {id}=useParams()
  const Countries = summary.find(item => item.Country === id)
  return (

    <main>
          <main>
             <div>
            <NavbarDetail/> 
            <button onClick={() => history(-1)}>Go Back</button>
            </div>
            <div >
              <div>
                <p>Name:</p>
                <p>{Countries?.Country}</p>
              </div>
              <div >
                <p>TotalConfirmed</p>
                <p >
                  <span>{Countries?.TotalConfirmed}</span>
                </p>
              </div>
              <div>
                <p >NewDeaths</p>
                <p >{Countries?.NewDeaths}</p>
              </div>
              <div>
                <p >TotalDeaths:</p>
                <p >{Countries?.TotalDeaths}</p>
              </div>
              <div>
                <p> NewRecovered:</p>
                <p >{Countries?.NewRecovered}</p>
              </div>
            </div>
            <div >
              <div>
                <p>TotalRecovered</p>
                <p >{Countries?.NewRecovered}</p>
              </div>
              <div>
                <p>Date</p>
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
