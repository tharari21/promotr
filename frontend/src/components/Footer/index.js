import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  SocialIconLink
} from "./FooterElements";

const index = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="">Our Mission</FooterLink>
              <FooterLink to="">Our Locations</FooterLink>
              <FooterLink to="">Locations Coming Soon</FooterLink>
              <FooterLink to="">Contact Us</FooterLink>

            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Club Owners</FooterLinkTitle>
              <FooterLink to="">Become a Club Owner</FooterLink>
              <FooterLink to="">What is Love?</FooterLink>
              <FooterLink to="">Baby Don't Hurt Me</FooterLink>
              <FooterLink to="">No More</FooterLink>
              
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Gallery</FooterLinkTitle>
              <FooterLink to="">Photos</FooterLink>
              <FooterLink to="">Videos</FooterLink>
              <FooterLink to="">Some Other Stuff</FooterLink>
              <FooterLink to="">Is All This Text</FooterLink>
              <FooterLink to="">In The Footer Really Necessary?</FooterLink>
              
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="">Facebook</FooterLink>
              <FooterLink to="">Instagram</FooterLink>
              <FooterLink to="">Youtube</FooterLink>
              <FooterLink to="">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">promotr</SocialLogo>
            <WebsiteRights>
              promotr {new Date().getFullYear()} All rights reserved.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default index