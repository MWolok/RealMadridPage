import React from "react";
import ReactDOM from "react-dom/client";
import { auth, onAuthStateChanged } from "./FireBase/FireBase";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
onAuthStateChanged(auth, (user) => {
	console.log(user);

	root.render(
		<React.StrictMode>
			<App user={user} />
		</React.StrictMode>
	);
});
