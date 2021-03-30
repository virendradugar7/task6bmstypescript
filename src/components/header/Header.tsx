import React from 'react';

import  '../../bms.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Navleft from './navleft';
export const Header = () => {
    return (
        
            <div className="topbar">
                <div className="top-bar-wrapper">
                    <HeaderLeft />
                    <HeaderRight />
                </div>

                <div className="nav-bar">
                    <div className="nav-wrap">
                        <Navleft />
                    </div>
                </div>
            </div>
        
    )
}

export default Header