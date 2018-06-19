import React, {Component} from 'react';
import ContactCard from './contact_card';

export default props => {
    return (
        <div className='col-8'>
            <div className="row">{props.contacts.map((item, index)=>{
                return(
                    <ContactCard key={index} contact={item}/>
                )})}
            </div>
        </div>
    )
}