import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header/Header'
import Navbar from '../components/common/Navbar/Navbar'
import SidePanel from '../components/common/SidePanel/SidePanel'


const MainContainer = () => {
    const toggleSwitch = useRef<HTMLDivElement>(null)
    const onItemClick = () => {
        const navigationBar = document.getElementsByClassName('open-btn')[0]
        if (toggleSwitch.current && navigationBar) {
            toggleSwitch.current.classList.add("active")
        }

    }

    const onRemoveClick = () => {
        const mainContent = document.getElementsByClassName('close-btn')[0]
        if (toggleSwitch.current && mainContent) {
            toggleSwitch.current.classList.remove("active")
        }
    }
    return (
        <>
            {/* <Navbar/> */}
            <div className='main-container d-flex'>
                <div className='sidebar ' id='side_nav' ref={toggleSwitch}>
                    <SidePanel onRemoveClick={onRemoveClick} />
                </div>
                <div className='content'>
                    <Header onItemClick={onItemClick} />
                    <div className='p-3 mt-3 me-1 page-content'>
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainContainer