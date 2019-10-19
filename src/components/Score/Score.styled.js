import styled  from 'styled-components';

const ScoreContainerStyled = styled.div`
    width: 100%;
    height:41px;
    color: #000;
    display: flex;
    align-items: center;
`

const ScoreHomeStyled = styled.span`
    font-size: 32px;
    font-weight: bold;
    text-align: right;
    flex-shrink:0;
    flex-grow:1;
    min-width:1px;
`

const ScoreAwayStyled = styled.span`
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    flex-shrink:0;
    flex-grow:1;
    min-width:1px;

`

const ScoreSeparatorStyled = styled.span`
    font-size: 32px;
    font-weight: bold;
    width: 36px;
    text-align:center;
    flex-shrink:0;
`


export {ScoreContainerStyled, ScoreSeparatorStyled, ScoreAwayStyled, ScoreHomeStyled};