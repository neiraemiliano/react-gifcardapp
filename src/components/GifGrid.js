import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import {getGifs} from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';

function GifGrid({ category }) {
	/* state para cargar imagenes */
	const [ images, SetImages ] = useState([]);

	/* creamos un custom Hooks para  ejecutar el hook */
	const { data, loading } = useFetchGifs(category);


	return (
        <>
			<h3 className="animate__animated animate_fadeIn">{category.toUpperCase()}</h3>

			{loading ? <p>Loading</p> : null}

			<div className="card-grid animate__animated animate_fadeIn">

				{/* mapeo las imagenes en una lista */}
				{data.map((img) => <GifGridItem key={img.id} {...img} />)}
			</div>
        </>
	);
}

export default GifGrid;



