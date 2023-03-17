import React from 'react'

type Props = {
    children: React.ReactNode
}


const Label = ({children}:Props) => {
  return (
    <>
        <div className='mt-3'>
            <label className='form-label'>
                {children}
            </label>
        </div>
    </>
  )
}

export default Label