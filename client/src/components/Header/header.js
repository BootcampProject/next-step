import React from "react";
import logoGif from './assets/images/Ed-El-Ex-V2.gif';

import './assets/header.css';

function Header(){

    return (
        <div>
            <p class="sloganContainer" className="text-left mt-4 mb-4"><img src={logoGif} style={{ maxHeight: '30px' }}/></p>
        </div>
    )
        
}

export default Header;