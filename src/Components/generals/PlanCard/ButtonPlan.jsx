import React from 'react'

const ButtonPlan = ({contenText, isAuthenticated, onClick}) => {

  return (
    <button type='submit' className='btn-plan btn btn-outline-success btn-lg'>{contenText}</button>
  )
}

export default ButtonPlan;