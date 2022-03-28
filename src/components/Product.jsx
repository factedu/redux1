import React from 'react'

const Product = ({ item }) => {
    return (
        <div>
            {/* <pre>{JSON.stringify(item, null, 4)}</pre> */}
            <div className='flex flex-row border-4 mb-4 p-3 border-yellow-400 rounded-md justify-center justify-items-center'>
                <div className='flex-1'>
                    <div className='text-lg text-left'>
                        {item.name}
                    </div>
                    <div className='text-sm'>
                        {item.description}
                    </div>
                </div>
                <div className='text-2xl justify-center justify-items-center'>
                    <div style={{height:'100%', justifyContent:'center', alignItems:'center'}}>
                        {item.price}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Product