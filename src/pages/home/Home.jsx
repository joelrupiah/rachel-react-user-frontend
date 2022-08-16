import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../src/components/navbar/NavBar'
import Footer from '../../../src/components/footer/Footer'
import Axios from 'axios'

const Home = () => {

  const [stacks, setStacks] = useState([])
  // const [profiles, setProfiles] = useState([])
  const [projects, setProjects] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = async(e) => {

    e.preventDefault()

    Axios.post("/messages/send-message", {name, email, subject, message})

  }

  const getAllStacks = () => {
    Axios.get("/stacks/get-stacks")
      .then(res => {
        setStacks(res.data.data.getStacks)
      })
  }
  // const getAllProfiles = () => {
  //   Axios.get("/profiles/get-profiles")
  //     .then(res => {
  //       setProfiles(res.data.data.getProfiles)
  //     })
  // }
  const getAllProjects = () => {
    Axios.get("/projects/get-projects")
      .then(res => {
        setProjects(res.data.data.getProjects)
      })
  }

  // const get

  useEffect(() => {
    // getAllProfiles()
    getAllProjects()
    getAllStacks()
  }, [])

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

                  { stacks.map((stack, index) => (
                    <div className="col-md-6 col-lg-3">
                      <div className="nk-ibox-1">
                          <div className="nk-ibox-icon">
                              <span className="pe-7s-portfolio"></span>
                          </div>
                          <div className="nk-ibox-cont">
                              <div className="nk-ibox-title">{stack.name}</div>
                              <div className="nk-ibox-text">Junior Developer</div>
                          </div>
                      </div>
                  </div>
                  ))
                }

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
                      <div className="text-xs-center"><b>My Projects Portfolio.</b>
                      </div>
                  </div>
              </div>
          </div>

          <div className="nk-gap-2 mt-12"></div>
          <div className="container">
          <div className="nk-portfolio-list nk-isotope nk-isotope-3-cols">
              { projects.map((project, index) => (
                <div className="nk-isotope-item" data-filter="Mockup" key={index}>
                  <div className="nk-portfolio-item nk-portfolio-item-square nk-portfolio-item-info-style-1">
                      <Link to={`/project-details/${project._id}`} className="nk-portfolio-item-link"></Link>
                      <div className="nk-portfolio-item-image">
                          <div style={{backgroundImage: "url('assets/images/portfolio-7-sm.jpg')"}}></div>
                      </div>
                      <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-xs-center">
                          <div>
                              <h2 className="portfolio-item-title h3">{project.name}</h2>
                              <div className="portfolio-item-category">{project.category}</div>
                          </div>
                      </div>
                  </div>
              </div>
            ))
            }

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

                  <p><b>Send me a message or call.</b></p>

                  <ul className="nk-contact-info">
                      <li>
                          <strong>Address:</strong> Ruiru, Kiambu County</li>
                      <li>
                          <strong>Phone:</strong> +254798356532</li>
                      <li>
                          <strong>Email:</strong> namibaracheal@gmail.com</li>
                      <li>
                          <strong>Linkedin:</strong> <a href="!#" target="_blank"
                            style={{ textDecoration: 'none', color: 'gray' }}>
                          Rachel Namiba</a></li>
                  </ul>

              </div>
              <div className="col-lg-7">
                  <form className="nk-form nk-form-ajax" onSubmit={sendMessage}>
                      <div className="row vertical-gap">
                          <div className="col-md-6">
                              <input
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                                type="text" className="form-control required" name="name" placeholder="Full Name" />
                          </div>
                          <div className="col-md-6">
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email" className="form-control required" name="email" placeholder="Email Address" />
                          </div>
                      </div>

                      <div className="nk-gap-1"></div>
                      <input
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        type="text" className="form-control required" name="title" placeholder="Subject" />

                      <div className="nk-gap-1"></div>
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="form-control required" name="message" rows="8" placeholder="Message" aria-required="true"></textarea>
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
