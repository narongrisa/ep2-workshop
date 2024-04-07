'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ProductData() {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products`);
            const products = await response.json();

            setProduct(products.products);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="container text-center mx-auto">
            {loading ? (
                <p>Loading ....</p>
            ) : (
                <div className="grid grid-cols-5">
                    {products.map((val) => (
                        <Link key={val.title} href={`/productinfo/[id]`} as={`productinfo/${val.id}`}>
                            <div
                                key={val.id}
                                className="flex justify-center items-center shadow-md transition cursor-pointer hover:shadow-lg m-3 rounded-md"
                            >
                                <div>
                                    <h3>{val.title}</h3>
                                    <Image src={val.thumbnail} width={300} height={300} alt={val.title} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductData;
