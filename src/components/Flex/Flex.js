import React from 'react';
import {FlexStyled} from './Flex.styled';

const Flex = ({alignItems, flex, justifyContent, flexDirection, children}) =>{
    return (
        <FlexStyled alignItems={alignItems} flex={flex} justifyContent={justifyContent} flexDirection={flexDirection}>
            {children}
        </FlexStyled>
    )
}

export {Flex};
