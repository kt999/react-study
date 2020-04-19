import React,{useState} from 'react';


const Test = () => {

    const [email,setEmail] = useState(null);

    const onChange = (e) => {

        let value = e.target.value;

        if(value.length < 10){
            setEmail(value);
        }
    };

    return (
        <div>

            <input type="text" placeholder="email" onChange={onChange}/>

            <div>{email}</div>

        </div>
    );
};


export default Test;