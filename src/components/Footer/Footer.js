import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>شماره تماس</LinkTitle>
          <LinkItem href="tel:09359497756">09354947756</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle> ایمیل</LinkTitle>
          <LinkItem href="mailto:shahab@gmail.com">shahab-sanat@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>طراحی و ساخت در کمترین زمان</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https//github.com">
              <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https//Linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https//instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
