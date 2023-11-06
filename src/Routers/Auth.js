

import { useNavigate } from "react-router-dom";
import {auth } from "../FireBase/FireBase";
import { useEffect } from "react";
const AuthGuard = ({ children }) => {
	const navigate = useNavigate();
	const  currentUser  = auth.currentUser;
  
	useEffect(() => {
	  if (!currentUser) {
		navigate("/LogIn", { replace: true });
	  }
	}, [currentUser, navigate]);
  
	return currentUser ? children : null;
  };
  
  export default AuthGuard;
