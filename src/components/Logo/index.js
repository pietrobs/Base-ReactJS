import React from 'react';
import MyLogo from './style';

const Image = require( './logo.png');

const Logo = () => (
    <MyLogo src={Image} alt="Logotipo"/>
)

export default Logo;
