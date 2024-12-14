import React from 'react'
import java from '../static/java-course.jpg'
import python from '../static/python-course.jpg'
import react from '../static/react.png'

import aws from '../static/aws.png'
import datascience from '../static/data.jpeg'
import cpp from '../static/CPP.jpg'

import dsa from '../static/Data-Structure-1-1.jpg'
import azure from '../static/AZURE.jpg'
import soft from '../static/st.jpeg'
import { NavLink } from 'react-router-dom'



const Courses = () => {
    return (
        <div>
            <div className='bg-dark'>
                <h2 className='text-center p-3 text-light'>Explore Our </h2>
                <h1 className='text-center'>
                    <span className='text-info'>Popular Courses</span> <span className='text-warning'>Build For Everyone</span>
                </h1>

                <div className='d-flex justify-content-evenly mt-5'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={react} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">MERN STACK</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="/Syllabus/MERN.pdf" className="btn btn-warning" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={java} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={python} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-evenly mt-5'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={aws} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: '20rem' }}>
                        <img src={datascience} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Data Analytics</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2" >Register</NavLink>
                            </div>
                            <div>
                                <a href="/Syllabus/DA.pdf" className="btn btn-warning" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: '20rem' }}>
                        <img src={azure} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-evenly mt-5 pb-5'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={cpp} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={dsa} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={soft} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <NavLink to="/register" className="btn btn-primary mb-2">Register</NavLink>
                            </div>
                            <div>
                                <a href="#" className="btn btn-warning">Syllabus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses