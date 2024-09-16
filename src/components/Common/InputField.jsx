import React from 'react';

const InputField = ({ id, label, type = 'text', placeholder, register, errors, onBlur }) => {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-lg text-gray-600 text-left">{label}</label>
            <input
                type={type}
                id={id}
                className="mb-4 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-spanishOrange"
                placeholder={placeholder}
                {...register}
                onBlur={onBlur}
            />
            {errors && (
                <em className="form_error text-red-600">{errors.message}</em>
            )}
        </div>
    );
};

export default InputField;
