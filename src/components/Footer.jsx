import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
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

const Logo = styled.h1``
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
    background-color: #${props=>props.color}
    display: flex;
    align-items: center;
    justify-content: center;
`


const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>me.nyulam</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum quos esse magnam voluptas eveniet assumenda nostrum aut temporibus voluptate in, veritatis nihil unde, nisi, ratione pariatur aliquid nulla similique laboriosam harum. Dolores minima corrupti, dolorem laborum, dolorum labore, similique dignissimos alias fugit assumenda illum laudantium fuga ea inventore excepturi natus qui officia beatae eligendi ex voluptatem veniam nulla? Quas repudiandae numquam totam quam quidem ex unde, tenetur inventore ratione iusto molestias quia maiores nisi soluta blanditiis laudantium consequatur magni consectetur voluptas iste nesciunt! Vel, illum. Exercitationem id eos minima et sit libero. Eos quos quam, officiis eligendi tempora aut!</Desc>
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
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
