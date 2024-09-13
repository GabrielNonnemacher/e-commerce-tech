import "./Card.component.css"

export function Card({ children }) {
    return (
        <div className={`container-card ${ "small-card"}`}>
            {children}
        </div>
    );
}