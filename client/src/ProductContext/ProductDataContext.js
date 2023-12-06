import { createContext, useState, useEffect } from "react";

const ProductDataContext = createContext({});

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    quantity: 0,
    dateOfCreation: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    quantity: 0,
    dateOfCreation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createProduct = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
          description: "",
          price: 0,
          category: "",
          quantity: 0,
          dateOfCreation: "",
        });
      }
      // console.log(formData);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log("Error occured while creating product", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct();
  };

  const handleDelete = async (productId) => {
    // Delete the specified product
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/products/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedProducts = await fetch(
        "http://127.0.0.1:8080/api/products/products/"
      );
      const updatedProductsData = await updatedProducts.json();
      setProducts(updatedProductsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (productId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/products/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // const updatedProducts = await fetch(
      //   "http://127.0.0.1:8080/api/products/products/"
      // );
      // const updatedProductsData = await updatedProducts.json();
      // setProducts(updatedProductsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductDataContext.Provider
      value={{
        products,
        setProducts,
        handleSubmit,
        formData,
        handleInputChange,
        handleDelete,
        editFormData,
        setEditFormData,
        handleEdit,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataContext;
