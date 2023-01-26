import React from "react";
import { Formik, ErrorMessage } from "formik";

import { signupInitialValues } from "../../utils/data/constants";
import { signupSchema } from "../../utils/libs/Yup/signup.schema";
import { signinSchema } from "../../utils/libs/Yup/signin.schema";

export const Signup = () => {
  return (
    <Formik
      initialValues={ signupInitialValues }
      validationSchema={{ ...signinSchema, ...signupSchema }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="register__email-input">
            Email
            <input
              id="register__email-input"
              type="email"
              {...formik.getFieldProps("email")}
            />
          </label>
          <ErrorMessage name="email" />

          <label htmlFor="register__firstName-input">
            First Name
            <input
              id="register__firstName-input"
              type="text"
              {...formik.getFieldProps("firstName")}
            />
          </label>
          <ErrorMessage name="email" />

          <label htmlFor="register__lastName-input">
            Last Name
            <input
              id="register__lastName-input"
              type="text"
              {...formik.getFieldProps("lastName")}
            />
          </label>
          <ErrorMessage name="lastName" />

          <label htmlFor="register__password-input">
            Password
            <input
              id="register__password-input"
              type="password"
              {...formik.getFieldProps("password")}
            />
          </label>
          <ErrorMessage name="password" />

          <label htmlFor="register__passwordConfirmation-input">
            Confirm Password
            <input
              id="register__confirmPassword-input"
              type="password"
              {...formik.getFieldProps("passwordConfirmation")}
            />
          </label>
          <ErrorMessage name="passwordConfirmation" />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
