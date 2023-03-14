import React,{useState} from 'react'
const TogglePassword = () => {
    const [visible,setVisiblity] = useState<boolean>(false);

    const Icon = (
        <i className={visible ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'} onClick={() => setVisiblity(visiblity => !visiblity)}/>
    );
    
   //const  passwordType = visible ? "text" : "password" ;

    return [visible ,Icon];
  
};

export default TogglePassword
 