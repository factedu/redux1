import React from 'react'

const Button = ({title,onClick,active}) => {
    if (active){
        return (
            <button onClick={onClick} className='bg-yellow-400 m-2 p-2 border-2' style={{ borderRadius: 50 }}>{title}</button>
        )
    }else{
        return (
            <button onClick={onClick} className='bg-white-400 m-2 p-2 border-2' style={{ borderRadius: 50 }}>{title}</button>
        )
    }
  
}

export default Button