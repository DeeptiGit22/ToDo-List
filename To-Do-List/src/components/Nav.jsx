import React, { createContext, useContext, useState } from "react";
import Button from "./Button";
import NewTodoModal from "../features/todo/components/NewTodoModal";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo-2.jpg";
import { useAppContext } from "../features/authentication/hooks/useAppContext";

function Nav() {
	const [modal, setModal] = useState(false);
	const { loggedIn, logout } = useAppContext();

	const toggleModal = () => {
		setModal(!modal);
	};

	const handleLogout = () => {
		logout();
	};
	return (
		<div className='d-flex justify-content-between align-items-center navbar navbar-expand-lg navbar-light shadow-sm mb-5 bg-body rounded'>
			<div>
				<img src={logo} alt='' className='logo' />
			</div>
			<div>
				<Button
					name={"Add"}
					onClick={toggleModal}
					className={"btn btn-secondary mx-2"}></Button>
				{!loggedIn ? (
					<Link to='/login'>
						<Button
							name={"Login"}
							className={"btn btn-outline-dark mx-2"}></Button>
					</Link>
				) : (
					<Button
						name={"Logout"}
						className={"btn btn-outline-dark mx-2"}
						onClick={handleLogout}></Button>
				)}
			</div>
			{/* Modal component */}
			{modal && (
				<div className={`modal ${modal ? "active-modal" : ""}`}>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content'>
						<NewTodoModal modal={toggleModal} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Nav;
