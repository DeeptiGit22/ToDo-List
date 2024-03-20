import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		// Check if user is already logged in from local storage
		const isLoggedIn = localStorage.getItem("loggedIn");
		if (isLoggedIn) {
			setLoggedIn(true);
		}
	}, []);

	const login = () => {
		setLoggedIn(true);
		localStorage.setItem("loggedIn", true);
	};

	const logout = () => {
		setLoggedIn(false);
		localStorage.removeItem("loggedIn");
	};

	return (
		<AppContext.Provider value={{ loggedIn, login, logout }}>
			{children}
		</AppContext.Provider>
	);
};
