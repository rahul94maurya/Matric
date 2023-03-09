import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../redux/reducer/airLineSlice'


export interface airlineData{
  data :[]
}

const Dashboard = () => {
    // const data = useSelector<currentData,currentData[]>(((state) => state.currentData))
    // const data = useSelector<RootState,string>((state:airlineData) => state.airline)
    // console.log("data",data)
    const data = useSelector((state:airlineData) => state.data)
    console.log("data",data)
    const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(fetchData())
    // },[])
  
  return (
    <>
        Dashboard

    </>
  )
}

export default Dashboard