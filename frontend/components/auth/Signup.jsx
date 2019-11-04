//https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
//https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Formik,
} from 'formik';
import * as Yup from 'yup';
import AdminHeader from "./../Header.jsx";
import {requestSignUp} from "../../redux/actions/submit.js";

const styles = {};

function SignUp(props) {
  const dispatch = useDispatch();
  const {classes} = props;
  const isLogging = useSelector(state => state.logging); // from redux
  const isLogged = useSelector(state => state.isLogged); // from redux
  return (
    <>
      <AdminHeader/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}

          onSubmit={(values) => {
            dispatch(requestSignUp(values)); //запрос в редакс на вход
            // values.name = '';
            // values.password = '';
          }}

          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required('Name is required'),
            email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword:  Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (

              <form onSubmit={handleSubmit} style={{width: "50%"}}>
                <TextField
                  fullWidth
                  label="name"
                  name="name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.name && touched.name) && errors.name}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  error={errors.email && touched.email}
                  label="email"
                  name="email"
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.email && touched.email) && errors.password}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  error={errors.password && touched.password}
                  label="password"
                  name="password"
                  type="password"
                  className={classes.textField}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.password && touched.password) && errors.password}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  error={errors.confirmPassword && touched.confirmPassword}
                  label="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className={classes.textField}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.confirmPassword && touched.confirmPassword) && errors.confirmPassword}
                  margin="normal"
                />

                {/*<TextField*/}
                {/*label="comment"*/}
                {/*name="comment"*/}
                {/*className={classes.textField}*/}
                {/*value={values.comment}*/}
                {/*onChange={handleChange}*/}
                {/*onBlur={handleBlur}*/}
                {/*helperText={(errors.comment && touched.comment) && errors.comment}*/}
                {/*margin="normal"*/}
                {/*/>*/}

                <Button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isLogging}>
                  Reset
                </Button>
                <Button type="submit" disabled={isLogging || isLogged}>
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );

}

export default withStyles(styles)(SignUp);
