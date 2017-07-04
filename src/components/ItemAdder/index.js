import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './ItemAdder.css';

const ItemAdder  = ({handleSubmit, placeholder, newItemTitle, handleTitleChange}) => {
	return (
		<form className="ItemAdder" onSubmit={handleSubmit}>
			<input
				type="text"
				name="categoryAdder"
				id="categoryAdder"
				placeholder={placeholder}
				value={newItemTitle}
				onChange={handleTitleChange}
			/>
			<RaisedButton
				label="Add"
				primary
				onClick={handleSubmit}
			/>
		</form>
	)
};

export default ItemAdder;