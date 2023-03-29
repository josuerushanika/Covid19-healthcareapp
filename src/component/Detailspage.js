import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
function Detailspage() {
  const {id}=useParams()

  return (
    // <>
    // <main>
    // <>
    //       <main>
    //         <div >
    //           <h1></h1>
    //         </div>
    //         <div >{country}</div>
    //         <div >
    //           <div>
    //             <p>Name:</p>
    //             <p>{Countries.Country}</p>
    //           </div>
    //           <div >
    //             <p>TotalConfirmed</p>
    //             <p >
    //               <span>{Countries.TotalConfirmed}</span>
    //             </p>
    //           </div>
    //           <div>
    //             <p >NewDeaths</p>
    //             <p >{Countries.NewDeaths}</p>
    //           </div>
    //           <div>
    //             <p >TotalDeaths:</p>
    //             <p >{Countries.TotalDeaths}</p>
    //           </div>

    //           <div>
    //             <p> NewRecovered:</p>
    //             <p >{Countries.NewRecovered}</p>
    //           </div>

    //         </div>
          
    //         <div >
    //           <div>
    //             <p>TotalRecovered</p>
    //             <p >{Countries.NewRecovered}</p>
    //           </div>

    //           <div>
    //             <p>Date</p>
    //             <p>
    //               <span>Dates</span>
    //               {Countries.Date}
    //             </p>
    //           </div>
    //         </div>
    //       </main>
    //       <Footer />
    //     </>
    // </main>
    // </>
    <h1>{id}</h1>
  )
}

export default Detailspage
