	/* obtengo las imagenes atravez de la url y mapeo los datos necesarios */
	export const getGifs = async (category) => {
		const url =
		`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BpgW1iAU41aEPLTm6LpYtwESXq8c1UpE`
		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images.downsized_medium.url
			};
		});
		/* le asigno los gifs a las imagenes */
		return gifs
	};