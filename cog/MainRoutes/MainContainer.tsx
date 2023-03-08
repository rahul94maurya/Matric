import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header/Header'
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
    return (
        <>
            <Header
                onMenuBarIconClick={onMenuBarIconClick}
            />
            <Sidebar />
            <div className='main-content'>
                <Outlet />
            </div>
        </>
    )
}

export default MainContainer