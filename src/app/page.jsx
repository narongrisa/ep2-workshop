import Image from 'next/image';
import Header from './components/Header';
import ProductData from './components/ProductData';

export default function Home() {
    return (
        <div>
            <Header />
            <ProductData />
        </div>
    );
}
