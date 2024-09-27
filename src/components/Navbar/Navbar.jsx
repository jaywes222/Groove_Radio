import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import HamburgerIcon from './HamburgerIcon';
import LinkWithIcon from './LinkWithIcon';
import ProfileIcon from '../Authentication/ProfileIcon';
import Drawer from '../Common/Drawer';
import { useNavbar } from '../../contexts/NavbarContext';
import home from '../../assets/house.png';
import about from '../../assets/about.png';
import archive from '../../assets/archive.png';
import blogging from '../../assets/blogging.png';
import idButton from '../../assets/id-button.png';
import schedule from '../../assets/schedule.png';
import orders from '../../assets/order.png';
import profile from '../../assets/profile.png';
import playlist from '../../assets/playlist.png';
import songRequest from '../../assets/request.png';
import listeningHistory from '../../assets/history.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout.png';

const Navbar = () => {
	const { isOpen, toggleMenu } = useNavbar();
	const { user } = useContext(UserContext);
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen);
	};

	const closeDrawer = () => setDrawerOpen(false);

	const location = useLocation();

	const drawerItems = [
		{ title: 'Orders', link: '/orders', emoji: orders },
		{ title: 'Profile', link: '/profile', emoji: profile },
		{ title: 'Playlist', link: '/playlist', emoji: playlist },
		{ title: 'Request Song', link: '/request', emoji: songRequest },
		{ title: 'Listening History', link: '/listening-history', emoji: listeningHistory },
		{ title: 'Settings & Privacy', link: '/settings', emoji: settings },
		{ title: 'LogOut', link: '/logout', emoji: logout },
	];

	if (location.pathname !== '/') {
		drawerItems.unshift({ title: 'Home', link: '/', emoji: home });
	}

	return (
		<div>
			<section className="navbar flex items-center justify-between py-4 px-6 md:px-10 w-full bg-gray-900 fixed top-0 left-0 z-50">
				<h1 className="text-2xl md:text-4xl font-sans text-earthYellow">Groove Radio</h1>

				<div className="md:hidden">
					{!user ? (
						<HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
					) : (
						<ProfileIcon
							profilePhoto={user.profilePhoto}
							name={user.name}
							onClick={toggleDrawer}
						/>
					)}
				</div>

				<div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:px-0 px-6 py-4 md:py-0 z-50`}>
					<LinkWithIcon title="Home" link="/" emoji={home} toggleMenu={toggleMenu} />
					<LinkWithIcon title="Schedule" link="/schedule" emoji={schedule} toggleMenu={toggleMenu} />
					<LinkWithIcon title="Archives" link="/archives" emoji={archive} toggleMenu={toggleMenu} />
					<LinkWithIcon title="Blog" link="/news" emoji={blogging} toggleMenu={toggleMenu} />
					<LinkWithIcon title="About" link="/about" emoji={about} toggleMenu={toggleMenu} />

					{!user ? (
						<LinkWithIcon title="Log In" link="/login" emoji={idButton} toggleMenu={toggleMenu} />
					) : (
						<ProfileIcon
							profilePhoto={user.profilePhoto}
							name={user.name}
							onClick={toggleDrawer}
						/>
					)}
				</div>
			</section>

			<Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} items={drawerItems} />
		</div>
	);
};

export default Navbar;
