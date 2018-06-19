import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                street: '',
                city: '',
                state: '',
                zipCode: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(event){
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.add(this.state.form);
        this.reset();
    }
    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                street: '',
                city: '',
                state: '',
                zipCode: ''
            }
        })
    }

    render(){
        const{firstName, lastName, phone, email, street, city, state, zipCode} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name='firstName' label='First Name' type='text' value={firstName} onChange={this.handleInputChange}/>
                <Field name='lastName' label='Last Name' type='text' value={lastName} onChange={this.handleInputChange} />
                <Field name='phone' label='Phone Number' type='tel' value={phone} onChange={this.handleInputChange} />  
                <Field name='email' label='Email' type='email' value={email} onChange={this.handleInputChange} />
                <Field name='street' label='Street Address' type='text' value={street} onChange={this.handleInputChange} />
                <Field name='city' label='City' type='text' value={city} onChange={this.handleInputChange} />
                <Field name='state' label='State' type='text' value={state} onChange={this.handleInputChange} />
                <Field name='zipCode' label='Zip Code' type='text' value={zipCode} onChange={this.handleInputChange} />
                <button type= 'button' className='btn btn-outline-primary mx-3'>Add Contact</button>
                <button className='btn btn-outline-warning' type= 'button' onClick={this.reset}>Reset Form</button>
            </form>
        )
    }
}
export default ContactForm;