import React from 'react';
import {OddContainerStyled, OddPriceStyled, OddFactorStyled} from './Odd.styled';

const Odd = ({price, factor, type}) =>{
    return (
        <OddContainerStyled type={type}>
            <OddPriceStyled>{price}</OddPriceStyled>
            <OddFactorStyled>{factor}</OddFactorStyled>
        </OddContainerStyled>
    )
}

export {Odd};
