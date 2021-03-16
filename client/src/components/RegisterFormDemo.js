import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import FormattedMessage from "./FormattedMessage";
import FormLabel from "./FormLabel";

function RegisterFormDemo() {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    // alert("Submitted");
    console.log('data:', data);
  }; // your form submit function which will invoke after successful validation
  const getPassPhraseError = () => {
    if (errors.passphrase.type === "Required") {
      return "Required Field";
    } else if (errors.passphrase.type === "Validate") {
      return "Password must contain at least 8 letters one number and a special character (i.e !)";
    } else {
      return "Failed";
    }
  };
  console.log(watch("example")); // you can watch individual input by pass the name of the input
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register User</h1>
      <FormLabel>UserName</FormLabel>
      <input name="UserName" placeholder="Enter UserName" ref={register} />
      <FormLabel>Password</FormLabel>
      {errors.passphrase && (
        <FormattedMessage noBackground type='red'>{getPassPhraseError()}</FormattedMessage>
      )}
      <input
        type="password"
        name="Password"
        placeholder="Password must contain at least 8 letters one number and a special character (i.e !)"
        minlength="8"
        pattern="(?=.*?[#?!@$%^&*-\]\[])"
        ref={register({
          required: true,
          validate: (val) =>
            val.split(" ").filter((word) => word.length >= 8)
        })}
      />
        <FormLabel>Email</FormLabel>
      <input type="text" email="Email" placeholder="Enter Email" ref={register} />
      {/* {errors.passphrase && (
        <span style={{ color: "red" }}>{getPassPhraseError()}</span>
      )} */}

      <>
      <Button primary>Register</Button>
      </>
    </Form>
  );
}
export default RegisterFormDemo