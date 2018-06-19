import React from 'react';

export default props => {
    // console.log(props);
    return (
        <div className="form-group">
            <label className ='sr-only' >{props.label}</label>
            <input name={props.name} label={props.label} type={props.type} value={props.value} onChange={props.onChange} className='form-control' placeholder={props.label} required />
        </div>
    )
}

