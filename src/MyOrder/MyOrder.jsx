import "./MyOrder.css";
const MyOrder = ({ selectedProduct }) => {
  let subtotal = 0;
  for (let i = 0; i < selectedProduct.length; i++) {
    subtotal += selectedProduct[i].price.slice(1) * selectedProduct[i].quantity;
  }
  subtotal = subtotal.toFixed(2)
  let tax = Number((subtotal * 0.1).toFixed(2));
  let total = (Number(subtotal) + tax).toFixed(2);

  return (
    <div>
      <div className="MyOrder">
        {selectedProduct.length!==0 ? (selectedProduct.map((data) => (
            <div className="orderCard">
              <img src={data.image} alt={data.name} />
              <div>
                <div>{data.name}</div>
                <div className="price">
                  <p>{data.price}</p>
                  <div className="quantity">
                    <button>-</button>
                    {data.quantity}
                    <button>+</button>
                  </div>
                </div>
              </div>
              <div className="FinalBill">
                <p>Subtotal <span>${subtotal}</span></p>
                <p>
                  Tax(10%) <span>${tax}</span>
                </p>
                <div style={{ borderTop: "1px dotted grey" }}></div>
                <p>
                  Total <span>${total}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Cart Empty</p>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
