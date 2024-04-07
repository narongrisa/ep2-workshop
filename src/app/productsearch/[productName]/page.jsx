'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function ProductSearch() {
    const params = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProductInfo = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${params.productName}`);
            const product = await response.json();

            setProduct(product.products[0]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProductInfo();
    }, []);

    return (
        <div className="p-24">
            <Link href="/" className="bg-blue-500 text-white p-3 rounded-md">
                Go Back
            </Link>

            <div className="flex justify-center items-center mt-10 text-center">
                <div className="shadow-md p-10 rounded-md">
                    {loading ? (
                        <p>Loading ...</p>
                    ) : (
                        <>
                            <h3 className="text-3xl">{product.title}</h3>
                            <Image src={product.thumbnail} width={300} height={300} alt={product.name} />
                            <div className="mt-5">
                                <p className="my-3">{product.description}</p>
                                <p className="my-3">Brand: {product.brand}</p>
                                <p className="my-3">Price: {product.price}</p>
                                <p className="my-3">Discount: {product.discountPercentage} %</p>
                                <p className="my-3">Stock: {product.stock}</p>
                                <p className="my-3">Rating: {product.rating}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;
