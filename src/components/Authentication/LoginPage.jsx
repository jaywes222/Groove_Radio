import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Modal from '../Common/Modal';
import UserProfileUpload from './UserProfileUpload';
import InputField from '../Common/InputField';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

// Schema validation using Zod for the new user registration
const registrationSchema = z.object({
	name: z.string().min(12, { message: 'Please enter your full name' }),
	email: z.string().email({ message: 'Please enter a valid email address.' }).min(3),
	password: z.string().min(8, { message: 'Password should be at least 8 characters.' }),
	cpassword: z.string(),
	address: z.string().min(15, { message: 'Address must be at least 15 characters.' }),
}).refine((data) => data.password === data.cpassword, {
	message: 'Confirm password does not match password',
	path: ['cpassword'],
});

// Schema validation for the login form
const loginSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email address.' }).min(3),
	password: z.string().min(8, { message: 'Password should be at least 8 characters.' }),
});

const LoginPage = () => {
	const navigate = useNavigate(); // Initialize navigate
	const {
		register: loginRegister,
		handleSubmit: handleLoginSubmit,
		formState: { errors: loginErrors },
		watch: watchLoginFields,
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const {
		register: registrationRegister,
		handleSubmit: handleRegistrationSubmit,
		formState: { errors: registrationErrors },
		trigger: triggerRegistrationValidation,
		watch: watchRegistrationFields,
	} = useForm({
		resolver: zodResolver(registrationSchema),
	});

	const [formError, setFormError] = useState('');
	const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
	const [isNewUserOpen, setNewUserOpen] = useState(false);
	const [profilePic, setProfilePic] = useState(null);
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	const [isRegistering, setIsRegistering] = useState(false);
	const location = useLocation();

	// Watch all form fields for login
	const watchLoginAllFields = watchLoginFields();

	// Watch all form fields for new user registration
	const watchRegistrationAllFields = watchRegistrationFields();

	const onLoginSubmit = async (formData) => {
		try {
			setIsLoggingIn(true);
			await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulation
			toast.success('Groover Login Successful!');
			setTimeout(() => {
				navigate('/');
			}, 2000);
		} catch (err) {
			if (err.response && err.response.status === 400) {
				setFormError(err.response.data.message);
				toast.error(err.response.data.message);
			}
		} finally {
			setIsLoggingIn(false);
		}
	};

	const onRegistrationSubmit = async (formData) => {
		try {
			setIsRegistering(true); // Set processing state
			await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulation
			console.log('New user registration data', formData);
			toast.success('Groover Registration successful!');
			setTimeout(() => {
				navigate('/');
			}, 2000);
		} catch (err) {
			setFormError('An error occurred during registration. Please try again.');
			toast.error('An error occurred during registration. Please try again.');
		} finally {
			setIsRegistering(false);
		}
	};

	const handleForgotPassword = () => setForgotPasswordOpen(true);
	const handleNewUser = () => setNewUserOpen(true);

	// Check if the login form is valid
	const isLoginFormValid = watchLoginAllFields.email && watchLoginAllFields.password && !loginErrors.email && !loginErrors.password;

	// Check if the registration form is valid
	const isRegistrationFormValid =
		watchRegistrationAllFields.name &&
		watchRegistrationAllFields.email &&
		watchRegistrationAllFields.password &&
		watchRegistrationAllFields.cpassword &&
		watchRegistrationAllFields.address &&
		!registrationErrors.name &&
		!registrationErrors.email &&
		!registrationErrors.password &&
		!registrationErrors.cpassword &&
		!registrationErrors.address;

	return (
		<>
			{/* Login Form */}
			<section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
				<form
					onSubmit={handleLoginSubmit(onLoginSubmit)}
					className="w-full max-w-md py-8 px-6 bg-white rounded shadow-md"
				>
					<h2 className="text-3xl font-bold mb-6 text-center">Groover Login</h2>

					<div className="form_inputs">
						<InputField
							id="email"
							label="Email"
							type="email"
							register={loginRegister('email')}
							errors={loginErrors.email}
						/>

						<InputField
							id="password"
							label="Password"
							type="password"
							register={loginRegister('password')}
							errors={loginErrors.password}
						/>

						{formError && (
							<em className="form_error text-xs text-red-500">{formError}</em>
						)}

						<button
							type="submit"
							className={`h-12 w-full mt-6 text-lg font-semibold bg-spanishOrange text-white rounded 
                            hover:bg-earthYellow focus:outline-none focus:ring-2 focus:ring-spanishOrange
                            ${!isLoginFormValid || isLoggingIn ? 'opacity-50 cursor-not-allowed' : ''}`}
							disabled={!isLoginFormValid || isLoggingIn}
						>
							{isLoggingIn ? 'Logging in...' : 'Submit'}
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
						<InputField
							id="reset-email"
							label="Enter your email address"
							type="email"
						/>
						<button className="bg-spanishOrange hover:bg-earthYellow text-white px-4 py-2 rounded">
							Reset
						</button>
					</form>
				</Modal>
			)}

			{/* New User Registration Modal */}
			{isNewUserOpen && (
				<Modal onClose={() => setNewUserOpen(false)} title="Create Groover Account">
					<UserProfileUpload profilePic={profilePic} setProfilePic={setProfilePic} />

					{/* New User Registration Form */}
					<form onSubmit={handleRegistrationSubmit(onRegistrationSubmit)} className="flex flex-col space-y-3">
						<InputField
							id="new-name"
							label="Full Name"
							placeholder="Enter Your Full Name"
							register={registrationRegister('name')}
							errors={registrationErrors.name}
							onBlur={() => triggerRegistrationValidation('name')}
						/>

						<InputField
							id="new-email"
							label="Email"
							type="email"
							placeholder="Enter Your Email"
							register={registrationRegister('email')}
							errors={registrationErrors.email}
							onBlur={() => triggerRegistrationValidation('email')}
						/>

						<InputField
							id="new-password"
							label="Password"
							type="password"
							placeholder="Enter Your Password"
							register={registrationRegister('password')}
							errors={registrationErrors.password}
							onBlur={() => triggerRegistrationValidation('password')}
						/>

						<InputField
							id="new-cpassword"
							label="Confirm Password"
							type="password"
							placeholder="Confirm Your Password"
							register={registrationRegister('cpassword')}
							errors={registrationErrors.cpassword}
							onBlur={() => triggerRegistrationValidation('cpassword')}
						/>

						<div>
							<label htmlFor="new-address" className="mb-2 block text-lg text-gray-600 text-left">
								Delivery Address
							</label>
							<textarea
								id="new-address"
								className="input_textarea w-full text-[17px] font-medium h-32 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-spanishOrange resize-none"
								placeholder="Enter Delivery Address"
								{...registrationRegister('address')}
								onBlur={() => triggerRegistrationValidation('address')}
							/>
							{registrationErrors.address && (
								<em className="form_error text-red-700">
									{registrationErrors.address.message}
								</em>
							)}
						</div>

						{formError && (
							<em className="form_error text-xs text-red-700">
								{formError}
							</em>
						)}

						<button
							type="submit"
							className={`bg-spanishOrange hover:bg-earthYellow text-white px-4 py-2 rounded
                            ${!isRegistrationFormValid || isRegistering ? 'opacity-50 cursor-not-allowed' : ''}`}
							disabled={!isRegistrationFormValid || isRegistering}
						>
							{isRegistering ? 'Registering...' : 'Register'}
						</button>
					</form>
				</Modal>
			)}

			
			<ToastContainer />
		</>
	);
};

export default LoginPage;
