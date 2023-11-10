import React from 'react'
import style from './LiComponent.module.css'

const LiComponent = ({Type,Name,Id,NameInput}) => {
  return (
    <>
        <li className={style.li}>
            <input type={Type} name={Name} id={Id} className={style.input} placeholder={NameInput}/>
        </li>
    </>
  )
}

export default LiComponent