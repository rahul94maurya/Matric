import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../../redux/reducer/userSlice'
import { useAppSelector } from '../../../redux/store'



const Dashboard = () => {
  const user = useAppSelector(state => state.user)
  console.log("user", user)
  const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(fetchData())
  // },[dispatch])

  return (
    <>
      Dashboard
    </>
  )
}

export default Dashboard