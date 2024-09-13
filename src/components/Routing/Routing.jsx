import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import ScheduleTable from '../Schedule/ScheduleTable';
import NewsSection from '../News/NewsSection';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/schedule" element={<ScheduleTable />} />
            {/* <Route path="/archives" element={<ArchivesPage />} /> */}
            <Route path="/news" element={<NewsSection />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/signup" element={<SignupPage />} /> */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
            {/* <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfileSection />} />
                <Route path="/myshows" element={<MyShowsSection />} />
                <Route path="/logout" element={<LogoutSection />} />
            </Route> */}
        </Routes>
    );
};

export default Routing;
