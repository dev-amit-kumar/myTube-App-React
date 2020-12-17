import React from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

class Profile extends React.Component{

    componentDidMount = () => {
        this.checkLogin()
    }
    
    checkLogin = () => {
        if (!this.props.isLoggedIn){
            this.props.history.push('/')
        }
    }

    componentDidUpdate = () => {
        this.checkLogin()
    } 
    
    render(){
        // if (!this.props.isLoggedIn){
            // return <Redirect to={'/'} />
        // } this code is also correct,just commented it to perform it with render
        return (
            <div>
                <h1>User Profile</h1>
                <p>
                    <label>Name: </label>
                    <label>{this.props.profile.name}</label>
                </p>
                <p>
                    <label>Email: </label>
                    <label>{this.props.profile.email}</label>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        isLoggedIn: state.auth.ifAuthenticated
    }
}

export default connect(mapStateToProps)(Profile)