import React, { Component } from "react";
    import  { connect } from 'react-redux';

import Input from '../../Component/UI/Input/Input';
import Button from '../../Component/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../Component/UI/Spinner/Spinner';
import  { Redirect } from  'react-router-dom';
import { updateObject, checkValidity  } from "../../shared/utility";

class Auth extends  Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup:true
    }

    componentDidMount() {
        if(!this.props.buildingBurger && this.props.authRedirecPath !== '/')
        {
            this.props.onAuthRedirectPath();
        }
    }



    inputchangedHandler = ( event, controlName ) => {
        const updatedControls = updateObject( this.state.controls, {
            [controlName]: updateObject( this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            } )
        } );
        // console.log(event.target.value)
        // console.log(updatedControls)
        this.setState( { controls: updatedControls } );
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignup)
    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.controls)
        {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form  = formElementsArray.map(formelement => (
            <Input
                key={formelement.id}
                elementType={formelement.config.elementType}
                elementConfig={formelement.config.elementConfig}
                value={formelement.config.value}
                invalid={!formelement.config.valid}
                shouldValidate={formelement.config.validation}
                touced={formelement.config.touched}
                changed={(event) =>this.inputchangedHandler(event,formelement.id)} />
        ))

        if(this.props.loading)
        {
            form = <Spinner />;
        }
        let errorMessage = null;

        if(this.props.error)
        {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        let authRedirect = null;
        if ( this.props.isAuthenticated ) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className="Auth">
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button ư btnType="Success">SUBMIT</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password,isSignup)),
      onAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))

    };

}
export  default connect(mapStateToProps,mapDispatchToProps) (Auth);