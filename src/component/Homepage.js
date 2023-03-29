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
          <li>
            <button>
               <Link to={`/details/${Countries.TotalDeaths}`}><SiBuzzfeed /></Link>
             </button>
             <img src='' alt='' />
             <span>{Countries.Country}</span>
             <h3> Total Case Confirmed :{Countries.TotalConfirmed}</h3>
             
           </li>
          )

         )}
        </ul>
       </div>
      <Footer />
    </main>
  );
}

export default Homepage;


