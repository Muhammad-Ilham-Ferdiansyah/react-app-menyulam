import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #745A48;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super deal! Free Shipping on orders over Rp. 100.000,-
        </Container>
    )
}

export default Announcement
