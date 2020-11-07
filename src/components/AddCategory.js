import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({SetCategories}) => {

	/* crea useState encargado de cambia valor a input */
	const [ inputValue, SetInputValue ] = useState('');

	/* cuando el input cambia seteamos el nuevo valor */
	const handleInputChange = (e) => {
		SetInputValue(e.target.value);
	};

	/* cuando apretamos la tecla intro cambiamos el state de Categories que fue pasada por props */
	const handleSumbit = (e) => {
        e.preventDefault()       

        if (inputValue.trim().length > 2){
            SetCategories(cats => [inputValue, ...cats ])
            SetInputValue('')
        }
        };

	return (
		<form onSubmit={handleSumbit}>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
    );
    
};

AddCategory.propTypes = {
    SetCategories: PropTypes.func.isRequired
};

export default AddCategory;
