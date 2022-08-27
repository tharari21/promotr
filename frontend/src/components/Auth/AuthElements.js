import styled from "styled-components";
export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #2a2b2a;
  display: flex;
`;
export const ImgContainer = styled.div`
    width: 55%;
    height: 100%;
    @media screen and (max-width: 1200px) {
        display: none;
        
    }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`
export const Header = styled.h1`
    text-align: center;
`
export const FormContainer = styled.div`
    margin: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #f8f4e3;
  border-radius: 40px;
  border: 2px solid black;
  padding: 70px 92px 70px 92px;
`;
export const InputWrapper = styled.div`
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    
`
export const Input = styled.input`
  padding: 0.5em;
  width: 300px;
  height: 42px;
  font-size: 1.2em;
  color: ${(props) => props.inputColor || "#92BCEA"};
  background: #171a21;
  border: none;
  border-radius: 3px;
`;
export const Label = styled.label`
color: #111;
    margin: 0 0 5px 10px;
    font-size: 1.7em;
`;
export const SubmitBtn = styled.input`
  margin-top: 21px;
  cursor: pointer;
  background: #171a21;
  color: #f8f4e3;
  border-radius: 40px;
  height: 45px;
`;