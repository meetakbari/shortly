import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import BgShortenDesktop from '../assets/images/bg-shorten-desktop.svg'
// import BgShortenMobile from '../assets/images/bg-shorten-mobile.svg'
import GeneratedLink from './GeneratedLink';

const Container = styled.div`
    margin-top: 50px;
    /* border: 1px solid blue; */
    display: flex;
    max-width: 100vw;
    height: fit-content;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(180deg, #FFFFFF 10%, ${props => props.theme.colors.lightGrey} 0%);
`;

const InnerContainer1 = styled.div`
    /* border: 1px solid red; */
    height: fit-content;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const InnerContainer2 = styled.div`
    /* border: 1px solid green; */
    height: 500px;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const LinkGenerateContainer = styled.form`
    /* border: 1px solid black; */
    height: 200px;
    width: 80vw;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.darkViolet};
    background-image: url(${BgShortenDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const LinkInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70%;
    box-sizing: border-box;
    margin-right: 20px;
`;

const LinkInput = styled.input`
    width: 100%;
    padding: 20px 30px;
    background-color: white;
    color: blue;
    font-size: calc(16px + (22 - 16) * ((100vw - 320px) / (1920 - 300)));
    border-radius: 10px;
    outline: none;
    border: none;
    box-sizing: border-box;
    &:focus {
        border: 3px solid ${props => props.theme.colors.red};
    }
`;

const AddLinkError = styled.div`
    display: none;
    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1920 - 300)));
    color: ${props => props.theme.colors.red};
    font-style: italic;
    margin-top: 5px;
`;

const LinkShortenButton = styled.button`
    background-color: ${props => props.theme.colors.cyan};
    opacity: 0.8;
    color: ${props => props.theme.colors.white};;
    padding: 20px 30px;
    border-radius: 10px;
    font-weight: bolder;
    font-size: calc(12px + (20 - 12) * ((100vw - 320px) / (1920 - 300)));
    width: 15%;
    border: none;
    &:hover{
        opacity: 1;
    }
`;

const LinksDisplayContainer = styled.div`
    /* border: 1px solid green; */
    height: 50%;
    width: 80vw;
`;

const StatisticsHeadingContainer = styled.div`
    border: 1px solid black;
`;

const StatisticsCardsContainer = styled.div`
    border: 1px solid green;
`;

// const ShowAddlinkError = () => {
//     let x = document.getElementById("blank-link-error-msg");
//     if (window.getComputedStyle(x).display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

export default function LinksAndStatisticsSection() {

    let initLinks;
    if (localStorage.getItem("links") === null) {
        initLinks = [];
    }
    else {
        initLinks = JSON.parse(localStorage.getItem("links"));
    }

    // declaring state of the current links
    const [links, setLinks] = useState(initLinks);

    // when new link is added, links will be loaded in localstorage
    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links));
    }, [links]);

    // to add a new shorten link in the list
    const addLink = useCallback((originalLink, shortenLink) => {
        let index;
        if (links.length === 0) {
            index = 0;
        } else {
            index = links[links.length - 1].index + 1;
        }
        let newLink = {
            index: index,
            originalLink: originalLink,
            shortenLink: shortenLink,
        };
        setLinks([...links, newLink]);
    }, [links]);

    const [link, setLink] = useState('');
    const [linkToSend, setLinkToSend] = useState('');

    useEffect(() => {
        async function fetchData(){
            if (linkToSend.trim().length !== 0) {
                const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkToSend}`);
                const data = await response.json();
                let originalLink = data.result.original_link;
                let shortenLink = data.result.full_short_link2;
                addLink(originalLink, shortenLink);
                setLink("");
                setLinkToSend("");
            }
        }
        fetchData();
    }, [link, linkToSend, addLink]);

    const submit = (e) => {
        e.preventDefault();
        if (!link) {
            throw console.error("Link is empty!");
        } else {
            setLinkToSend(link);
        }
    }

    return (
        <div>
            <Container>
                <InnerContainer1>
                    <LinkGenerateContainer onSubmit={submit}>
                        <LinkInputContainer>
                            <LinkInput id="link-input" type="text" value={link} placeholder="Shorten a link here..." name="linkInput" onChange={(e) => { setLink(e.target.value) }} />
                            <AddLinkError id="blank-link-error-msg">Please add a link</AddLinkError>
                        </LinkInputContainer>
                        <LinkShortenButton type="submit" id="link-shorten-btn">Shorten it!</LinkShortenButton>
                    </LinkGenerateContainer>
                    <LinksDisplayContainer>
                        {links.map((link) => {
                            return <GeneratedLink key={link.index} originalLink={link.originalLink} shortenLink={link.shortenLink}/>
                        })}
                        
                    </LinksDisplayContainer>
                </InnerContainer1>
                <InnerContainer2>
                    <StatisticsHeadingContainer>

                    </StatisticsHeadingContainer>
                    <StatisticsCardsContainer>

                    </StatisticsCardsContainer>
                </InnerContainer2>
            </Container>
        </div>
    )
}