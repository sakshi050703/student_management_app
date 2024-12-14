import React from 'react'
import poster1 from '../static/java.png'
import poster2 from '../static/python.png'
import poster3 from '../static/datasceince.png'
import poster4 from '../static/students.jpg'
const Slider = () => {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={poster1} className="d-block w-100" alt="..." height={400}/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster2} className="d-block w-100" alt="..." height={400} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster3} className="d-block w-100" alt="..." height={400} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={poster4} className="d-block w-100" alt="..." height={400} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
export default Slider