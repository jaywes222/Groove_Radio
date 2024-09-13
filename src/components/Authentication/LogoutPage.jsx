import { useEffect } from 'react';
import { logout } from '../../services/userServices';

const LogoutPage = () => {
	useEffect(() => {
		logout();
		window.location = '/';
	}, []);
	return null;
};

export default LogoutPage;
