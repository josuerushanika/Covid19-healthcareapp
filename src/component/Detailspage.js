import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
function Detailspage() {
  const { summary } = useSelector((state) => state.summary);
  const {id}=useParams()
  const Countries = summary.find(item => item.Country === id)
  console.log(Countries)
  return (

    <main>
          <main>
            <div >
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
