import React from 'react';
import {CompetionContainerStyled, CompetionNameStyled, CompetionTypeStyled} from './Competition.styled';

const Competition = ({children, name, type}) =>{
    return (
        <CompetionContainerStyled>
            <CompetionNameStyled>{name}</CompetionNameStyled>
            <CompetionTypeStyled>{type}</CompetionTypeStyled>
            {children}
        </CompetionContainerStyled>
    )
}

export {Competition};
