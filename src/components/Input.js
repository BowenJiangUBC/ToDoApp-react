import React from 'react';

const Input = ({value, onChange, onSubmit}) => {

    return(
        <form
            onSubmit={onSubmit}
            >
            <div
                className="form-group">
                <label
                    htmlFor="listInput">
                    Email address
                </label>
                <input
                    placeholder={value}
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="listItemInput"


                />
                <button

                    className="btn btn-primary">
                    Add Item
                </button>
            </div>
        </form>
    )
};

export default Input;

