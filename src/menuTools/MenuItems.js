import React from 'react'
import './MenuStyle.css'

const MenuIt = () => {
    return (
        <div>
            <div className='items'>
                <div className='menuDrn'>
                    <a href='#' className='first'>Explore</a>
                    <a href='#' className='others'>Topics</a>
                    <a href='#' className='others'>Trending</a>
                    <a href='#' className='others'>Collections</a>
                    <a href='#' className='others'>Events</a>
                </div>
                <div className='emailCh'>
                    <button type="button" className="btn btn-primary emailB">Get email ubdates</button>
                </div>
                <div className='accInfo'>
                    <div className='accpic'>
                    </div>
                    <span className='yPhoto'>You'r photo</span>
                    <hr />
                    <span className='topicInf'>
                        0 starred topics
             </span>
                    <hr />
                    <span className='topicInf'>
                        0 starred repositories
             </span>
                </div>

            </div>
            <hr />
        </div>
    )
}
export default MenuIt