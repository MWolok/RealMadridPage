import { CircularProgress } from "@mui/material";
import { app, auth, signInWithEmailAndPassword } from "../../FireBase/FireBase";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../Toast";

const SignIn = (props) => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email adress")
				.required("Emial required"),
			password: Yup.string()
				.required("Password required")
				.min(6, "Min 6 sings"),
		}),
		onSubmit: (values) => {
			setLoading(true);
			submitValues(values);
		},
	});

	const submitValues = (values) => {
		signInWithEmailAndPassword(auth, values.email, values.password)
			.then(() => {
				navigate("/home");
				showSuccessToast("Welcome");
			})
			.catch((errors) => {
				showErrorToast(errors);
				setLoading(false);
				
			});
	};
	return (
		<>
			{!props.user && (
				<div className="container" style={{ margin: "100px" }}>
					<div className="signin_wrapper">
						<form onSubmit={formik.handleSubmit}>
							<h2>Please LogIn</h2>
							<input
								name="email"
								placeholder="Email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}></input>

							{formik.touched.email && formik.errors.email ? (
								<div className="error_label">{formik.errors.email}</div>
							) : null}

							<input
								name="password"
								placeholder="Password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}></input>

							{formik.touched.password && formik.errors.password ? (
								<div className="error_label">{formik.errors.password}</div>
							) : null}

							{loading ? (
								<CircularProgress color="primary" className="progress" />
							) : (
								<button type="submit">Log in</button>
							)}
						</form>
					</div>
				</div>
			)}
		</>
	);
};
export default SignIn;
