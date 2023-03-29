import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import { SiBuzzfeed } from "react-icons/si";
import NavbarDetail from './NavbarDetail';
import Footer from './Footer';
import {fetchSummary} from '../redux/DetailsSlice/DetailsSlice'
import { Link } from 'react-router-dom';

function Homepage() {
  const { summary } = useSelector((state) => state.summary);

  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchSummary())
  },[])
//console.log(summary);
  return (
    <main>
      <NavbarDetail />
      <Header />
       <input 
        type="text"
        placeholder='Search your Country'
       />
       <div>
        <h3>CountryName: Countries.Country</h3>

        <ul>
         {summary.map((Countries) =>(

                 
                 <><SiBuzzfeed /><li>
             <img src='' alt='' />
             <span>{Countries.Country}</span>
             <h3> Total Case Confirmed :{Countries.TotalConfirmed}</h3>
             <button>
               <Link to={`/details/${Countries.TotalDeaths}`}></Link>
             </button>
           </li></>
          )

         )}
        </ul>
       </div>
      <Footer />
    </main>
  );
}

export default Homepage;


