import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../src/components/navbar/NavBar'
import Footer from '../../../src/components/footer/Footer'
import './projectdetails.scss'

const ProjectDetails = () => {
    return (
      <>
      <div className="nk-main">

      <div className="nk-pagination nk-pagination-center">
          <div className="container">
              <Link className="nk-pagination-center" to="/">
                  <span className="nk-icon-squares"></span>
              </Link>
          </div>
      </div>

  <div className="container">
      <div className="nk-portfolio-single">

          <div className="nk-gap-4 mb-14"></div>
          <h1 className="nk-portfolio-title display-4">Video Project</h1>
          <div className="row vertical-gap">
              <div className="col-lg-8">
                  <div className="nk-portfolio-info">
                      <div className="nk-portfolio-text">
                          <p>Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et quam, ullamcorper velit. Aliquam maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.</p>
                          <p>Curabitur tristique, felis ut mattis auctor, elit ante laoreet libero, ac lorem quam vitae libero. Suspen disse aliquet eget risus quis vehicula.</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <table className="nk-portfolio-details">
                      <tr>
                          <td>
                              <strong>Client:</strong>
                          </td>
                          <td>Rachel Namiba</td>
                      </tr>
                      <tr>
                          <td>
                              <strong>Date:</strong>
                          </td>
                          <td>06.20.2016</td>
                      </tr>
                      <tr>
                          <td>
                              <strong>Link:</strong>
                          </td>
                          <td>
                              <a href="#" title="Live preview" data-share="facebook">www.google.com</a>
                          </td>
                      </tr>
                  </table>
              </div>
          </div>
          <div className="nk-gap-4 mt-14"></div>

      </div>
  </div>

  <img className="nk-img-fit" src="assets/images/portfolio-4-video-thumb.jpg"/>

    <div className="nk-pagination nk-pagination-center">
        <div className="container">
            <a className="nk-pagination-prev" href="#">
                <span className="pe-7s-angle-left"></span> Previous Work</a>
            <a className="nk-pagination-next" href="#">Next Work <span className="pe-7s-angle-right"></span> </a>
        </div>
    </div>


<Footer />

</div>
      </>
    )
}

export default ProjectDetails
