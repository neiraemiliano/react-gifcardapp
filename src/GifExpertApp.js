import { Fragment, useState } from 'react';
import React from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    let firstCategories = [ ];

    /* crea un useState para manejar las categorias */
    const [ categories, SetCategories ] = useState(firstCategories);
    
	return (
		<Fragment>
			<h2>GifExpertApp</h2>
            {/* importa componente y le pasa como props el useState */}
			<AddCategory SetCategories={SetCategories}/>
            <hr />
			<ol>
                {/* mapea la lista de categorias e importa componente encargado de buscar las categorias */}
				{categories.map(category => <GifGrid key={ category } category={category} />)} 
			</ol>
		</Fragment>
	);
};

export default GifExpertApp;
