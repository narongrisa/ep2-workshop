'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Header() {
    const router = useRouter();
    const [productName, setProductName] = useState('');

    const handleInput = (e) => {
        setProductName(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();

        router.push(`/productsearch/${productName}`);
    };

    return (
        <header className="bg-orange-400 h-[300px] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-white text-5xl">Next JS Product Finder App</h1>
                <p className="text-white text-2xl">Find your Product</p>

                <form className="flex mt-2" onSubmit={handleForm}>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-md"
                        placeholder="Product Name..."
                        onChange={handleInput}
                    />
                    <button className="inline-flex items-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;
