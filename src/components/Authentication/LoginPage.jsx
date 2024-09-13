import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';
import Modal from '../Common/Modal';


// Schema validation using Zod
const schema = z.object({
	email: z
		.string()
		.email({ message: 'Please enter valid Email Address.' })
		.min(3),
	password: z
		.string()
		.min(8, { message: 'Password should be at least 8 Characters.' }),
});

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) });

	const [formError, setFormError] = useState('');
	const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
	const [isNewUserOpen, setNewUserOpen] = useState(false);
	const location = useLocation();

	const onSubmit = async (formData) => {
		try {
			await login(formData);
			const { state } = location;
			window.location = state ? state.from : '/';
		} catch (err) {
			if (err.response && err.response.status === 400) {
				setFormError(err.response.data.message);
			}
		}
	};

	const handleForgotPassword = () => setForgotPasswordOpen(true);
	const handleNewUser = () => setNewUserOpen(true);

	return (
		<>
			<section className="flex items-center justify-center min-h-screen bg-gray-100">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-md py-8 px-6 bg-white rounded shadow-md"
				>
					<h2 className="text-3xl font-bold mb-6 text-center">
						Groover Login
					</h2>

					<div className="form_inputs">
						<div className="flex flex-col mb-5">
							<label
								htmlFor="email"
								className="text-lg font-semibold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="h-12 px-3 text-lg font-medium border rounded outline-none focus:ring-2 focus:ring-spanishOrange"
								placeholder="Enter your Email Address"
								{...register('email')}
							/>
							{errors.email && (
								<em className="form_error text-red-600">
									{errors.email.message}
								</em>
							)}
						</div>
						<div className="flex flex-col mb-5">
							<label
								htmlFor="password"
								className="text-lg font-semibold mb-2"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								className="h-12 px-3 text-lg font-medium border rounded outline-none focus:ring-2 focus:ring-spanishOrange"
								placeholder="Enter your password"
								{...register('password')}
							/>
							{errors.password && (
								<em className="form_error text-red-600">
									{errors.password.message}
								</em>
							)}
						</div>

						{formError && (
							<em className="form_error text-xs text-red-500">
								{formError}
							</em>
						)}

						<button
							type="submit"
							className="h-12 w-full mt-6 text-lg font-semibold bg-spanishOrange text-white rounded 
                            hover:bg-earthYellow focus:outline-none focus:ring-2 focus:ring-spanishOrange"
						>
							Submit
						</button>

						<div className="flex justify-between mt-4">
							<button
								type="button"
								className="text-sm text-spanishOrange hover:underline"
								onClick={handleForgotPassword}
							>
								Forgot Password?
							</button>
							<button
								type="button"
								className="text-sm text-spanishOrange hover:underline"
								onClick={handleNewUser}
							>
								New User? Sign Up
							</button>
						</div>
					</div>
				</form>
			</section>

			{/* Forgot Password Modal */}
			{isForgotPasswordOpen && (
				<Modal onClose={() => setForgotPasswordOpen(false)} title="Reset Password">
					<form className="flex flex-col">
						<label htmlFor="reset-email" className="mb-2 block text-lg text-gray-600 text-left">
							Enter your email address
						</label>
						<input
							type="email"
							id="reset-email"
							className="mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-spanishOrange"
						/>
						<button className="bg-spanishOrange hover:bg-earthYellow text-white px-4 py-2 rounded">
							Reset
						</button>
					</form>
				</Modal>
			)}

			{/* New User Modal */}
			{isNewUserOpen && (
				<Modal onClose={() => setNewUserOpen(false)} title="Create New Account">
					<form className="flex flex-col">
						<label htmlFor="new-email" className="mb-2">
							Email
						</label>
						<input
							type="email"
							id="new-email"
							className="mb-4 p-2 border rounded"
							placeholder="Email Address"
						/>
						<label htmlFor="new-password" className="mb-2">
							Password
						</label>
						<input
							type="password"
							id="new-password"
							className="mb-4 p-2 border rounded"
							placeholder="Password"
						/>
						<button className="bg-spanishOrange text-white px-4 py-2 rounded">
							Register
						</button>
					</form>
				</Modal>
			)}
		</>
	);
};

export default LoginPage;
