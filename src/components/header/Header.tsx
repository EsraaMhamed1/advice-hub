import Link from 'next/link';
import styles from './header.module.css';
import Navbar from './Navbar';
import { MdFavorite } from 'react-icons/md';
const HeaderPage = () => {
	return (
		<header className={styles.header}>
			<Navbar />
			{/* Fav  */}
			<div>
				<Link className={styles.right} href={'/favorites'}>
					<MdFavorite />
				</Link>
			</div>
		</header>
	);
};

export default HeaderPage;
