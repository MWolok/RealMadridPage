import { CircularProgress } from "@mui/material";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignIn = () => {
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email adress").required("Emial required"),
			password: Yup.string()
				.required("Password required")
				.min(6, "Min 6 sings"),
		}),
		onSubmit: (values) => {
			//send
		},
	});
	return (
		<>
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
							<CircularProgress color="secondary" className="progress" />
						) : (
							<button type="submit">Log in</button>
						)}
					</form>
				</div>
			</div>
		</>
	);
};
export default SignIn;