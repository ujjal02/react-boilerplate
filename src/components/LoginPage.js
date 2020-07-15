import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
    <div className="landing">
        <div className="landing-left">
            <h1 className="site-title">Boilerplate</h1>
            <p className="site-description">Tag line for app</p>
            <div className="button">
                <button className="btn" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
        <img className="cover-image" src="/images/Login.gif" />
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)