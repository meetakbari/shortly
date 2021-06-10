import React from 'react'
import styled from 'styled-components';
import WorkingHumanIcon from '../assets/images/illustration-working.svg'

const Container = styled.div`
    /* border: 1px solid red; */
    position: relative;
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    max-width: 100vw;
    justify-content: flex-end;
    overflow: hidden;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const LeftContainer = styled.div`
    /* border: 2px solid black; */
    width: 50vw;
    height: 55vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-right: 10vw;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        width: 100vw;
        margin: 10px;
        align-items: center;
    }
`;

const Title = styled.div`
    font-size: 96px;
    font-weight: bolder;
    line-height: 110%;
    margin-bottom: 10px;
    flex-wrap: wrap;
    @media only screen and (min-width: ${props => props.theme.breakpoints.mobile.minValue}) and (max-width: ${props => props.theme.breakpoints.mobile.maxValue}){
        font-size: 48px;
        text-align: center;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet.minValue}) and (max-width: ${props => props.theme.breakpoints.tablet.maxValue}){
        font-size: 64px;
        text-align: center;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.laptop.minValue}) and (max-width: ${props => props.theme.breakpoints.laptop.maxValue}){
        font-size: 68px;
        width: 80%;
        text-align: center;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.desktop.minValue}) and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        font-size: 74px;
        text-align: center;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.tv.minValue}){
        font-size: 82px;
    }
`;  

const Tagline = styled.div`
    width: 90%;
    font-size: 28px;
    font-weight: 500;
    color: ${props => props.theme.colors.grey};
    line-height: 120%;
    word-spacing: 3px;
    flex-wrap: wrap;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        font-size: 24px;
        width: 80%;
        text-align: center;
    }
    @media only screen and (max-width: ${props => props.theme.breakpoints.laptop.maxValue}){
        font-size: 20px;
        width: 85%;
        text-align: center;
    }
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet.maxValue}){
        font-size: 18px;
        text-align: center;
    }
    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile.maxValue}){
        font-size: 16px;
        text-align: center;
    }
`;

const Button = styled.button`
    background-color: ${props => props.theme.colors.cyan};
    opacity: 0.8;
    color: ${props => props.theme.colors.white};;
    padding: 20px 30px;
    border-radius: 40px;
    font-weight: bolder;
    font-size: 24px;
    width: 30%;
    border: none;
    margin: 30px 0px;
    &:hover, &:focus{
        opacity: 1;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.tv.minValue}) and (max-width: 1400px){
        width: 40%;
    }
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        width: 30%;
        font-size: 22px;
    }
    @media only screen and (max-width: ${props => props.theme.breakpoints.tablet.maxValue}){
        width: 40%;
        font-size: 20px;
    }
    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile.maxValue}){
        width: 50%;
        font-size: 18px;
    }
    
`;

const RightContainer = styled.div`
    /* border: 2px solid black; */
    width: 40vw;
    max-width: 100vw;
    height: 55vh;
    flex-direction: row-reverse;
    margin-right: -8vw;
    @media only screen and (min-width: ${props => props.theme.breakpoints.mobile.minValue}) and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        width: 100vw;
        height: fit-content;
        margin-right: -7vw;
        overflow: hidden;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    @media only screen and (min-width: ${props => props.theme.breakpoints.mobile.minValue}) and (max-width: ${props => props.theme.breakpoints.mobile.maxValue}){
        width: 140%;
        height: 140%;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.tablet.minValue}) and (max-width: ${props => props.theme.breakpoints.tablet.maxValue}){
        width: 120%;
        height: 120%;
    }
    @media only screen and (min-width: ${props => props.theme.breakpoints.laptop.minValue}) and (max-width: ${props => props.theme.breakpoints.laptop.maxValue}){
        width: 110%;
        height: 110%;
    }
`;

// This component consists of Get Started Section and Working Man SVG Image
export default function Introduction(){
    return (
        <div>
            <Container>
                <LeftContainer>
                    <Title> More than just shorter links </Title>
                    <Tagline> Build your brand's recognition and get detailed insights on how your links are performing. </Tagline>
                    <Button> Get Started </Button>
                </LeftContainer>
                <RightContainer>
                    <Image src={WorkingHumanIcon} alt="Shorten your URL" />
                </RightContainer>
            </Container>
        </div>
    )
}