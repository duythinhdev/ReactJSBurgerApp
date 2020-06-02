import React,{Component} from "react";

import Modal from '../../Component/UI/Modal/Modal'
import Aux from "../Aux1/Aux1";

const withErrorHandler = ( WrappedComponent , axios) =>{
    return class extends Component{

        state = {
            error:null
        }
        componentWillMount() {
            this.reqInteceptor = axios.interceptors.request.use(req =>{
                this.setState({error:null})
                return req;
            })
            this.resInteceptor =  axios.interceptors.response.use(res => res,error => {
                this.setState({error:error});
            });
        }
        errorConfirmedHandler = () =>{
            this.setState({error:null})
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInteceptor);
            axios.interceptors.response.eject(this.resInteceptor);

        }

        render() {
            return (
                <Aux>
                <Modal show={this.state.error} modalClosed ={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}  />
            </Aux>
            )
        }
    }

}

export default withErrorHandler;