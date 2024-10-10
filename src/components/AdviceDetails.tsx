'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const AdviceDetail = () => {
	const { id } = useParams();
	const [advice, setAdvice] = useState('');

	useEffect(() => {
		const fetchAdvice = async () => {
			if (!id) return;
			const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
			const data = await res.json();
			setAdvice(data.slip.advice);
		};

		fetchAdvice();
	}, [id]);

	const addToFavorites = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		favorites.push(advice);
		localStorage.setItem('favorites', JSON.stringify(favorites));
		alert('Advice added to favorites!');
	};

	if (!advice) return <p>Loading...</p>;

	return (
		<div className='fix-height flex  flex-col gap-10 items-center bg-purple-100'>
			<h2 className='text-purple-800 font-semibold text-2xl p-16 '>
				Selected Advice 🎉
			</h2>

			<div className=' flex flex-col lg:flex-row items-center justify-center gap-6 pb-16'>
				<div className='container bg-purple-600 rounded-lg p-8 w-[90%] text-white text-lg hover:bg-purple-500'>
					{advice}
				</div>
				<button
					className='bg-purple-500 rounded-lg p-5 text-white  hover:bg-purple-600'
					onClick={addToFavorites}
				>
					Add to Favorites
				</button>
			</div>
		</div>
	);
};

export default AdviceDetail;
