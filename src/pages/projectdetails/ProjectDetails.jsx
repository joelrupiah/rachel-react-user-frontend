import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Navbar from '../../../src/components/navbar/NavBar'
import Footer from '../../../src/components/footer/Footer'
import './projectdetails.scss'
import Axios from "axios"
import { useParams } from 'react-router-dom';

const ProjectDetails = (props) => {

  const initialState = {
    name: "",
    description: "",
    client: "",
    link: "",
    category: "",
  };

  const { id } = useParams()
  // const navigate = useNavigate()

  const [project, setProject] = useState(initialState)

  // function handleChange(e) {
  //   setProject({ ...project, [e.target.name]: e.target.value });
  // }

  useEffect(() => {
    const getProject = () => {
      Axios.get(`/projects/get-project/${id}`)
        .then(res => {
          setProject(res.data.data.project)
        })
    }
    getProject()
  }, [id])

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
          <h1 className="nk-portfolio-title display-4">{project.name}</h1>
          <div className="row vertical-gap">
              <div className="col-lg-8">
                  <div className="nk-portfolio-info">
                      <div className="nk-portfolio-text">
                          <p>{project.description}</p>
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
                              <a href={project.link} title="Code preview" rel="noopener noreferrer" target="_blank">Github Link</a>
                          </td>
                      </tr>
                  </table>
              </div>
          </div>
          <div className="nk-gap-4 mt-14"></div>

      </div>
  </div>

  {/*<img className="nk-img-fit" src="assets/images/portfolio-4-video-thumb.jpg"/>*/}

    <div className="nk-pagination nk-pagination-center">
        <div className="container">
            <a className="nk-pagination-prev" href="!#">
                <span className="pe-7s-angle-left"></span> Previous Work</a>
            <a className="nk-pagination-next" href="!#">Next Work <span className="pe-7s-angle-right"></span> </a>
        </div>
    </div>


<Footer />

</div>
      </>
    )
}

export default ProjectDetails
