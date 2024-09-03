import './Button.component.css';

export function Button({ type, text }) {
    return (
        <button type="button"
            className={type || "light"}>
            <p>
                {text}
            </p>
        </button>
    );
}