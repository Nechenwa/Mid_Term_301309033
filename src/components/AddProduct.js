import React, { useState } from 'react';

const AddProduct = () => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    alert(JSON.stringify(formState));
  };
  const handleCancel = () => {
    setFormState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formState.name} onChange={handleChange} placeholder="Name" />
      <input name="description" value={formState.description} onChange={handleChange} placeholder="Description" />
      <input name="category" value={formState.category} onChange={handleChange} placeholder="Category" />
      <input name="quantity" value={formState.quantity} onChange={handleChange} placeholder="Quantity" />
      <input name="price" value={formState.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};
export default AddProduct;
