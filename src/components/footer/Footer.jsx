import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <>
        <footer className="nk-footer">
  <div className="nk-footer-cont">
      <div className="container text-xs-center">
          <div className="nk-footer-social">
              <ul>
                  <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="!#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="!#"><i className="fa fa-instagram"></i></a></li>
              </ul>
          </div>

          <div className="nk-footer-text">
              <p>2022 &copy; Developed by Rachel Namiba</p>
          </div>
      </div>
  </div>
</footer>
        </>
    )
}

export default Footer
