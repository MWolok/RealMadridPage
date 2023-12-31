import { Fade } from "react-awesome-reveal";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showErrorToast } from "../../../Components/Toast";
import { showSuccessToast } from "../../../Components/Toast";

const Email = () => {
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: { email: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email")
				.required("The email is required"),
		}),
		onSubmit: (values) => {
			///
			setLoading(true);
			//// submit form
		},
	});

	return (
		<Fade>
			<div className="enroll_wrapper">
				<form onSubmit={formik.handleSubmit}>
					<div className="enroll_title">Enter your email</div>
					<div className="enroll_input">
						<input
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							placeholder="Enter your email"
						/>

						{formik.touched.email && formik.errors.email ? (
							<div className="error_label">{formik.errors.email}</div>
						) : null}

						{loading ? (
							<CircularProgress color="secondary" className="progress" />
						) : (
							<button type="submit">Submit</button>
						)}

						<div className="enroll_discl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</form>
			</div>
		</Fade>
	);
};

export default Email;
