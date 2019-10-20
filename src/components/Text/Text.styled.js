import styled  from 'styled-components';


const TextStyled = styled.span`
    display:inline-block;
    width: 100%;
    color: #fff;
    font-weight: ${p => p.fontWeight || '500'};
    text-transform: ${p => p.textTransform || 'capitalize'};
    font-size: ${p => p.sontSize || '14px'};
`
export {TextStyled};