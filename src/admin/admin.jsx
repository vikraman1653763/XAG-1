import React from 'react'
import '../style/admin.css';
import { MdTransitEnterexit } from "react-icons/md";
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className='admin-container'>
      <h2 className='admin-title'>ADMIN DASHBOARD</h2>


      <div className='change-box'>

      <section className='admin-box'>
        <h3 className='ad-1 admin-box-title'>Battery</h3>
        <h4 className='admin-box-date'> last update : 31-07-2024</h4>
        <h4 className='admin-box-count'>Total count: 20</h4>
        <Link to={`/admin/battery`}  className='ad-1 admin-box-enter' >
        <MdTransitEnterexit />
        </Link>
      </section>
      <section className='admin-box'>
        <h3 className='ad-2 admin-box-title'>Blogs</h3>
        <h4 className='admin-box-date'> last update : 31-07-2024</h4>
        <h4 className='admin-box-count'>Total count: 20</h4>
        <Link to={`/admin/blogs`} className='ad-2 admin-box-enter' >
        <MdTransitEnterexit/>
        </Link>      </section>
      <section className='admin-box'>
        <h3 className='ad-3 admin-box-title'>Career</h3>
        <h4 className='admin-box-date'> last update : 31-07-2024</h4>
        <h4 className='admin-box-count'>Total count: 20</h4>
        <Link to={`/admin/career`} className='ad-3 admin-box-enter' >
        <MdTransitEnterexit />
        </Link>      </section>
      </div>
    </div>
  )
}

export default Admin
