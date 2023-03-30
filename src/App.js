import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Homepage from './component/Homepage'
import Detailspage from './component/Detailspage';
import {fetchSummary} from './redux/DetailsSlice/DetailsSlice'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(fetchSummary())

  },[dispatch])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="details/:id" element={<Detailspage  />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
