import React from 'react'
import './MiddleItems.css'

const ItemMid = () => {
    return (
        <div className='glb-d'>
             <div className='grid-item1'>
                 <img className='img1' src={require('./1.jpg')} />
             </div>
             <div className='grid-item2'>
             <img className='img1' src={require('./2.png')} />
             </div>
             <div className='grid-item3'>
             <img className='img1' src={require('./3.jpg')} />
             </div>
        </div>
    )
}
export default ItemMid