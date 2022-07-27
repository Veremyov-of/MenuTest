import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";


const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <WrappHeader>
            <Button toggle={toggle} onClick={handleToggle}>
            <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.22222C0 1.63285 0.234126 1.06762 0.650874 0.650874C1.06762 0.234126 1.63285 0 2.22222 0H8.88889C9.47826 0 10.0435 0.234126 10.4602 0.650874C10.877 1.06762 11.1111 1.63285 11.1111 2.22222V8.88889C11.1111 9.47826 10.877 10.0435 10.4602 10.4602C10.0435 10.877 9.47826 11.1111 8.88889 11.1111H2.22222C1.63285 11.1111 1.06762 10.877 0.650874 10.4602C0.234126 10.0435 0 9.47826 0 8.88889V2.22222ZM0 16.6667C0 16.0773 0.234126 15.5121 0.650874 15.0953C1.06762 14.6786 1.63285 14.4444 2.22222 14.4444H8.88889C9.47826 14.4444 10.0435 14.6786 10.4602 15.0953C10.877 15.5121 11.1111 16.0773 11.1111 16.6667V23.3333C11.1111 23.9227 10.877 24.4879 10.4602 24.9047C10.0435 25.3214 9.47826 25.5556 8.88889 25.5556H2.22222C1.63285 25.5556 1.06762 25.3214 0.650874 24.9047C0.234126 24.4879 0 23.9227 0 23.3333V16.6667ZM0 31.1111C0 30.5217 0.234126 29.9565 0.650874 29.5398C1.06762 29.123 1.63285 28.8889 2.22222 28.8889H8.88889C9.47826 28.8889 10.0435 29.123 10.4602 29.5398C10.877 29.9565 11.1111 30.5217 11.1111 31.1111V37.7778C11.1111 38.3671 10.877 38.9324 10.4602 39.3491C10.0435 39.7659 9.47826 40 8.88889 40H2.22222C1.63285 40 1.06762 39.7659 0.650874 39.3491C0.234126 38.9324 0 38.3671 0 37.7778V31.1111ZM14.4444 2.22222C14.4444 1.63285 14.6786 1.06762 15.0953 0.650874C15.5121 0.234126 16.0773 0 16.6667 0H23.3333C23.9227 0 24.4879 0.234126 24.9047 0.650874C25.3214 1.06762 25.5556 1.63285 25.5556 2.22222V8.88889C25.5556 9.47826 25.3214 10.0435 24.9047 10.4602C24.4879 10.877 23.9227 11.1111 23.3333 11.1111H16.6667C16.0773 11.1111 15.5121 10.877 15.0953 10.4602C14.6786 10.0435 14.4444 9.47826 14.4444 8.88889V2.22222ZM14.4444 16.6667C14.4444 16.0773 14.6786 15.5121 15.0953 15.0953C15.5121 14.6786 16.0773 14.4444 16.6667 14.4444H23.3333C23.9227 14.4444 24.4879 14.6786 24.9047 15.0953C25.3214 15.5121 25.5556 16.0773 25.5556 16.6667V23.3333C25.5556 23.9227 25.3214 24.4879 24.9047 24.9047C24.4879 25.3214 23.9227 25.5556 23.3333 25.5556H16.6667C16.0773 25.5556 15.5121 25.3214 15.0953 24.9047C14.6786 24.4879 14.4444 23.9227 14.4444 23.3333V16.6667ZM14.4444 31.1111C14.4444 30.5217 14.6786 29.9565 15.0953 29.5398C15.5121 29.123 16.0773 28.8889 16.6667 28.8889H23.3333C23.9227 28.8889 24.4879 29.123 24.9047 29.5398C25.3214 29.9565 25.5556 30.5217 25.5556 31.1111V37.7778C25.5556 38.3671 25.3214 38.9324 24.9047 39.3491C24.4879 39.7659 23.9227 40 23.3333 40H16.6667C16.0773 40 15.5121 39.7659 15.0953 39.3491C14.6786 38.9324 14.4444 38.3671 14.4444 37.7778V31.1111ZM28.8889 2.22222C28.8889 1.63285 29.123 1.06762 29.5398 0.650874C29.9565 0.234126 30.5217 0 31.1111 0H37.7778C38.3671 0 38.9324 0.234126 39.3491 0.650874C39.7659 1.06762 40 1.63285 40 2.22222V8.88889C40 9.47826 39.7659 10.0435 39.3491 10.4602C38.9324 10.877 38.3671 11.1111 37.7778 11.1111H31.1111C30.5217 11.1111 29.9565 10.877 29.5398 10.4602C29.123 10.0435 28.8889 9.47826 28.8889 8.88889V2.22222ZM28.8889 16.6667C28.8889 16.0773 29.123 15.5121 29.5398 15.0953C29.9565 14.6786 30.5217 14.4444 31.1111 14.4444H37.7778C38.3671 14.4444 38.9324 14.6786 39.3491 15.0953C39.7659 15.5121 40 16.0773 40 16.6667V23.3333C40 23.9227 39.7659 24.4879 39.3491 24.9047C38.9324 25.3214 38.3671 25.5556 37.7778 25.5556H31.1111C30.5217 25.5556 29.9565 25.3214 29.5398 24.9047C29.123 24.4879 28.8889 23.9227 28.8889 23.3333V16.6667ZM28.8889 31.1111C28.8889 30.5217 29.123 29.9565 29.5398 29.5398C29.9565 29.123 30.5217 28.8889 31.1111 28.8889H37.7778C38.3671 28.8889 38.9324 29.123 39.3491 29.5398C39.7659 29.9565 40 30.5217 40 31.1111V37.7778C40 38.3671 39.7659 38.9324 39.3491 39.3491C38.9324 39.7659 38.3671 40 37.7778 40H31.1111C30.5217 40 29.9565 39.7659 29.5398 39.3491C29.123 38.9324 28.8889 38.3671 28.8889 37.7778V31.1111Z" fill="black"/>
            </svg>
            </Button>
            <Navbar toggle={toggle}>
                <Link href="#">Home</Link>
                <Link href="#">Contacts</Link>
                <Link href="#">About</Link>
            </Navbar>

        </WrappHeader>
    )
}

export default Header;

const Link = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 50px;
    margin: 10px 0px;
    &:hover {
        color: red;
    }
`;

const Button = styled.button`
    cursor: pointer;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    transition: all 0.3s linear;
    ${ifProp(
        'toggle',
        css`
        left: 200px;
        transform: rotate(90deg);
        `
    )}
`;

const Navbar = styled.div`
    position: absolute;
    top: 0;
    left: -300px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    border-right: 1px solid #000;
    background-color: #fff;
    transition: left 0.3s linear;

    ${ifProp(
        'toggle',
        css`
        left: 0;
        `
    )}
    
`;

const WrappHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000000;
`;