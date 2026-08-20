export const Product =({title, price, inStock, categories})=>{
    return(
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>In stock: {inStock ? "Currently Available":"Not Available"}</p>
            <p>Categories: {categories.join(", ")}</p>
        </div>
    );
};