// src/pages/AddItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = () => {
  const [formData, setFormData] = useState({ imageurl: '', itemname: '', price: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/add-item', formData);
      setMessage('✅ Item added!');
      setFormData({ imageurl: '', itemname: '', price: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add item.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input type="text" name="imageurl" placeholder="Image URL" value={formData.imageurl} onChange={handleChange} required />
        <input type="text" name="itemname" placeholder="Item Name" value={formData.itemname} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AddItemForm;
