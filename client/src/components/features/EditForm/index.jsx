import { useContext, useEffect, useState } from "react";
import ProductDataContext from "../../../ProductContext/ProductDataContext";
import { useParams } from "react-router-dom";

const EditFormDefault = () => {
  const { formData, editFormData, setEditFormData, products, handleEdit } =
    useContext(ProductDataContext);
  const { _id } = useParams();
  // console.log(_id);
  const product = products.find((product) => product._id.toString() === _id);
  // console.log("Product", product);

  useEffect(() => {
    if (product) {
      setEditFormData(product);
      console.log(editFormData);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form
        className="product-form"
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <h1>Update Product</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your product name"
          name="name"
          value={editFormData.name}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Enter your product description"
          name="description"
          value={editFormData.description}
          onChange={handleChange}
          required
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="Enter your product price"
          name="price"
          value={editFormData.price}
          onChange={handleChange}
          required
        />
        <label>Category</label>
        <select
          placeholder="Select category"
          name="category"
          value={editFormData.category}
          onChange={handleChange}
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
          value={editFormData.quantity}
          onChange={handleChange}
        />
        <label>Date of creation</label>
        <input
          type="text"
          placeholder="Enter the date of product creation"
          name="dateOfCreation"
          value={editFormData.dateOfCreation}
          onChange={handleChange}
          required
        />
        <label for="img">Upload Image</label>
        <input type="file" id="img" name="image" required />
        <button type="submit" onClick={() => handleEdit(_id)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditFormDefault;
