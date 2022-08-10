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
                  <li><a href="https://twitter.com/nkdevv"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.facebook.com/unvabdesign/"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://dribbble.com/_nK"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="https://www.instagram.com/unvab/"><i className="fa fa-instagram"></i></a></li>
              </ul>
          </div>

          <div className="nk-footer-text">
              <p>2016 &copy; Design by Unvab. Code by nK</p>
          </div>
      </div>
  </div>
</footer>
        </>
    )
}

export default Footer
