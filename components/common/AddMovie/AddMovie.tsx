import { useState } from "react";
import { ModalOverlay, ModalContainer, CloseButton } from "./AddMovie.styled";
import Button from "../Button/Button";  
import Input from "../Input/Input";

const AddMovie = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const onClick = () => {
   
    closeModal(); 
  };

  return (
    <div>
      <Button handleClick={openModal}><>Create Movie</></Button>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <h2>Add Movie</h2>
            <form>
            <div>
            <Input label="Movie Name:" type="text"   />
            </div>
            <div>
            <Input label="Original Name:" type="text"  />
            </div>
            <div>
            <Input label="Genre:" type="text" name="movieName"  />
            </div>
            <div>
             <Input label="Duration:" type="text"  />
            </div>
              <Button handleClick={onClick}><>Create</></Button>
            </form>
            <CloseButton onClick={closeModal}><>Close</></CloseButton> 
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
};

export default AddMovie;
