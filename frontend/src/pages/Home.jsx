import React from "react";
import Navbar from "../components/Navbar";
import Freebook from "../components/Freebook";
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  );
};

export default Home;
