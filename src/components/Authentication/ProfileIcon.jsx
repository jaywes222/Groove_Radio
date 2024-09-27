import React from 'react';
import PropTypes from 'prop-types';

const ProfileIcon = ({ profilePhoto = null, name = 'Guest', onClick }) => {
    const defaultIcon = "P";

    return (
        <button
            onClick={onClick}
            className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-500 text-white cursor-pointer"
        >
            {profilePhoto ? (
                <img
                    src={profilePhoto}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover"
                />
            ) : (
                <span className="text-lg font-bold">
                    {name ? name[0].toUpperCase() : defaultIcon}
                </span>
            )}
        </button>
    );
};

// Prop Types for validation
ProfileIcon.propTypes = {
    profilePhoto: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ProfileIcon;
