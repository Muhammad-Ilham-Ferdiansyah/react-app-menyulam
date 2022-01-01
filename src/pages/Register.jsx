import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.8)),
    url("https://res.cloudinary.com/dffrqml8w/image/upload/v1641050147/me.nyulam/2020-11-11_10.34.58_1_hdgjkh.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
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
    margin: 20px 10px 0 0;
    padding: 10px;
    border-radius: ${props=>props.border==="tumpul" && "10px"};
    border: 1px solid #bc6c25;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width:40%;
    border: none;
    flex: 2;
    padding: 15px 20px;
    background-color: #bc6c25;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="First Name" border="tumpul"/>
                    <Input placeholder="Last Name"  border="tumpul"/>
                    <Input placeholder="Username" border="tumpul"/>
                    <Input placeholder="Email" border="tumpul"/>
                    <Input placeholder="Password" border="tumpul"/>
                    <Input placeholder="Confirm Password" border="tumpul"/>
                    <Agreement>
                        By creating an account, I concent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
