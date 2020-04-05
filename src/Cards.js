import React from "react"
import puce from './puce.png';

const Card =(props) => {
    return (
        <div className='credit-card'>
            <div class="bank-name">Company Name</div>
            <img src={puce}/>
            <div>{props.number}xxx</div>
            <div>{props.name}xxx</div>
            <div>{props.expiry}xxx</div>
        </div>
    );
}
export default Card