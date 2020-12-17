import '../css/layout.css'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import React from 'react'
import { AUTH_ACTION, PROFILE_ACTION} from '../actions'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import googleConfig from '../config/google-config.json'

class Layout extends React.Component {

    componentDidMount = () =>{
        const user = JSON.parse(localStorage.getItem("user"))
        if (user){
            this.props.dispatch({
                type: AUTH_ACTION.LOGIN,
                payload: user.token
            })
            this.props.dispatch({
                type: PROFILE_ACTION.SET,
                payload: user.userData
            })
        }
    }

    googleCallBack = (response) => {
        console.log(response)
        if(!response || !response.accessToken){
            console.log("Sorry, Login")
            return
        }
        const user = {
            token: response.accessToken,
            userData: response.profileObj
        }
        localStorage.setItem("user",JSON.stringify(user));
        this.props.dispatch({
            type: AUTH_ACTION.LOGIN,
            payload: user.token
        })
        this.props.dispatch({
            type: PROFILE_ACTION.SET,
            payload: user.userData
        })
    }

    logout = () =>{
        localStorage.removeItem('user')
        this.props.dispatch({
            type: AUTH_ACTION.LOGOUT
        })
        this.props.dispatch({
            type: PROFILE_ACTION.RESET
        })
    }

    render(){
        return(
            <>
                <div className="topnav">
                    <Link className={'active'} to={'/'}>Videos</Link>
                    <div className="floatRight">
                        {
                            this.props.auth.isAuthenticated &&
                            <>
                            <Link to={'/profile'}>{this.props.profileName}</Link>
                            <GoogleLogout
                            clientId = {googleConfig.clientId}
                            buttonText = "Logout"
                            onLogoutSuccess = {this.logout}
                            />
                            </>
                        }
                        {
                            !this.props.auth.isAuthenticated &&
                            <GoogleLogin
                            clientId={googleConfig.clientId}
                            onSuccess={this.googleCallBack}
                            onFailure={this.googleCallBack}
                            buttonText="Login"
                            cookiePolicy={'single_host_origin'}
                            />
                        }
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        auth: state.auth,
        profileName: state.profile.name
    }
}

export default connect(mapStateToProps)(Layout)