import React, { useState } from 'react'

import Logo from '../header/Logo';
import Mmenu from '../header/Mmenu';
import Sns from '../header/Sns';

const Header = () => {    
    return (
        <header id='header' role='banner' >
            <Logo />
            <Mmenu />
            <Sns />
        </header>
    )
}

export default Header

