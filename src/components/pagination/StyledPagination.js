import styled from "styled-components";

export const StyledList = styled.ul`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
margin-top: 50px;
`

export const StyledItem = styled.li`
width: 40px;
height: 40px;
border-radius: 4px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-color: transparent;
background: var(--linearGradient);
color: var(--btnBgc);
transition: 0.3s ease-in-out;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover {
    color: white;
}



`