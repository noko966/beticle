import styled  from 'styled-components';

const FlexStyled = styled.div`
    display: ${p => p.flex || 'flex'};;
    align-items: ${p => p.alignItems || 'center'};
    justify-content: ${p => p.justifyContent || 'baseline'};
    flex-direction: ${p => p.flexDirection || 'row'};
`;


export {FlexStyled};