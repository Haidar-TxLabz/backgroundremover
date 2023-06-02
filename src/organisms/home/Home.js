import React from 'react'
import TopBar from '../../atom/topBar/TopBar'
import TextArea from '../../atom/textArea/TextArea'

// scss
import './Home.scss'

// img png
import Logo from '../../Assets/Home/Logo.png'

const Home = () => {
  return (
    <div
    style={{backgroundColor:"#FF4900"}}
    className='flex flex-col justify-center items-center h-screen relative'
  >
    <TopBar />
    <TextArea />
    <div className='absolute logo-full-screen flex  justify-end items-center'>
      <img 
      style={{
        width:"70%",
        height:"70%"
      }}
      src={Logo} alt="" />
    </div>
    <div className='absolute logo-small-screen flex  justify-end items-center'>
      <img 
      style={{
        width:"50%",
        height:"50%"
      }}
      src={Logo} alt="" />
    </div>
  </div>
  )
}

export default Home