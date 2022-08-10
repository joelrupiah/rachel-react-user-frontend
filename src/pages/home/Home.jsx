import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../src/components/navbar/NavBar'
import Footer from '../../../src/components/footer/Footer'

const Home = () => {
    return (
      <>
        <Navbar />

  <div className="nk-main">

      <div className="nk-header-title nk-header-title-full">
          <div className="bg-image">
              <div style={{backgroundImage: "url('assets/images/coding.jpg')"}}></div>
              <div className="bg-image-overlay" style={{backgroundColor: "rgba(12, 12, 12, 0.6)"}}></div>
          </div>
          <div className="nk-header-table">
              <div className="nk-header-table-cell">
                  <div className="container">

                      <h2 className="nk-subtitle text-white">Some Text</h2>


                      <h1 className="nk-title display-3 text-white">Rachel Namiba
                          <br />
                          <em className="fw-400">Software Developer</em>
                      </h1>


                      <div className="nk-gap"></div>
                      <div className="nk-header-text text-white">
                          <div className="nk-gap-4"></div>
                      </div>


                  </div>
              </div>
          </div>

          <div>
              <a className="nk-header-title-scroll-down text-white" href="#nk-header-title-scroll-down">
                  <span className="pe-7s-angle-down"></span>
              </a>
          </div>

      </div>

      <div id="nk-header-title-scroll-down"></div>

      <div className="bg-white" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-xs-center">
                      <div className="nk-gap-4 mt-9"></div>

                      <h2 className="display-4">About</h2>
                      <div className="nk-gap mnt-5"></div>

                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                      </p>

                      <div className="nk-gap-4 mt-25"></div>
                  </div>
              </div>
          </div>
      </div>

      <div className="nk-box bg-dark-1 text-white">
          <div className="bg-image bg-image-parallax" style={{backgroundImage: "url('assets/images/bg-pattern.jpg')"}}></div>
          <div className="nk-gap-5 mnt-6"></div>
          <div className="container">
              <div className="row vertical-gap">
                  <div className="col-md-6 col-lg-3">
                      <div className="nk-ibox-1">
                          <div className="nk-ibox-icon">
                              <span className="pe-7s-portfolio"></span>
                          </div>
                          <div className="nk-ibox-cont">
                              <div className="nk-ibox-title">Java Spark</div>
                              <div className="nk-ibox-text">Projects Completed</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                      <div className="nk-ibox-1">
                          <div className="nk-ibox-icon">
                              <span className="pe-7s-clock"></span>
                          </div>
                          <div className="nk-ibox-cont">
                              <div className="nk-ibox-title">1465</div>
                              <div className="nk-ibox-text">Working Hours</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                      <div className="nk-ibox-1">
                          <div className="nk-ibox-icon">
                              <span className="pe-7s-star"></span>
                          </div>
                          <div className="nk-ibox-cont">
                              <div className="nk-ibox-title">612</div>
                              <div className="nk-ibox-text">Positive Feedbacks</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                      <div className="nk-ibox-1">
                          <div className="nk-ibox-icon">
                              <span className="pe-7s-like"></span>
                          </div>
                          <div className="nk-ibox-cont">
                              <div className="nk-ibox-title">735</div>
                              <div className="nk-ibox-text">Happy Clients</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="nk-gap-5 mnt-6"></div>
      </div>

      <div className="nk-box bg-white" id="projects">
          <div className="nk-gap-4 mt-5"></div>

          <h2 className="text-xs-center display-4">My Projects</h2>

          <div className="nk-gap mnt-6"></div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                      <div className="text-xs-center">Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.
                      </div>
                  </div>
              </div>
          </div>

          <div className="nk-gap-2 mt-12"></div>
          <div className="container">
          <div className="nk-portfolio-list nk-isotope nk-isotope-3-cols">


              <div className="nk-isotope-item" data-filter="Mockup">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-7-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                              <div className="portfolio-item-category">Mockup</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Print">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-4-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Modern T-Shirt</h2>
                              <div className="portfolio-item-category">Print</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Branding">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-5-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Minimal Bag</h2>
                              <div className="portfolio-item-category">Branding</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Design">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-9-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Clean &amp; Groovy</h2>
                              <div className="portfolio-item-category">Design</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Design">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-3-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Minimal Mobile App</h2>
                              <div className="portfolio-item-category">Design</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Print">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-8-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">White T-Shirt</h2>
                              <div className="portfolio-item-category">Print</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Branding">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-2-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Business Card</h2>
                              <div className="portfolio-item-category">Branding</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Photography">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-6-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Heja Stockholm</h2>
                              <div className="portfolio-item-category">Photography</div>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="nk-isotope-item" data-filter="Photography">
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to="/project-details" className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-12-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">Paper Bag</h2>
                              <div className="portfolio-item-category">Photography</div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          </div>
          <div className="nk-gap-4 mt-15"></div>
      </div>

      <div className="container" id="contact">
          <div className="nk-gap-5"></div>
          <div className="row vertical-gap">
              <div className="col-lg-5">

                  <h2 className="display-4">Contact Info:</h2>
                  <div className="nk-gap mnt-3"></div>

                  <p>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>

                  <ul className="nk-contact-info">
                      <li>
                          <strong>Address:</strong> Ruiru, Kiambu County</li>
                      <li>
                          <strong>Phone:</strong> +254700000000</li>
                      <li>
                          <strong>Email:</strong> rachelnamiba@gmail.com</li>
                      <li>
                          <strong>Linkedin:</strong> <a href="https://github.com/joelrupiah" target="_blank"
                            style={{ textDecoration: 'none', color: 'gray' }}>
                          Rachel Namiba</a></li>
                  </ul>

              </div>
              <div className="col-lg-7">
                  <form action="#" className="nk-form nk-form-ajax">
                      <div className="row vertical-gap">
                          <div className="col-md-6">
                              <input type="text" className="form-control required" name="name" placeholder="Full Name" />
                          </div>
                          <div className="col-md-6">
                              <input type="email" className="form-control required" name="email" placeholder="Email Address" />
                          </div>
                      </div>

                      <div className="nk-gap-1"></div>
                      <input type="text" className="form-control required" name="title" placeholder="Subject" />

                      <div className="nk-gap-1"></div>
                      <textarea className="form-control required" name="message" rows="8" placeholder="Message" aria-required="true"></textarea>
                      <div className="nk-gap-1"></div>
                      <div className="nk-form-response-success"></div>
                      <div className="nk-form-response-error"></div>
                      <button className="nk-btn">Send Message</button>
                  </form>
              </div>
          </div>
          <div className="nk-gap-5"></div>
      </div>

<Footer />

  </div>

      </>

    )
}

export default Home
