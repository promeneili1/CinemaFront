import React, { useState, useEffect } from "react";
import Modal from "../../common/Modal/Modal";
import DynamicForm from "../../common/DynamicForm/DynamicForm";
import { createMovie } from "../../services/MovieService";
import { GetAllGenre } from "../../services/GenreService"; 
import { Genre } from "../../../models/Genre";

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
    genres: [] as number[],
  });

  const [genres, setGenres] = useState<{ value: number; label: string }[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreData = await GetAllGenre.getGenres(); // This now returns { value, label }
        setGenres(genreData); // Use the correct type
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);
  

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
      onChange: (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) =>
        setFormData((prevFormData) => ({
          ...prevFormData,
          posterImage: e.target.value,
        })),
    },
    {
      label: "Genres:",
      type: "select",
      name: "genres",
      value: formData.genres,
      multiple: true,
      options: genres, // Već formatirane opcije
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if ("selectedOptions" in e.target) {
          // e.target je HTMLSelectElement
          const selectedGenres = Array.from(e.target.selectedOptions, (option) =>
            Number(option.value)
          );
          setFormData((prevFormData) => ({
            ...prevFormData,
            genres: selectedGenres,
          }));
        } else {
          // e.target je HTMLInputElement
          setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
          }));
        }
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
