'use client';
import styles from './header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div>
			<nav className={styles.navbar}>
				{/* LEFT SECTION  */}
				<div>
					<Link className={styles.logo} href={'/'}>
						ADVICE
						<GrTechnology />
						HUB
					</Link>
					<div className={styles.menu}>
						{toggle ? (
							<IoMdClose
								onClick={() => {
									setToggle((prev) => !prev);
								}}
							/>
						) : (
							<CiMenuFries
								onClick={() => {
									setToggle((prev) => !prev);
								}}
							/>
						)}
					</div>
				</div>

				{/* RIGHT SECTION  */}
				<div
					className={styles.navLinksWrapper}
					style={{
						clipPath:
							(toggle && ' polygon(0 0, 100% 0, 100% 100%, 0% 100%') || '',
					}}
				>
					<ul className={styles.navLinks}>
						<Link
							onClick={() => {
								setToggle(false);
							}}
							className={styles.navLink}
							href={'/'}
						>
							Home
						</Link>
						<Link
							onClick={() => {
								setToggle(false);
							}}
							className={styles.navLink}
							href={'/advice'}
						>
							Get Free Advice!
						</Link>
						<Link
							onClick={() => {
								setToggle(false);
							}}
							className={styles.navLink}
							href={'/about'}
						>
							About
						</Link>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
