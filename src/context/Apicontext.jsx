import axios from 'axios';
const API_URL = 'https://book-repository-backend.onrender.com/api';


export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

export const updateBook = async (book) => {
  try {
    const response = await axios.put(`${API_URL}/books/${book.id}`, book);
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
