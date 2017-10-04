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
					Add a new thing to do!
				</label>
				<input 
					value={value}
					onChange={onChange}
					type="text"
					className="form-control"
					id="listItemInput"
					placeholder="What's next, my lord?"
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