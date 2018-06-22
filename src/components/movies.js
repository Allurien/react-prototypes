import React from 'react';

export default (props) =>{
    const {info} = props;
    return(
            <div className='movieBlock'>
                <img src={info['im:image'][2].label} />
                <h3>{info['im:name'].label}</h3>
                <p>{info.summary.label}</p>
            </div>
    )
}