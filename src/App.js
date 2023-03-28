import './App.css';

import { useEffect } from 'react';
import NavbarDetail from './component/NavbarDetail'
import {fetchSummary} from './redux/DetailsSlice/DetailsSlice'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(fetchSummary())

  },[dispatch])
  return (
    <><NavbarDetail /><div className="App">
    </div></>
  );
}

export default App;
