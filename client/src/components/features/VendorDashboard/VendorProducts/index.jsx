import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { useContext, useEffect } from 'react';
import ProductContext from '../../../../context/product/productContext';
import { Link } from 'react-router-dom';
const VendorProductsDefault = () => {
  const { products, setProducts, handleDelete } = useContext(ProductContext);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8080/api/products/products/'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const allproducts = await response.json();
        setProducts(allproducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getAllProducts();
  }, []);

  return (

    
    <div className="products-container">
      <div className="products-table">
        <div className="products-header">
          <p>Product Id</p>
          <p>Product Name</p>
          <p>Product Price</p>
          <p>Category</p>
          <p>Quantity</p>
          <p>Edit</p>
          <p>Delete</p>
        </div>
        {products.map((item) => {
          return (
            <div className="products-data" key={item._id}>
              <p>{item._id}</p>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p>{item.quantity}</p>
              <Link to={`/edit/${item._id}`}>
                <PublishedWithChangesIcon className="remove-stylings" />
              </Link>
              <DeleteIcon onClick={() => handleDelete(item._id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VendorProductsDefault;
