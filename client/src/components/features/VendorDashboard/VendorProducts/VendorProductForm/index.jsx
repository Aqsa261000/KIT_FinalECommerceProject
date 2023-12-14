import { useContext } from 'react';
import './style.css';
import ProductDataContext from '../../../ProductContext/ProductDataContext';

const VendorProductFormDefault = () => {
  const { handleSubmit, handleInputChange, formData } =
    useContext(ProductDataContext);

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handleSubmit} autoComplete="off">
        <h1>Create Product</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your product name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter your product description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="Enter your product price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <label>Category</label>
        <select
          placeholder="Select category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="Sports">Sports</option>
          <option value="Casuals">Casuals</option>
          <option value="Formals">Formals</option>
        </select>

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter your product quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <label>Date of creation</label>
        <input
          type="text"
          placeholder="Enter the date of product creation"
          name="dateOfCreation"
          value={formData.dateOfCreation}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="img">Upload Image</label>
        <input
          type="file"
          id="img"
          name="image"
          onChange={handleInputChange}
          value={formData.image}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VendorProductFormDefault;
