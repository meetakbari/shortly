import React from 'react'
import styled from 'styled-components';

// Formula used for responsive font size
// font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    margin: 10px 0px;
`;

const OriginalLink = styled.span`
    color: ${props => props.theme.colors.black};
    font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 300)));
    width: 60%;
    margin: 20px 10px 20px 30px;
`;

const ShortenLink = styled.span`
    color: ${props => props.theme.colors.cyan};
    font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 300)));
    width: 20%;
    margin: 20px 10px;
`;
const CopyButton = styled.button`
    background-color: ${props => props.theme.colors.cyan};
    color: ${props => props.theme.colors.white};
    padding: 12px 30px;
    text-align: center;
    margin: 20px 30px 20px 5px;
    border-radius: 10px;
    font-weight: bolder;
    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1920 - 300)));
    width: calc(45px + (110 - 45) * ((100vw - 320px) / (1920 - 300)));
    border: none;
    &:hover{
        background-color: ${props => props.theme.colors.darkViolet};
    }
`;
export default function GeneratedLink({ originalLink, shortenLink}){
    return (
        <div>
            <Container>
                <OriginalLink>{originalLink}</OriginalLink>
                <ShortenLink>{shortenLink}</ShortenLink>
                <CopyButton>Copy</CopyButton>
            </Container>
        </div>
    )
}