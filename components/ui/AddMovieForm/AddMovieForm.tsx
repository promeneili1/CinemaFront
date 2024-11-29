import { useState } from "react";
import Modal from "../../common/Modal/Modal";
import DynamicForm from "../../common/DynamicForm/DynamicForm";
import { createMovie } from "../../services/MovieService";

interface AddMovieFormProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
// TODO - add form validation of each input fields (check if they include any special characters, if they do, display the error below the input field)
const AddMovieForm = ({ isModalOpen, closeModal }: AddMovieFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    originalName: "",
    posterImage: "",
    duration: 0,
    genres: [] as number[],
  });

  const fields = [
    {
      label: "Movie Name:",
      type: "text",
      name: "name",
      value: formData.name,
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
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
      value: formData.genres,
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const selectedGenres = Array.from(
          (e.target as HTMLSelectElement).selectedOptions,
          (option) => Number(option.value)
        );
        setFormData((prevFormData) => ({
          ...prevFormData,
          genres: selectedGenres,
        }));
      },
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submit triggered");
    try {
      const response = await createMovie(formData);
      console.log("Movie created successfully:", response);
      closeModal();
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <DynamicForm fields={fields} handleSubmit={handleSubmit} />
    </Modal>
  );
};

export default AddMovieForm;
