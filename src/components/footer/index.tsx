import { GoMarkGithub } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi"
import React from "react";
import * as S from "./styled";

const Footer = () => {
    return (
        <S.Wrapper>
            <div className="linkedin-link">
                <a href="https://www.linkedin.com/in/victor-bittencourt-da-silva/" target= "_blank" rel= "noreferrer"><FiLinkedin size={24} /> Linkedin </a>
            </div>
            <div className="github-link">
                <a href="https://github.com/Victor-B-S/Victor-B-S.github.io" target= "_blank" rel= "noreferrer"><GoMarkGithub size={24} /> This page on Github </a>
            </div>
        </S.Wrapper>
    );
};

export default Footer;