import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import { SiBuzzfeed } from "react-icons/si";
import Navbar from './NavbarDetail';
import Footer from './Footer';
import {fetchSummary, filteritem, handleChange} from '../redux/DetailsSlice/DetailsSlice'
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import img from '../img/img.jpg';

function Homepage() {
  const { summary, searchvalue} = useSelector((state) => state.summary);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchSummary())
  },[])

  useEffect(() => {
   if (!searchvalue) dispatch(fetchSummary())
    dispatch(filteritem())
 },[searchvalue])
  
  return (
    <main>
      <Navbar />
      <Header />
       <input 
       className={styles.inputData}
        type="text"
        placeholder='Search your Country'
        value = {searchvalue} 
        onChange={(e)=>dispatch(handleChange(e.target.value))}
       />
       <div className={styles.maindiv}>
        <h3>CountryName: Countries.Country</h3>
        <ul className={styles.ulwrapper}>
         {summary.map((Countries) =>(
          <li className={styles.liwrapper}>
             <img  className={styles.img} src={img} alt='' />
             <span>{Countries.Country}</span>
             <Link  className={styles.link} to={`/details/${Countries.Country}`}><SiBuzzfeed /></Link>
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


