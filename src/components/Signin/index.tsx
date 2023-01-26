import React from "react";
import { Formik, ErrorMessage } from "formik";
import { signinSchema } from "../../utils/libs/Yup/signin.schema";
import { signinInitialValues } from "../../utils/data/constants";

export const Signin = () => {
  return (
    <Formik
      initialValues={ signinInitialValues }
      validationSchema={ signinSchema }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="login__email-input">
            Email Address
            <input
              id="login__email-input"
              type="email"
              {...formik.getFieldProps("email")}
            />
          </label>
          <ErrorMessage name="email" />

          <label htmlFor="login__password-input">
            Password
            <input
              id="login__password-input"
              type="password"
              {...formik.getFieldProps("password")}
            />
          </label>
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
