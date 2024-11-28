import styled from "styled-components";


export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
`
export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;      
  flex: 1 1 200px;             
  min-width: 200px;            
  max-width: 250px;            
  margin: 10px;         
  align-items: center;
`
export const CardImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 15px;        
`
export const Text = styled.p`
  font-size: 1em;
  color: #333;
  font-style: normal;
  margin: 5px 0;  
  `
