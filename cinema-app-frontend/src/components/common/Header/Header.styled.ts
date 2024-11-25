import styled from "styled-components";

export const HeaderContainer = styled.header` 
    background-color: #f38e09;
    display: flex;
    padding: 10px;
    text-align: left;
 `
export const Title = styled.h1`
    left: 50%; 
    transform: translateX(-50%); 
    font-size: 35px; 
    position: relative;
`
export const Nav = styled.nav ` 
    display: flex; 
    align-items: center;
    margin-left: auto;
    
    ul {
        list-style: none;
        display: flex; 
        margin: 0;
        padding: 0;
        gap: 1em; 
    }

    li {
        margin: 0;
        padding: 0;
    }
`
export const Button = styled.button`
  display: inline-block;
  color: black;
  font-size: 1em;
  margin: 1em;
  text-decoration: none; 
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  display: block;
  cursor: pointer; 
`
