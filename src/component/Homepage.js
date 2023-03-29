import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
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
console.log(summary);
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

        <div>
         {summary.map((Countries) =>(
          <Link to={`/details/${Countries.TotalDeaths}`}>{Countries.Country}</Link>)
         )}
        </div>
        <h2> Countries.Date</h2>
       </div>
      <Footer />
    </main>
  );
}

export default Homepage;


