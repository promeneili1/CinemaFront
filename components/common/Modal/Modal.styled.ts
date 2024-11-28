import styled from "styled-components";

export const StyledDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; 
  max-width: 600px;
  padding: 20px;
  height: 600px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column; 
  align-items: stretch; 
  box-sizing: border-box;
  z-index: 1000; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; 
  width: 100%; 
  text-align: center; 
`