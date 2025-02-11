import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='bg-info m-0 p-0 w-100 footer'>
      <div className='fs-1 fw-bold pt-5 pb-3'>
        ABC IT Training and Placement
      </div>
      <div className='row m-0'>
        <div className='mt-3 col-5 text-center p-0'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9070359731572!2d73.81124657465145!3d18.487869670173485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4501e43173%3A0xcf8a06e3b69a117f!2sAdhyayan%20IT%20Training%20%26%20Placement!5e0!3m2!1sen!2sin!4v1733248432140!5m2!1sen!2sin" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-2' title='map'></iframe>
        </div>
        <div className='col-7 text-center ps-3 mt-3'>
          <div className='fs-3 fw-bold'>We Are</div>
          <div className='fs-1 fw-bold text-danger'>Available Here...</div>
          <div className='fs-4 fw-bold'>
            <div className='text-start d-flex'>
              <div className='me-3'>
                < i class="bi bi-pin-map"></i>
              </div>
              <div>
                ABC, Office No.306, 3rd Floor, Krishnai Plaza, Canal Rd, Karve Nagar, Pune, Maharashtra 411052
              </div>
            </div>
            <div className='text-start'>
              <span className='me-3'><i class="bi bi-telephone-outbound"></i></span>
              +91 869-869-3458
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer