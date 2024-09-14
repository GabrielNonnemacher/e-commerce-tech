import "./Card.component.css"

export function Card({ children, sizeCard = "small-card" }) {
    return (
        <div className={`container-card ${sizeCard}`}>
            {children}
        </div>
    );
}