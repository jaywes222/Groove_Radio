import React, { useState } from 'react';
import user from '../../assets/user.webp';

const UserProfileUpload = ({ profilePic, setProfilePic }) => {
    const [error, setError] = useState('');
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
    const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setError('Only JPG, PNG, and WEBP files are allowed.');
                setProfilePic(null);
            } else if (file.size > MAX_FILE_SIZE) {
                setError('File size must be less than 2MB.');
                setProfilePic(null);
            } else {
                setError('');
                setProfilePic(file);
            }
        }
    };

    const resetProfilePic = () => {
        setProfilePic(null);
        setError('');
    };

    return (
        <div className="image_input_section flex flex-col items-center">
            <div className="image_preview w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                    src={profilePic ? URL.createObjectURL(profilePic) : user}
                    id="file-ip-1-preview"
                    className="w-full h-full object-cover"
                    alt="User profile"
                />
            </div>

            <div className='flex items-center justify-center w-full space-x-4'>
                <label
                    htmlFor="file-ip-1"
                    className="image_label inline-block py-2.5 px-5 mb-2 text-center bg-spanishOrange 
				text-white text-[15px] uppercase font-semibold border-2 border-spanishOrange rounded-[5px] shadow-md cursor-pointer 
				hover:bg-white hover:text-spanishOrange "
                >
                    Upload Image
                </label>
                <input
                    type="file"
                    id="file-ip-1"
                    onChange={handleFileChange}
                    className="image_input hidden"
                    accept=".jpg,.jpeg,.png,.webp"
                />
                
                <button
                    onClick={resetProfilePic}
                    className="reset_label inline-block py-2.5 px-5 mb-2 text-center bg-gray-300 
				text-black text-[15px] uppercase font-semibold rounded-[5px] shadow-md border-2 border-gray-300 cursor-pointer md:text-base
				hover:bg-white hover:text-gray-600"
                >
                    Reset to Default
                </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

        </div>
    );
};

export default UserProfileUpload;
