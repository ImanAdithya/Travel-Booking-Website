import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {SectionOne} from "./pages/SectionOne/SectionOne";
import {SectionTwo} from "./pages/SectionTwo/SectionTwo";
import {SectionThree} from "./pages/SectionThree/SectionThree";
import {SectionFour} from "./pages/SectionFour/SectionFour";
import {Contact} from "./pages/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {SectionFive} from "./pages/SectionFive/SectionFive";


function App() {
  return (
    <>
        <Header></Header>
        <Home></Home>
         <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionFive></SectionFive>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <Contact></Contact>
        <Footer></Footer>
    </>
  );
}

export default App;
