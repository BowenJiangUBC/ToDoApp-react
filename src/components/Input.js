import React from 'react';

const Input = ({onChange,onSubmit,value}) => {
	// console.log(value);
	// console.log(onChange);
	return(<form
				onSubmit={onSubmit}
				>
			<div
				className="form-group">
				<label
					htmlFor="listInput">
					Email address
				</label>
				<input 
					value={value}
					onChange={onChange}
					type="text"
					className="form-control"
					id="listItemInput"
					placeholder="add new todo"
				/>
				<button 
					className="btn btn-primary"
					onClick={onSubmit}>
					Add Item
				</button>
			</div>
		</form>
	)
};
export default Input;