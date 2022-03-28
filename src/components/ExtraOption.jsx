import React from 'react'
import { Form } from 'react-bootstrap'

const ExtraOption = ({ item, isSelected }) => {
    return (
        <div className='flex flex-row justify-between m-2 p-2 rounded-lg font-extrabold'>
            <div>
                {item.name} (£ {item.price})
            </div>
            <div>
                <Form.Check.Input type={'checkbox'} isValid />
            </div>
        </div>
    )
}

export default ExtraOption