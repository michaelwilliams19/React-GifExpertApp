import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
  
    const [inputValue, setInputValue] = useState(''); // que arranque con string vacio ya que sino su valor es undefined y me genera un error en consola sobre esto.
    
    
    //asi es como nos permite escribir en el input. e.target tiene el texto actualizado que se escribe.
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //previene que se recargue toda la pagina por completo.

        if (inputValue.trim().length > 2){
            setCategories(categ => [inputValue, ...categ]);
            setInputValue('');
        }
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <h1> { inputValue } </h1>
            <input 
                type="text"
                value = {inputValue}
                onChange = { (e) => handleInputChange(e)}
            />
        </form>
    </>
  );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


