import React from 'react';
import {ScoreContainerStyled, ScoreSeparatorStyled, ScoreHomeStyled,ScoreAwayStyled} from './Score.styled';

const Score = ({HT, AT}) =>{
    return (
        <ScoreContainerStyled>
            <ScoreHomeStyled>{HT}</ScoreHomeStyled>
            <ScoreSeparatorStyled>:</ScoreSeparatorStyled>
            <ScoreAwayStyled>{AT}</ScoreAwayStyled>
        </ScoreContainerStyled>
    )
}

export {Score};
