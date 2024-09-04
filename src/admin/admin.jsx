import React, { useEffect, useState } from 'react'
import '../style/admin.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Admin() {
  const [blogStats,setBlogStats]=useState({count:0,lastUpdate:""})
  const [careerStats,setCareerStats]=useState({count:0,lastUpdate:""})
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchBlog = async()=>{
      try{
        const response = await fetch('http://localhost:8080/api/blogs/stats')
        const data= await response.json()
        const lastUpdate =data.lastUpdate?new Date(data.lastUpdate).toLocaleDateString().replace(/\//g, '-')+ ' ' + new Date(data.lastUpdate).toLocaleTimeString() :"no updates Yet"
        setBlogStats({
          count:data.count,
          lastUpdate:lastUpdate
        })
      }catch(error){
        console.error("Error fetchinb in Blog stats")
      }
    }

    const fetchCareer = async()=>{
      try{
        const response = await fetch('http://localhost:8080/api/careers/stats')
        const data= await response.json()
        const lastUpdate =data.lastUpdate?new Date(data.lastUpdate).toLocaleDateString().replace(/\//g, '-')+ ' ' + new Date(data.lastUpdate).toLocaleTimeString() :"no updates Yet"

        setCareerStats({
          count:data.count,
          lastUpdate:lastUpdate
        })
      }catch(error){
        console.error("Error fetchinb in Career stats")
      }
    }
    Promise.all([fetchBlog(),fetchCareer()]).then(()=>{
      setLoading(false)
    })
  },[]);
  if(loading){
    return <div> Loading...</div>
  }





  return (
    <div className='admin-container'>
      <h2 className='admin-title'>ADMIN DASHBOARD</h2>


      <div className='change-box'>

      
      <section className='admin-box'>
        <h3 className='ad-2 admin-box-title'>Blogs</h3>
        <h4 className='admin-box-date'> last update :{blogStats.lastUpdate}</h4>
        <h4 className='admin-box-count'>Total count: {blogStats.count}</h4>
        <Link to={`/admin/blogs`} className='ad-2 admin-box-enter' ><AiFillPlusCircle /></Link>      
        </section>
      <section className='admin-box'>
        <h3 className='ad-3 admin-box-title'>Career</h3>
        <h4 className='admin-box-date'> last update : {careerStats.lastUpdate}</h4>
        <h4 className='admin-box-count'>Total count: {careerStats.count}</h4>
        <Link to={`/admin/careers`} className='ad-3 admin-box-enter' >
        <AiFillPlusCircle />

        </Link>      </section>
      </div>
    </div>
  )
}

export default Admin
