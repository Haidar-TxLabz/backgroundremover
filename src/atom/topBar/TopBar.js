import React from 'react'
import './TopBar.scss'
import shareIcon from '../../Assets/Home/shareIcon.svg'

const TopBar = () => {
    return (
        <div
            style={{
                backgroundColor: "#343541"

            }}
            className='w-4/5 text-white rounded-t-lg flex justify-between items-center font-roboto top-bar-text-left px-3 py-1'>
            <p className='font-roboto'>
                oranginals tool by extrordinals
            </p>
            <span className='flex items-center'>
                <img style={{
                    width: "17px"
                }}
                    className='mr-1 ' src={shareIcon} alt="" /> Share
            </span>
        </div>
    )
}

export default TopBar