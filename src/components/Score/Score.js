import React from 'react';
import {TeamNameAndScoreContainerStyled, ScoreContainerStyled, TeamNameContainerStyled, TeamHomeStyled, TeamAwayStyled, ScoreSeparatorStyled, ScoreHomeStyled,ScoreAwayStyled} from './Score.styled';
import {Flex} from '../Flex';

const Score = ({HT, AT, scoreHT, scoreAT}) =>{
    return (
        <TeamNameAndScoreContainerStyled>
            <TeamNameContainerStyled>
                <TeamHomeStyled>{HT}</TeamHomeStyled>
                <ScoreSeparatorStyled></ScoreSeparatorStyled>
                <TeamAwayStyled>{AT}</TeamAwayStyled>
            </TeamNameContainerStyled>
            <ScoreContainerStyled>
                <ScoreHomeStyled>{scoreHT}</ScoreHomeStyled>
                <ScoreSeparatorStyled>:</ScoreSeparatorStyled>
                <ScoreAwayStyled>{scoreAT}</ScoreAwayStyled>
            </ScoreContainerStyled>
        </TeamNameAndScoreContainerStyled>
    )
}

export {Score};
