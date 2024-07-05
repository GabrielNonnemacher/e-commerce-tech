import './InputSearchField.component.css';

function InputSearchField() {
    return (
        <div className='input-search-field'
            key="input-search-field">
            <div className="container">
                <img src="assets/images/search.svg" alt="Search icon" />

                <input type="text"
                    placeholder='Search' />
            </div>
        </div>
    );
}

export default InputSearchField;