import { Card, CardProduct } from "../index"
import "./Product.component.css"

export function Product() {
    const PRODUCTS = [
        {
            price: 1500.00,
            image: "assets/images/image-random-2.svg",
            alt: "Image of product",
            name: "Headphone 26773X version 1.4"
        },
        {
            price: 1500.00,
            image: "assets/images/image-random-2.svg",
            alt: "Image of product",
            name: "Headphone 26773X version 1.4"
        },
        {
            price: 1500.00,
            image: "assets/images/image-random-2.svg",
            alt: "Image of product",
            name: "Headphone 26773X version 1.4"
        },
        {
            price: 1500.00,
            image: "assets/images/image-random-2.svg",
            alt: "Image of product",
            name: "Headphone 26773X version 1.4"
        },
        {
            price: 1500.00,
            image: "assets/images/image-random-2.svg",
            alt: "Image of product",
            name: "Headphone 26773X version 1.4"
        }
    ];

    return (
        <section className="section-products">
            {
                PRODUCTS.map((product, index) => {
                    return (
                        <Card key={product + index} sizeCard="medium-card">
                            <CardProduct key={product + "card" + index} product={product} />
                        </Card>
                    );
                })
            }
        </section>
    );
}