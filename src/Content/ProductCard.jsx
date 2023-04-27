import './Content.css';
const ProductCard = ({ product, selectedProduct }) => {
  const handleClick = () =>{
    selectedProduct(product);
  }
    return (
      <div className="productCard" onClick={handleClick}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;