import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import user from '../../assets/user.webp';
import { getUser, signup } from '../../services/userServices';
import { Navigate } from 'react-router-dom';

const schema = z
	.object({
		name: z
			.string()
			.min(3, { message: 'Name should be at least 3 characters' }),
		email: z.string().email({ message: 'Please enter a valid Email.' }),
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters' }),
		cpassword: z.string(),
		address: z
			.string()
			.min(15, { message: 'Address must be at least 15 characters.' }),
	})
	.refine((data) => data.password === data.cpassword, {
		message: 'Confirm Password does not match Password',
		path: ['cpassword'],
	});

const SignupPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: zodResolver(schema),
	});
	const [profilePic, setProfilePic] = useState(null);
	const [formError, setFormError] = useState('');

	useEffect(() => {
		// Cleans up URL object to avoid memory leaks
		return () => {
			if (profilePic) URL.revokeObjectURL(profilePic);
		};
	}, [profilePic]);

	const onSubmit = async (formData) => {
		try {
			await signup(formData, profilePic);

			window.location = '/';
		} catch (err) {
			if (err.response && err.response.status === 400) {
				setFormError(err.response.data.message);
			}
		}
	};

	if (getUser()) {
		return <Navigate to="/" />;
	}

	return (
		<section className="flex justify-center items-center min-h-screen bg-gray-100">
			<form
				className="authentication_form signup_form w-full max-w-lg bg-white rounded shadow-md p-8"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="text-3xl font-bold mb-6 text-center">
					SignUp Form
				</h2>

				<div className="image_input_section flex flex-col items-center">
					<div className="image_preview w-32 h-32 rounded-full overflow-hidden mb-4">
						<img
							src={
								profilePic
									? URL.createObjectURL(profilePic)
									: user
							}
							id="file-ip-1-preview"
							className="w-full h-full object-cover"
							alt="User profile"
						/>
					</div>
					<label
						htmlFor="file-ip-1"
						className="image_label inline-block py-2.5 px-5 mb-5 text-center bg-majorelle-blue 
                        text-white text-[15px] uppercase font-medium rounded-[5px] cursor-pointer 
                        hover:bg-dark-majorelle-blue focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
					>
						Upload Image
					</label>
					<input
						type="file"
						id="file-ip-1"
						onChange={(e) => setProfilePic(e.target.files[0])}
						className="image_input hidden"
					/>
				</div>

				{/* Form Inputs */}
				<div className="form_inputs signup_form_input grid grid-cols-1 md:grid-cols-2 gap-5">
					<div>
						<label
							htmlFor="name"
							className="text-lg font-medium mb-2"
						>
							Name
						</label>
						<input
							id="name"
							className="form_text_input w-full p-3 border rounded focus:ring-2 focus:ring-majorelle-blue"
							type="text"
							placeholder="Enter your name"
							{...register('name')}
							onBlur={() => trigger('name')}
						/>
						{errors.name && (
							<em className="form_error text-red-">
								{errors.name.message}
							</em>
						)}
					</div>

					<div>
						<label
							htmlFor="email"
							className="text-lg font-medium mb-2"
						>
							Email
						</label>
						<input
							id="email"
							className="form_text_input w-full p-3 border rounded focus:ring-2 focus:ring-majorelle-blue"
							type="email"
							placeholder="Enter your email address"
							{...register('email')}
							onBlur={() => trigger('email')}
						/>
						{errors.email && (
							<em className="form_error text-red-">
								{errors.email.message}
							</em>
						)}
					</div>

					<div>
						<label
							htmlFor="password"
							className="text-lg font-medium mb-2"
						>
							Password
						</label>
						<input
							id="password"
							className="form_text_input w-full p-3 border rounded focus:ring-2 focus:ring-majorelle-blue"
							type="password"
							placeholder="Enter your password"
							{...register('password')}
							onBlur={() => trigger('password')}
						/>
						{errors.password && (
							<em className="form_error text-red-">
								{errors.password.message}
							</em>
						)}
					</div>

					<div>
						<label
							htmlFor="cpassword"
							className="text-lg font-medium mb-2"
						>
							Confirm Password
						</label>
						<input
							id="cpassword"
							className="form_text_input w-full p-3 border rounded focus:ring-2 focus:ring-majorelle-blue"
							type="password"
							placeholder="Confirm your password"
							{...register('cpassword')}
							onBlur={() => trigger('cpassword')}
						/>
						{errors.cpassword && (
							<em className="form_error text-red-">
								{errors.cpassword.message}
							</em>
						)}
					</div>

					<div className="col-span-1 md:col-span-2">
						<label
							htmlFor="address"
							className="text-lg font-medium mb-2"
						>
							Delivery Address
						</label>
						<textarea
							id="address"
							className="input_textarea w-full text-[17px] font-medium h-32 p-3 border rounded focus:ring-2 focus:ring-majorelle-blue resize-none"
							placeholder="Enter Delivery Address"
							{...register('address')}
							onBlur={() => trigger('address')}
						/>
						{errors.address && (
							<em className="form_error text-red-">
								{errors.address.message}
							</em>
						)}
					</div>
				</div>

				{formError && (
					<em className="form_error text-xs text-red-">
						{formError}
					</em>
				)}

				<button
					className="search_button form_submit mt-6 w-full bg-majorelle-blue text-white text-lg 
                    font-medium py-3 rounded hover:bg-dark-majorelle-blue focus:outline-none focus:ring-2 
                    focus:ring-majorelle-blue"
					type="submit"
				>
					Submit
				</button>
			</form>
		</section>
	);
};

export default SignupPage;
