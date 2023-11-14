import React from 'react'

const SubmitButton = ({contenText, petition}) => {
  return (
    <button type='submit' className='btn' onClick={petition}>{contenText}</button>
  )
}

export default SubmitButton;