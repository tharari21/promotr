import {useRef, useState} from 'react'
import { Navigate } from "react-router";
import { BACKEND_URL } from "../../globaldata";
import {
  FormContainer,
  Form,
  Input,
  SubmitBtn,
  FormWrapper,
  ImgContainer,
  Img,
  InputWrapper,
  Label,
  Header,
} from "./AuthElements";
import ClubImage from "../../images/club-2.jpg"
const AuthForm = ({type}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const url = `${BACKEND_URL}/${type}`;
    const form = useRef()
    const handleSubmit = async (e) => {
      e.preventDefault()
      const data = new FormData(form.current)
      try{
        const req = await fetch(url, {
          method: "POST",
          credentials: "include", // Tells the request to include httpOnly cookie
          body: data,
        });
        const res = await req.json()
        if (req.ok) {
          setIsLoggedIn(true)
        }
        console.log(res)

      } catch (err) {
        console.log(err)
      }
    } 
  return (
    <>
      <FormWrapper>
        <ImgContainer>
          <Img src={ClubImage} />
        </ImgContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit} ref={form}>
            <Header>{type.charAt(0).toUpperCase() + type.slice(1)}</Header>
            <InputWrapper>
              <Label>Username</Label>
              <Input name="username" type="text" />
            </InputWrapper>
            {type === "signup" && (
              <InputWrapper>
                <Label>Email</Label>
                <Input name="email" type="email" />
              </InputWrapper>
            )}
            <InputWrapper>
              <Label>Password</Label>
              <Input name="password" type="password" />
            </InputWrapper>
            <SubmitBtn type="submit" />
          </Form>
        </FormContainer>
      </FormWrapper>
      {isLoggedIn && <Navigate replace to="/"/>}
    </>
  );
}

export default AuthForm;