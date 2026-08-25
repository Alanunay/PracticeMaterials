

export const ProductList =() =>{
    const products = [{
                        id: 1,
                        name: "Laptop",
                        price: 999,
                    },
                    {
                        id: 2,
                        name: "Phone",
                        price: 699,
                    },
                    {
                        id: 3,
                        name: "Tablet",
                        price: 499,
                    },]


const productElements = products.filter((product)=>{return product.price > 500;}).map((stock) => {
                    return(
                        <div>
                            <h3>{stock.id + "."}{" "}{stock.name}</h3>
                            <p>Price: {stock.price}</p>
                        </div>
                    )
                })
  return (
    <div>
        <h2>Our Products</h2>
            {productElements
            }
    </div>
  );

//   return (
//     <div>
//         <h2>Our Products</h2>
//             {
//                 products.map((stock) => {
//                     return(
//                         <div>
//                             <h3>{stock.id + "."}{" "}{stock.name}</h3>
//                             <p>Price: {stock.price}</p>
//                         </div>
//                     )
//                 })
//             }
//     </div>
//   );
};
