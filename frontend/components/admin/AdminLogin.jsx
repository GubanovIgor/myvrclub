//https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
//https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c
import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
// import { DisplayFormikState } from './formikHelper';
import {API_PREFIX} from '../../services/consts/consts.js'
import AdminHeader from "./AdminHeader.jsx";
import {requestLogin} from "../../redux/actions.js";
import { useSelector, useDispatch } from 'react-redux'

const styles = {};

function AdminLogin(props) {
    //const logging = useSelector(state => state.logging);
    const dispatch = useDispatch();
    const {classes} = props;
    const isLogging = props.logging;
    //const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);
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
                    initialValues={{password: '', login: '', comment: ''}}
                    onSubmit={(values, {setSubmitting}) => {

                        // axios.post(contactFormEndpoint, values,
                        //     {
                        //         headers: {
                        //             'Content-Type': 'application/json',
                        //         }
                        //     },
                        // ).then((resp) => {
                        //         setSubmitionCompleted(true);
                        //         console.log(resp)
                        //         //console.log(setSubmitionCompleted)
                        //     }
                        // );
                        dispatch(requestLogin(values));
                        //setSubmitting(false);
                        //setSubmitionCompleted(true);
                    }}

                    validationSchema={Yup.object().shape({
                        password: Yup.string()
                        //.email()
                            .required('Required'),
                        login: Yup.string()
                            .required('Required'),
                        // comment: Yup.string()
                        //     .required('Required'),
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
                                    label="login"
                                    name="login"
                                    className={classes.textField}
                                    value={values.login}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.login && touched.login) && errors.login}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    error={errors.password && touched.password}
                                    label="password"
                                    name="password"
                                    className={classes.textField}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.password && touched.password) && errors.password}
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
                                    disabled={!dirty || isLogging}
                                >
                                    Reset
                                </Button>
                                <Button type="submit" disabled={isLogging}>
                                    Submit
                                </Button>
                                {/* <DisplayFormikState {...props} /> */}

                            </form>
                        );
                    }}
                </Formik>
            </div>
        </>
    );

}

export default withStyles(styles)(AdminLogin);
