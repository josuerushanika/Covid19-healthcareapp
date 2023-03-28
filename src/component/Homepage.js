import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import NavbarDetail from './NavbarDetail';
import Footer from './Footer';
import {fetchSummary} from '../redux/DetailsSlice/DetailsSlice'

function Homepage() {
  const { summary } = useSelector((state) => state.summary);

  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchSummary())
  })

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
         {/* {summary.map((Countries) =>{
          <h2>{Countries.Country}</h2>
         })} */}
        </div>

        <h2> Countries.Date</h2>
       </div>
      <Footer />
    </main>
  );
}

export default Homepage;


