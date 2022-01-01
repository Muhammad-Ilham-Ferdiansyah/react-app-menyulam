import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.8)),
    url("https://res.cloudinary.com/dffrqml8w/image/upload/v1641052003/me.nyulam/2020-10-21_11.59.45_2_ha6txk.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin: 20px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    border-radius: ${props=>props.border==="tumpul" && "10px"};
    border: 1px solid #bc6c25;
`
const Button = styled.button`
    width:100%;
    border: none;
    padding: 15px 20px;
    background-color: #bc6c25;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

const Link = styled.a`
    margin: 10px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input placeholder="Email" border="tumpul"/>
                    <Input placeholder="Password"  border="tumpul"/>
                    <Button>LOGIN</Button>
                    <Link>Forgot Password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
