
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor/CustomCursor'

const Layout = () => {
  return (
    <>
     <CustomCursor /> 
  

    <Header/>
    <div className="main-content">
        {/* This Outlet will render the current page component based on the route */}
        <Outlet />
      </div>
    <Footer/>
    
    </>
  )
}

export default Layout