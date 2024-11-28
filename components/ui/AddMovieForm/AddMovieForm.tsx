import { useState } from "react";
import Modal from "../../common/Modal/Modal";
import DynamicForm from "../../common/DynamicForm/DynamicForm";

interface AddMovieFormProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const AddMovieForm = ({ isModalOpen, closeModal }: AddMovieFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    originalName: "",
    posterImage: "",
    duration: 0,
    genre: [] as string[],
  });
  

  const fields = [
    {
      label: "Movie Name:",
      type: "text",
      name: "name",
      value: formData.name,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: e.target.value,
          
        }));
        

      },
    },
    {
      label: "Original Name:",
      type: "text",
      name: "originalName",
      value: formData.originalName,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prevFormData) => ({
          ...prevFormData,
          originalName: e.target.value,
        })),
        

    },
    {
      label: "Poster Image:",
      type: "text",
      name: "posterImage",
      value: formData.posterImage,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prevFormData) => ({
          ...prevFormData,
          posterImage: e.target.value,
        })),
        

    },
    {
      label: "Genres:",
      type: "select",
      name: "genre",
      value: formData.genre,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const selectedGenres = Array.from(
          (e.target as HTMLSelectElement).selectedOptions,
          (option) => option.value
        );
        setFormData((prevFormData) => ({
          ...prevFormData,
          genre: selectedGenres,
        }));
      },
      
      children: (
        <>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          
        </>
      ),
      
    },
    {
      label: "Duration:",
      type: "number",
      name: "duration",
      value: formData.duration,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prevFormData) => ({
          ...prevFormData,
          duration: Number(e.target.value) || 0,
        })),
    },
  ];

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    
    closeModal(); 

  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <DynamicForm fields={fields} handleSubmit={handleSubmit} /> 
    </Modal>
  );
};

export default AddMovieForm;
// {
//   "name": "TEST",
//   "originalName": "NEW VALUE",
//   "posterImage": "tEST 2",
//   "duration": 5,
//   "genres": ["DRAMA"],
// }
