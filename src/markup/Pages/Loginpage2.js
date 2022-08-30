import axios from 'axios';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  loadingToggleAction,
  loginAction,
} from '../../store/actions/AuthActions';

// image
//import logo from "../../images/logo-full-white.png";
import logo2 from './../../images/logo-white2.png';
import Header from './../Layout/Header';
import PageTitle from './../Layout/PageTitle';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let errorsObj = { email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const dispatch = useDispatch();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if(props.userRoles !== 'ROLE_MODERATOR'|| props.userRoles !== 'ROLE_ADMIN') {
      errorObj.email = 'You are not authorized to login';
    }
    
    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
    }
    if (password === '') {
      errorObj.password = 'Password is Required';
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, password, props.history));
  }

  return(
		<div className="page-content bg-gray login-form-bx browse-job login-style2">
			<div className="section-full">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6 col-md-7 box-skew d-flex">
							<div className="login-2 p-a30 seth d-flex align-self-center m-auto wow fadeInRight" data-wow-delay="0.8s" >
								<div className="tab-content nav">
									<form id="login"  onSubmit={onLogin} className="tab-pane active col-12 p-a0 ">
										<p className="font-weight-600 text-center">ADMIN DASHBOARD</p>
                    {props.errorMessage && (
                        <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                          {props.errorMessage}
                        </div>
                      )}
                      {props.successMessage && (
                        <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                          {props.successMessage}
                        </div>
                      )}
										<div className="form-group">
											<label>E-Mail Address*</label>
                      <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Type Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <div className="text-danger fs-12">
                              {errors.email}
                            </div>
                          )}
                        </div>
										</div>
                    <div className="form-group">
                        <label>Password *</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            placeholder="Type Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && (
                            <div className="text-danger fs-12">
                              {errors.password}
                            </div>
                          )}
                        </div>
                      </div>
										<div className="text-left">
											<button className="site-button">login</button>
											<Link data-toggle="tab" to="#forgot-password" className="site-button-link forget-pass pull-right m-t15"><i className="fa fa-unlock-alt"></i> Forgot Password</Link> 
										</div>
									</form>
									<form id="forgot-password" className="tab-pane fade col-12 p-a0">
										<p>We will send you an email to reset your password. </p>
										<div className="form-group">
											<label>E-Mail address *</label>
											<div className="input-group">
												<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
											</div>
										</div>
										<div className="text-left"> 
											<Link className="site-button outline gray" data-toggle="tab" to="#login">Back</Link>
											<button className="site-button pull-right">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-5 d-flex box-skew1">
							<div className="text-white max-w400 align-self-center">
								<div className="logo">
									<Link to={"./"}><img src={require("./../../images/logo-white2.png")} alt="" /></Link>
								</div>
								<h2 className="m-b10"></h2>
								<p className="m-b30"></p>
								
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<footer className="login-footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(Login);
