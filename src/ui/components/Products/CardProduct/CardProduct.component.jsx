import "./CardProduct.component.css"

export function CardProduct({ product }) {
    return (
        <section className="section-card-product">
            <div className="img-product">
                <img src={product.image} alt={product.alt} />
            </div>

            <p className="name-product">
                {product.name}
            </p>

            <div className="price-product">
                ${product.price},00
            </div>
        </section>
    );
}