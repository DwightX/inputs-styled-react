import React from "react";
import { useState } from "react";
import { Label, Container, InputField,Title } from "./styles.js";

function Input({type, placeholder, label,title,color,disabled}) {
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
    </Container>
  );
}

export default Input;
