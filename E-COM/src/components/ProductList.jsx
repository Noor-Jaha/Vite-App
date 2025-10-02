import { useEffect, useState } from "react";
import { getProducts } from "../Api";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(response => setProducts(response.data));
    }, []);
    return (
        
           <div>
            <h2>Products</h2>
            {products.map(product => (
               <div key={product.id} className="product-item">  
                <h3>{product.title}</h3>
                <img src={product.image} className="img-fluid rounded-top" alt={product.title}/>
                
                </div>
            ))}
           </div>
      )
}

