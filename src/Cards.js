import React from "react"
import Puce from './puce.png';
import MasterCard from "./mastercard.png"

const Card =(props) => {

    function name() {

        const { name } = props;
        if(name.length>20)
        {
            alert("Name must contain at most 20 character")
        }
        return name.slice(0,20);
    }
/******************************************************************************************/
    function number() {

        const { number } = props;
        
        let maxLength = 16
        let nextNumber = typeof number === 'number' ? number.toString() : number.replace(/[A-Za-z]| /g, '');
    
        if (nextNumber.length > maxLength) {
          nextNumber = nextNumber.slice(0, maxLength);
        }
    
        while (nextNumber.length < maxLength) {
          nextNumber += '•';
        }
        
        for (let i = 1; i < (maxLength / 4); i++) {
            const space_index = (i * 4) + (i - 1);
            nextNumber = `${nextNumber.slice(0, space_index)} ${nextNumber.slice(space_index)}`;
        }
        if(number.length>maxLength)
        {
            alert("Number card must contain 16 digits")
        }
        return nextNumber;
      }
    
    /************************************************************************************************/
    function expiry() {
        const { expiry } = props;
        const date = typeof props.expiry === 'number' ? expiry.toString() : expiry;
        let month = '';
        let year = '';
    
        if (date.includes('/')) {
          [month, year] = date.split('/');
        }
        else if (date.length) {
          month = date.substr(0, 2);
          year = date.substr(2, 6);
        }
        if(month>12)
        { alert("Month cannot exceed 31")}
    
        while (month.length < 2) {
          month += '•';
        }
    
        if (year.length > 2) {
          year = year.substr(2, 4);
        }
    
        while (year.length < 2) {
          year += '•';
        }
        
        return `${month}/${year}`;
      }

    return (
        <div className='credit-card'>
            <div class="bank-name">Company Name</div>
            <img className="card-puce" src={Puce} alt=""/>
            <div style={{textAlign:'initial'}}>
            {number()}</div>
            <div className="card-footer">
                <div className="name">{name()}</div>
                <div className="expiry">{expiry()}</div>
                <img className="card-logo" src={MasterCard} alt=""/>
            </div>
        </div>
    );
}
export default Card