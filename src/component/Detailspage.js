import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import NavbarDetail from './NavbarDetail';
import Footer from './Footer';
import styling from '../styles/Datailspage.module.css';
import img2 from '../img/img2.png';

function Detailspage() {
  const history = useNavigate();
  const { summary } = useSelector((state) => state.summary);
  const { id } = useParams();
  const Countries = summary.find((item) => item.Country === id);
  return (

    <main className={styling.mainwrapper}>
      <main className={styling.maindiv}>
        <boutton className={styling.backIcon} onClick={() => history(-1)}>
          <ImArrowLeft />
        </boutton>

        <NavbarDetail />

        <div className={styling.countrydetails}>
          <h3 className={styling.titledetail}>
            {Countries?.TotalConfirmed}
            {' '}
            Cases
          </h3>
          <p className={styling.head}>
            {' '}
            {Countries?.Country}
          </p>
          <img className={styling.image} src={img2} alt="img2" />
        </div>
        <div className={styling.updateinfos}>Infos update</div>

        <div className={styling.updatecenter}>
          <div>
            <p>
              NewDeaths :
              {Countries?.NewDeaths}
            </p>
          </div>
          <div>
            <p>
              {' '}
              TotalDeaths:
              {Countries?.TotalDeaths}
            </p>
          </div>
          <div>
            <p>
              {' '}
              NewRecovered:
              {Countries?.NewRecovered}
            </p>
          </div>
        </div>

        <div className={styling.updateinfos2}>
          <div>
            <p>
              {' '}
              TotalRecovered :
              {Countries?.NewRecovered}
            </p>
          </div>
          <div>

            <p>
              <span>Dates</span>
              {Countries?.Date}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
}

export default Detailspage;
