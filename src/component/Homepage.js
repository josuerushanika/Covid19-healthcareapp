import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SiBuzzfeed } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navbar from './NavbarDetail';
import Footer from './Footer';
import { fetchSummary, filteritem, handleChange } from '../redux/DetailsSlice/DetailsSlice';
import styles from '../styles/Home.module.css';
import img from '../img/img.jpg';

function Homepage() {
  const { summary, searchvalue } = useSelector((state) => state.summary);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  useEffect(() => {
    if (!searchvalue) dispatch(fetchSummary());
    dispatch(filteritem());
  }, [searchvalue, dispatch]);

  return (
    <main className={styles.mainwrapper}>
      <Navbar />
      <Header />
      <input
        className={styles.inputData}
        type="text"
        placeholder="Search your Country"
        value={searchvalue}
        onChange={(e) => dispatch(handleChange(e.target.value))}
      />
      <ul className={styles.maindiv}>

        {summary.map((Countries) => (
          <li className={styles.divwrapper} key={Countries}>
            <img className={styles.img} src={img} alt="img" />
            <span className={styles.items}>{Countries.Country}</span>

            <h3 className={styles.itemtile}>
              {' '}
              Total Case Confirmed :
              {Countries.TotalConfirmed}
            </h3>
            <Link className={styles.link} to={`/details/${Countries.Country}`}><SiBuzzfeed /></Link>
          </li>
        ))}

      </ul>
      <Footer />
    </main>
  );
}

export default Homepage;
