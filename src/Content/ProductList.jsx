import ProductCard from './ProductCard';
import products from '../data/products.json';
import './Content.css';

const ProductList = ({selectedProduct}) => {
  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} selectedProduct={selectedProduct} />
      ))}
    </div>
  );
};

export default ProductList;
