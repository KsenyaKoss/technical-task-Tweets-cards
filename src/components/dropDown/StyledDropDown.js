import styled from "styled-components";


export const StyledWrapper = styled.div`
  width: 196px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  background: var(--linearGradient);

  color: var(--btnBgc);
  cursor: pointer;
`

export const StyledSelector = styled.select`
 background: transparent;
 padding: 14px, 28px;
 font-size: 18px;
line-height: 1.22;
 border: none;
 color: white;
 outline: none;

`

export const StyledOption = styled.option`
background: var(--linearGradient);
color: var(--btnBgc);
transition: 0.3s ease-in-out;
outline: none;
  &:hover{
    background: var(--linearGradient);
  }


`