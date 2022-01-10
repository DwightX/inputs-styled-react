import styled from "styled-components";

const handleColorType = color => {
    switch (color) {
      case "error":
        return "border: 1px solid red ; [type=Text]&:focus {border: 1px solid red} ; &:hover {border: 1px solid black} ; color:red";
      default:
        return "border: 1px solid #828282 ; [type=Text]&:focus {border: 1px solid red} ; &:hover {border: 1px solid black} ";
    }
  };

  const handleColorText = textColor => {
    switch (textColor) {
      case "errorText":
        return "color:red";
      default:
        return "color:#333333";
    }
  };

const InputField = styled.input`
width: 200px;
height: 56px;
border-radius: 8px;
box-sizing: border-box;
${({ color }) => handleColorType(color)};
&:disabled {background-color: #F2F2F2; border: none}
`
const Label = styled.label`
font-size: 12px;
color: #333333;
position: relative;
margin-bottom:6px;
`
const Helper = styled.label`
font-size: 12px;
${({ textColor }) => handleColorText(textColor)};
position: relative;
margin-top:6px;
`

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: left;
`
const Title = styled.h1`
font-size: 12px;
color: #333333;
position: relative;
margin-bottom:12px;
`

export {Label,InputField,Container,Title,Helper}