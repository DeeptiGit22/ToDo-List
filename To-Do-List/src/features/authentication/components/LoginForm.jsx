import React, { createContext, useContext, useState } from "react";
import Button from "../../../components/Button";
import User from "../../../assets/person.png";
import Password from "../../../assets/password.png";
import { useAppContext } from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAppContext();
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = () => {
		// You should implement actual authentication logic here, for simplicity, just check if username and password are not empty
		if (username && password) {
			login();
			navigate('/');
		} else {
			setError("Please enter both username and password");
		}
	};

	return (
		<div className='login-page-container'>
			<div className='card p-4'>
				<h3 className='mb-4 text-center'>Login</h3>
				<form>
					<div className='mb-2'>
						<label htmlFor='username' className='mb-2'>
							UserName
						</label>
						<div className='d-flex align-items-center login-input'>
							<img src={User} alt='username' width={13} />
							<input
								type='text'
								className='input-field border-0'
								id='username'
								value={username}
								onChange={(e) => setUserName(e.target.value)}
								placeholder='Enter Username'
								required
							/>
						</div>
					</div>
					<div className='mb-4'>
						<label htmlFor='password' className='mb-2'>
							Password
						</label>
						<div className='d-flex align-items-center login-input'>
							<img src={Password} alt='password' width={13} />
							<input
								type='password'
								id='password'
								className='input-field border-0'
								placeholder='Enter Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</div>
				</form>
				<Button
					name={"Login"}
					onClick={handleLogin}
					className={"btn btn-secondary"}
				/>
				{error && <p style={{ color: "red" }}>{error}</p>}
			</div>
		</div>
	);
}

export default LoginForm;
