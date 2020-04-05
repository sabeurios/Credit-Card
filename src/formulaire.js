import React from "react"

function Formulaire (){
    const[number,SetNumber]=useState("")
    const[name,SetName]=useState("")
    const[expiry,SetExpiry]=useState("")
return(
<div>   <input
            type="password"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={evt=>SetNumber(evt.target.value)}>
        </input>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={evt=>SetName(evt.target.value)}>
        </input>
        <input
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={evt=>SetExpiry(evt.target.value)}>
        </input>
</div> 
);
}
export default Formulaire