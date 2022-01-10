import React from "react";
import { useState } from "react";
import { Label, Container, InputField,Title,Helper } from "./styles.js";

function Input({type, placeholder, label,title,color,disabled,helper,}) {
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Container>
        <Title>{title}</Title>
      <Label>{label}</Label>
      <InputField
        id="inputID"
        type={type}
        value={name}
        placeholder={placeholder}
        onChange={onChange}
        color={color}
        disabled={disabled}
      />
      <Helper color={color}>{helper}</Helper>
    </Container>
  );
}

export default Input;
