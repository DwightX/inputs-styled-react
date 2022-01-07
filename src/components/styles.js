import styled from "styled-components";


const InputField = styled.input`
width: 200px;
height: 56px;
border-radius: 8px;
box-sizing: border-box;
border: 1px solid #828282;
`
const Label = styled.label`
font-size: 12px;
color: #333333;
position: relative;
margin-bottom:6px;
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

export {Label,InputField,Container,Title}