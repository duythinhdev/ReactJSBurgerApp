
import React, { Component } from  'react';
import  Button from '../../../Component/UI/Button/Button';
import Spinner from  '../../../Component/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from  '../../../Component/UI/Input/Input';
class ContactData extends Component{

    state = {
        orderForm: {
            
        }
        loading:false
    }

    orderHandler = (event) =>{
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState({ loading: false});
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState({ loading: false });
            } );
    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your name" />
                <Input inputtype="input" type="email" name="email" placeholder="Your email" />
                <Input inputtype="input" type="text" name="street" placeholder="Street" />
                <Input inputtype ="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>OrDer</Button>
            </form>
        );
        if(this.state.loading)
        {
            form = <Spinner />;
        }
        return(
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
export default ContactData;