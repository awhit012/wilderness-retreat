import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EmailForm = ({status, message, onValidated}) => {
  let email;
  const submit = () => {
    let emailValue = email.lastElementChild.firstElementChild.value;
    emailValue &&
    emailValue.indexOf("@") > -1 && 
    onValidated({
      EMAIL: emailValue
    });
  }
   
  
  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
      {status === "success" && <div style={{ color: "green" }}>Success!</div>}
      <TextField 
        type="email"
        id="standard-basic" 
        label="Enter Your Email to Receive" 
        placeholder="Your email"
        ref={node => (email = node)}
      />
      <Button 
        className="button"
        size="small"
        variant="outlined" 
        color="primary"
        onClick={submit}>
        Get it!
      </Button>

    </div>
  )
}

export default EmailForm;
