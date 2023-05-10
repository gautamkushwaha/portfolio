import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import About from '../Gautam/About';
import Cards from '../Gautam/Cards';
import Experience from '../Gautam/Experience';
import Projects from '../Gautam/Projects';

export default function Layout({ children }) {
  return (
   <div className="content">
    <Navbar/>
   { children }
    <Footer/>
   </div>
  );
}
