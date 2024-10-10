'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Advice {
	id: number;
	advice: string;
}

const AdviceList = () => {
	const [advices, setAdvices] = useState<Advice[]>([]);

	useEffect(() => {
		const fetchAdvices = async () => {
			try {
				const res = await fetch('https://api.adviceslip.com/advice/search/a'); // جلب نصائح عشوائية
				const data = await res.json();
				setAdvices(data.slips || []);
			} catch (error) {
				console.error('Error fetching advice:', error);
			}
		};

		fetchAdvices();
	}, []);

	return (
		<div className='fix-height flex flex-col items-center gap-12 mb-6'>
			<h2 className='mt-6 px-4 py-2 text-2xl font-semibold bg-gray-200 rounded-tr-xl rounded-bl-xl'>
				Advice List
			</h2>
			<ul className='container flex flex-wrap gap-8 justify-center'>
				{advices.map((advice) => (
					<li key={advice.id} className='flex'>
						<Link
							className='bg-gray-100 shadow-md hover:bg-gray-200 px-2 rounded-lg w-[290px] h-[100px] flex items-center'
							href={`/advice/${advice.id}`}
						>
							{advice.advice}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdviceList;
