import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-family: 'Oooh Baby', cursive !important;
    letter-spacing: 3px;
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;    
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>me.nyulam</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum quos esse magnam voluptas eveniet assumenda nostrum aut temporibus voluptate in, veritatis nihil unde, nisi, ratione pariatur aliquid nulla similique!</Desc>
                <SocialContainer>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="02BF3A">
                        <WhatsApp/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Embroidered Totebag</ListItem>
                    <ListItem>Embroidered Mask</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <Room style={{ marginRight:"10px" }}/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight:"10px" }} />
                    088663739
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight:"10px" }}/>
                    menyulam@gmail.com
                </ContactItem>
                <Payment/>
            </Right>
        </Container>
    )
}

export default Footer
