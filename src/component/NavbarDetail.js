import React from 'react';
//import { NavLink } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
//import { IoIosArrowBack } from 'react-icons/io';

function NavbarDetail() {
  return (
    <main>
      <div>
      <h1>covid19 App</h1>
      </div>

    <div>
      <BiMicrophone/>
      <AiOutlineSetting/>
    </div>

    </main>
  )
}
export default NavbarDetail
