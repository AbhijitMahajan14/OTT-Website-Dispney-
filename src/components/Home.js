import React from 'react'
import styled from 'styled-components'
import ImgSlider from './imgSlider.js';
function Home() {
    return (
        <Container>
          <ImgSlider />
        </Container>
    )
}

export default Home
// main tells to the google this is main content 
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;

    &:before{
        background:url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }  
`