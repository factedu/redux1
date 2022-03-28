import React from 'react'

const TabButton = ({ title, onClick, active }) => {
    if (active) {
        return (
            <button onClick={onClick} className='border-b-yellow-400 border-b-2 m-2 p-2' >{title}</button>
        )
    } else {
        return (
            <button onClick={onClick} className='border-b-grey-400 border-b-2 m-2 p-2' >{title}</button>
        )
    }

}

export default TabButton