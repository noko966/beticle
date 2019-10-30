import styled from "styled-components";

const InputContainerStyled = styled.div`
  width: 100%;
  position:relative;
`;

const InputStyled = styled.input`
  appearance: none;
  outline:none;
  width: 100%;
  height: 60px;
  border: 1px solid #9b9b9b;
  background-color:transparent;
  color:#fff;
  border-radius:5px;
  padding: 0 8px;
  font-size:18px;
  
`;

const InputError = styled.span`
  width:100%;
  font-size:13px;
  color:red;
`;

const InputLabel = styled.span`
display:block;
  width:100%;
  font-size:15px;
  font-weight:500;
  color:#9b9b9b;
  margin-bottom:5px;
  text-transform:uppercase;
`;


export { InputContainerStyled, InputStyled, InputError, InputLabel };
