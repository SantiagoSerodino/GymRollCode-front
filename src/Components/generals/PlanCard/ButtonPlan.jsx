import React from 'react'

const ButtonPlan = ({contenText, isAuthenticated, onClick}) => {

  return (
    <button type='submit' className='btn-plan'>{contenText}</button>
  )
}

export default ButtonPlan;