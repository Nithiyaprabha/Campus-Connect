// src/components/Cart.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './cart.css';

// const Cart = ({ userID }) => {
//     const [products, setProducts] = useState([]);
//     const [formData, setFormData] = useState({
//         adTitle: '',
//         description: '',
//         price: '',
//         category: '',
//         images: []
//     });

//     useEffect(() => {
//         fetchCartProducts();
//     }, [userID]);

//     const fetchCartProducts = () => {
//         axios.get(`http://localhost:8000/addToCart/${userID}`)
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the cart products!", error);
//             });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, images: e.target.files });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         data.append('adTitle', formData.adTitle);
//         data.append('description', formData.description);
//         data.append('price', formData.price);
//         data.append('category', formData.category);
//         data.append('userId', userID);
//         for (let i = 0; i < formData.images.length; i++) {
//             data.append('images', formData.images[i]);
//         }

//         try {
//             await axios.post('http://localhost:5000/api/products/uploadProducts', data, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             alert('Product added successfully');
//             fetchCartProducts(); // Fetch the updated list of cart products
//         } catch (error) {
//             console.error('There was an error uploading the product!', error);
//             alert('Error uploading product');
//         }
//     };

//     return (
//         <div className="cart-container">
//             <h1>Add Product</h1>
//             <form className="add-product-form" onSubmit={handleSubmit}>
//                 <input type="text" name="adTitle" value={formData.adTitle} onChange={handleChange} placeholder="Ad Title" required />
//                 <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
//                 <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//                 <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
//                 <input type="file" name="images" onChange={handleFileChange} multiple required />
//                 <button type="submit">Add Product</button>
//             </form>

//             <h1>Shopping Cart</h1>
//             <div className="cart">
//                 {products.map(product => (
//                     <div key={product._id} className="product">
//                         <div className="product-images">
//                             {product.photos.map((photo, index) => (
//                                 <img key={index} src={photo} alt={`${product.adTitle} - ${index + 1}`} className="product-image" />
//                             ))}
//                         </div>
//                         <div className="product-info">
//                             <h2>{product.adTitle}</h2>
//                             <p>Category: {product.category}</p>
//                             <p>Price: ${product.price}</p>
//                             <p>{product.description}</p>
//                             <p>Added by: {product.addedBy}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Cart;

// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';

const Cart = ({ userID }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchCartProducts();
    }, [userID]);

    const fetchCartProducts = () => {
        axios.get(`http://localhost:8000/api/addToCart/${userID}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cart products!", error);
            });
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart">
                {products.map(product => (
                    <div key={product._id} className="product">
                        <div className="product-images">
                            {product.photos.map((photo, index) => (
                                <img key={index} src={photo} alt={`${product.adTitle} - ${index + 1}`} className="product-image" />
                            ))}
                        </div>
                        <div className="product-info">
                            <h2>{product.adTitle}</h2>
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
