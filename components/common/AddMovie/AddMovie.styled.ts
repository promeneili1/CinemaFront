import styled from "styled-components";

export const AddForm = styled.form`
    background-color: white;
    border: 2px solid #BF4F74;
    height: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center; 
    
`
export const FormContainer = styled.div`
    background-color: white;
    display: flex;
    margin-left: 10px;
    width: 350px;
    

`
export const Text = styled.p`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 10px; 
  font-size: 16px;
  width: 90%; 
  margin-right: 10px;

`
export const Title = styled.h1`
text-align: center;
font-size: 20px;
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`
export const CloseButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`
export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`
