import React from 'react'
import Navbar from '../../../src/components/navbar/NavBar'
import Footer from '../../../src/components/footer/Footer'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import './home.scss'

const Home = () => {
    return (
      <>
      <Navbar />
        <div className="homeContainer">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Home Data"
          />
          <div className="name">Rachel Namiba</div>
          <div className="homeAbout">
            <div className="cardIcon">
              <PlaceIcon className="aboutIcon"/>
            </div>
            <div className="cardDetails">
              <p className="heading">Address:</p>
              <p className="description">1073 W Stephen Ave, Clawson</p>
            </div>
            <div className="cardIcon">
              <PhoneIphoneIcon className="aboutIcon"/>
            </div>
            <div className="cardDetails">
              <p className="heading">Call Us:</p>
              <p className="description">+254 715 733 257</p>
            </div>
            <div className="cardIcon">
              <EmailIcon className="aboutIcon"/>
            </div>
            <div className="cardDetails">
              <p className="heading">Email:</p>
              <p className="description">rupiahjeremiah@gmail.com</p>
            </div>
          </div>
          <hr className="aboutContactDivider"/>


        </div>
      <Footer />
      </>

    )
}

export default Home
