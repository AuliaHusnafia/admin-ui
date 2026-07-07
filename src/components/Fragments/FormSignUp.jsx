import React from "react";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

function FormSignUp({ onSubmit }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            if (onSubmit) {
              await onSubmit(values.name, values.email, values.password);
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-6">
              <Field name="name">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Name"
                    type="text"
                    id="signup-name"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                )}
              </Field>
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-6">
              <Field name="email">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Email Address"
                    type="email"
                    id="signup-email"
                    placeholder="hello@example.com"
                    autoComplete="email"
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-6">
              <Field name="password">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Password"
                    type="password"
                    id="signup-password"
                    placeholder="••••••••••••"
                    autoComplete="new-password"
                  />
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <Button type="submit" variant="primary">
              {isSubmitting ? "Loading..." : "Register"}
            </Button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">or sign up with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <Button type="button" variant="secondary" onClick={() => console.log("Google sign up")}>
              <span className="flex items-center justify-center gap-3">
                <GoogleIcon />
                Continue with Google
              </span>
            </Button>

            <p className="text-center mt-4 text-sm text-gray-01">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign In Here
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSignUp;