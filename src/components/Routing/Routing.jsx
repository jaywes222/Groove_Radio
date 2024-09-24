import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {UserContext} from '../../contexts/userContext';
import HomePage from '../Home/HomePage';
import ScheduleTable from '../Schedule/ScheduleTable';
import NewsSection from '../News/NewsSection';
import LoginPage from '../Authentication/LoginPage';
import AboutUsPage from '../About/AboutUsPage';
import ArchivesPage from '../Archives/ArchivesPage';
import PlaylistPage from '../Playlist/PlaylistPage';
import LogoutPage from './../Authentication/LogoutPage';
import ProtectedRoute from './ProtectedRoute';
import PlaylistDetailPage from '../Playlist/PlaylistDetailsPage';
import MyOrderPage from '../Orders/MyOrderPage';
import ProfilePage from '../Profile/ProfilePage';
import RequestSongPage from '../Request/RequestSongPage';
import SettingsPage from '../Profile/Settings';
import ListeningHistoryPage from '../Profile/ListeningHistory';

const Routing = () => {
    const { user } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schedule" element={<ScheduleTable />} />
            <Route path="/archives" element={<ArchivesPage />} />
            <Route path="/news" element={<NewsSection />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute user={user} />}>
                <Route path="/playlist" element={<PlaylistPage />} />
                <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
                <Route path="/request" element={<RequestSongPage />} />
                <Route path="/listening-history" element={<ListeningHistoryPage />} />
                <Route path="/orders" element={<MyOrderPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Route>

            {/* Redirect to Home if any undefined route is accessed */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Routing;
