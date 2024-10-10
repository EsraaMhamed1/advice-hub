import Link from 'next/link';

const AboutPage = () => {
	return (
		<div className='fix-height container m-auto'>
			<h1 className='text-3xl font-bold text-gray-800 p-5'>About This App </h1>
			<div className='px-5 text-gray-600 text-xl bg-gray-100 p-3 mx-6 rounded-lg'>
				At{' '}
				<Link href={'/'} className='text-purple-700 font-semibold'>
					DEVICE HUP
				</Link>
				, we are dedicated to providing insightful and practical advice to help
				you navigate lifes challenges. Our goal is to empower individuals with
				personalized tips and expert suggestions that make decision-making
				easier. Whether you&apos;re seeking advice on personal growth,
				relationships, or daily living, we&apos;re here to offer guidance
				tailored to your needs. Trust us to be your go-to source for trusted
				advice that helps you lead a more fulfilling life.
			</div>
		</div>
	);
};

export default AboutPage;
