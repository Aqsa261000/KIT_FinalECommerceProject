import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import ProductContext from '../../../../context/product/productContext';
import { AdminDashboardSideBar } from '../../../common';
const AdminProductsDefault = () => {
  const productContext = useContext(ProductContext);
  const { getAllProducts, products, deleteProduct } = productContext;
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <AdminDashboardSideBar>
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
                <DeleteIcon onClick={() => deleteProduct(item._id)} />
              </div>
            );
          })}
        </div>
      </div>
    </AdminDashboardSideBar>
  );
};

export default AdminProductsDefault;
