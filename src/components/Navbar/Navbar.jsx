import React, { useState, useContext } from 'react';
import about from '../../assets/about.png';
import archive from '../../assets/archive.png';
import blogging from '../../assets/blogging.png';
import equalizer from '../../assets/equalizer.png';
import idButton from '../../assets/id-button.png';
import schedule from '../../assets/schedule.png';
import { UserContext } from '../../contexts/userContext';
import HamburgerIcon from './HamburgerIcon';
import LinkWithIcon from './LinkWithIcon';
import ProfileIcon from '../Authentication/ProfileIcon';
import Drawer from '../Common/Drawer';
import { useNavbar } from '../../contexts/NavbarContext';

const Navbar = () => {
	const { isOpen, toggleMenu } = useNavbar();
	const { user } = useContext(UserContext);
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
	const closeDrawer = () => setDrawerOpen(false);

	const drawerItems = [
		{ title: 'Profile', link: '/profile' },
		{ title: 'Listening History', link: '/listening-history' },
		{ title: 'Settings & Privacy', link: '/settings' },
		{ title: 'LogOut', link: '/logout' },
	];

	return (
		<section className="navbar flex items-center justify-between py-4 px-6 md:px-10 w-full bg-gray-900 fixed top-0 left-0 z-50">
			<h1 className="text-2xl md:text-4xl font-sans text-earthYellow">Groove Radio</h1>

			<div className="md:hidden">
				<HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
			</div>

			<div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto bg-gray-900 md:bg-transparent md:px-0 px-6 py-4 md:py-0 z-50`}>
				<LinkWithIcon title="Home" link="/" emoji={equalizer} />
				<LinkWithIcon title="Schedule" link="/schedule" emoji={schedule} />
				<LinkWithIcon title="Archives" link="/archives" emoji={archive} />
				<LinkWithIcon title="Blog" link="/news" emoji={blogging} />
				<LinkWithIcon title="About" link="/about" emoji={about} />

				{!user ? (
					<LinkWithIcon title="Log In" link="/login" emoji={idButton} />
				) : (
					<>
						<LinkWithIcon title="Playlist" link="/playlist" emoji={equalizer} />
						<LinkWithIcon title="Request Song" link="/request" emoji={about} />
						<LinkWithIcon title="Orders" link="/orders" emoji={schedule} />

						{/* Profile Icon */}
						<ProfileIcon profilePhoto={user.profilePhoto} name={user.name} onClick={toggleDrawer} />

						{/* Drawer */}
						<Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} items={drawerItems} />
					</>
				)}
			</div>
		</section>
	);
};

export default Navbar;
