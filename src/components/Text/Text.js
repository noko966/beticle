import React from 'react';
import {TextStyled} from './Text.styled';

const Text = ({children, fontSize, color, fontWeight}) =>{
    return (
        <TextStyled fontSize={fontSize} color={color} fontWeight={fontWeight}>
            {children}
        </TextStyled>
    )
}

export {Text};
