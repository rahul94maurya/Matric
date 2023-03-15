import React, { useRef, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header/Header'
import Navbar from '../components/common/Navbar/Navbar'
import Sidebar from '../components/common/Sidebar/Sidebar'




const MainContainer = () => {
    const [sideBarExpanded, setNavBarExpanded] = useState<boolean>(true)
    const onMenuBarIconClick = () => {
        const navigationBar = document.getElementsByClassName('side-navigation')[0]
        const mainContent = document.getElementsByClassName('main-content')[0]
        if (sideBarExpanded) {
            navigationBar.setAttribute("style", "width:0")
            mainContent.setAttribute("style", "width:calc(100vw - 15%)")
            mainContent.setAttribute("style", "margin:120px auto auto auto")
        } else {
            navigationBar.setAttribute("style", "width:256px")
            mainContent.setAttribute("style", "width:calc(100vw - 350px)")

        }
        setNavBarExpanded((prevState) => !prevState)
    }

    const handleResize = () => {
        const navigationBar = document.getElementsByClassName('side-navigation')[0]
        const mainContent = document.getElementsByClassName('main-content')[0]
        if (window.innerWidth < 992 && sideBarExpanded) {
            navigationBar.setAttribute("style", "width:0")
            mainContent.setAttribute("style", "width:calc(100vw - 15%)")
            mainContent.setAttribute("style", "margin:110px ")
        }
        else {
            navigationBar.setAttribute("style", "width:256px")
            mainContent.setAttribute("style", "width:calc(100vw - 350px)")
            mainContent.setAttribute("style", "width:100px")

        }
        setNavBarExpanded((prevState) => !prevState)
    }

    // useEffect(() => {
    //     window.addEventListener("resize", handleResize)
    //     return () => window.removeEventListener('resize', handleResize);
    // }, [])

    return (
        <>
            {/* <Header onMenuBarIconClick={onMenuBarIconClick} />
            <Sidebar />
            <div className='main-content'>
                <Outlet />
            </div> */}

            <Navbar/>
        </>
    )
}

export default MainContainer