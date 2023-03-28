import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import NavbarDetail from './NavbarDetail';
import Footer from './Footer';

function Homepage() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);


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
        <h2> Countries.Date</h2>
       </div>
      <Footer />
    </main>
  );
}

export default Homepage;

