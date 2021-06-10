import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../assets/images/logo.svg'
import MenuIcon from '../assets/images/menu.svg'

const NavBar = styled.div`
    background-color: white;
    height: 100px;
    min-height: fit-content;
    max-width: 100vw;
    padding: 10px 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        padding: 10px 30px 10px 20px;
        height: 70px;
    }
`;

const Left = styled.div`
    /* border: 2px solid black; */
    width: 40vw;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const Right = styled.div`
    /* border: 2px solid black; */
    width: 40vw;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
`;

const Logo = styled.img`

`;

const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        display: none;
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.grey};
    padding: 0px 20px;
    font-weight: ${props => props.theme.fontWeights.bolder};
    font-size: 18px;
    &:hover, &:focus{
        color: black;
    }
`;

const SignUpButton = styled.button`
    background-color: ${props => props.theme.colors.cyan};
    opacity: 0.8;
    color: ${props => props.theme.colors.white};;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: ${props => props.theme.fontWeights.bolder};
    font-size: 18px;
    border: none;
    margin-left: 15px;
    &:hover, &:focus{
        opacity: 1;
    }
`;

const MenuBarButton = styled.button`
    height: 32px;
    width: 32px;
    display: none;
    border: none;
    outline: none;
    background: none;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        display: block;
        padding-bottom: 40px;
    }
`;

const Image = styled.img`
    height: 32px;
    width: 32px;
    position: relative;
    display: none;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        display: block;
    }
`;

const DropDownMenu = styled.div`
    flex: 1;
    margin-top: 420px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 20px;
    background-color: ${props => props.theme.colors.darkViolet};
    border-radius: 15px;
    height: fit-content;
    position: absolute;
    display: none;
    z-index: 1;
    width: 80vw;
    @media only screen and (max-width: ${props => props.theme.breakpoints.desktop.maxValue}){
        display: none;
    }
`;

const DropDownMenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DropDownLink = styled.a`
    text-decoration: none;
    text-align: center;
    color: ${props => props.theme.colors.white};
    opacity: 0.9;
    padding: 15px 0px;
    font-weight: ${props => props.theme.fontWeights.bolder};
    &:hover, &:focus{
        opacity: 1;
        outline: none;
    }
`;

const DropDownSignUpButton = styled.button`
    background-color: ${props => props.theme.colors.cyan};
    opacity: 0.9;
    color: ${props => props.theme.colors.white};
    width: auto;
    margin: 10px;
    padding: 10px 25vw;
    border-radius: 25px;
    font-weight: ${props => props.theme.fontWeights.bolder};
    font-size: ${props => props.theme.fontSizes.md};
    border: none;
    &:hover{
        opacity: 1;
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 55vw;
    margin: 5px 0px;
    border-top: 0.5px solid ${props => props.theme.colors.white};
`;

function ShowMenuBar() {
    let x = document.getElementById("drop-down");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Header Components with HamBurger Menu
export default function Header() {
    return (
        <div>
            <NavBar>
                <Left>
                    <Logo src={LogoIcon} alt="logo" />
                    <NavLinks>
                        <NavLink className="nav-link" href="#">Features</NavLink>
                        <NavLink className="nav-link" href="#">Pricing</NavLink>
                        <NavLink className="nav-link" href="#">Resources</NavLink>
                    </NavLinks>
                </Left>
                <Right>
                    <NavLinks>
                        <NavLink className="nav-link" href="#">Login</NavLink>
                        <SignUpButton className="nav-link" href="#">Sign Up</SignUpButton>
                    </NavLinks>
                    <MenuBarButton className="drop-down-button" onClick={ShowMenuBar}> <Image src={MenuIcon} alt="hamburger" /> </MenuBarButton>
                </Right>
                <DropDownMenu id="drop-down">
                    <DropDownMenuLinks className="drop-down-content">
                        <DropDownLink onClick={ShowMenuBar} className="drop-down-nav-link" href="#">Features</DropDownLink>
                        <DropDownLink onClick={ShowMenuBar} className="drop-down-nav-link" href="#">Pricing</DropDownLink>
                        <DropDownLink onClick={ShowMenuBar} className="drop-down-nav-link" href="#">Resources</DropDownLink>
                        <Divider></Divider>
                        <DropDownLink onClick={ShowMenuBar} className="drop-down-nav-link" href="#">Login</DropDownLink>
                        <DropDownSignUpButton onClick={ShowMenuBar} className="drop-down-nav-link" href="#">Sign Up</DropDownSignUpButton>
                    </DropDownMenuLinks>
                </DropDownMenu>
            </NavBar>
        </div>
    )
}