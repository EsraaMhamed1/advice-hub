'use client';
import { useEffect, useState } from 'react';

const Favorites = () => {
	const [favorites, setFavorites] = useState<string[]>([]);

	useEffect(() => {
		const savedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		setFavorites(savedFavorites);
	}, []);

	return (
		<div className='fix-height'>
			<h2 className='text-center text-2xl text-green-900 p-6'>
				Your Favorite Advices
			</h2>
			<div className=' flex flex-col items-center justify-center '>
				<ul className=' flex flex-wrap  justify-center  text-green-900'>
					{favorites.length > 0 ? (
						favorites.map((advice, index) => (
							<li className='p-4 ' key={index}>
								<p className='bg-green-200 hover:bg-green-300 border-2 border-green-300 p-4 rounded-lg w-[290px] h-[100px] '>
									{advice}
								</p>
							</li>
						))
					) : (
						<p>No favorites yet.</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Favorites;
