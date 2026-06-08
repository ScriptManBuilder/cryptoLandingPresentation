import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* --- Navbar --- */
export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(5, 5, 5, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 420px) {
    height: 62px;
    padding: 0 16px;
  }

  @media (max-width: 375px) {
    height: 58px;
    padding: 0 14px;
  }

  @media (max-width: 320px) {
    height: 56px;
    padding: 0 12px;
  }
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .dot {
    width: 7px;
    height: 7px;
    background: ${theme.colors.primary.accent};
    border-radius: 50%;
    box-shadow: ${theme.colors.shadows.neonGlowSm};
  }

  .name {
    font-family: ${theme.fonts.heading};
    font-size: 17px;
    font-weight: 800;
    color: ${theme.colors.primary.white};
    letter-spacing: -0.5px;

    span {
      color: ${theme.colors.primary.accent};
    }

    @media (max-width: 420px) {
      font-size: 15px;
    }

    @media (max-width: 375px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 13px;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2px;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: block;
    padding: 6px 14px;
    font-family: ${theme.fonts.body};
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    border-radius: ${theme.borderRadius.sm};
    transition: ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primary.white};
      background: rgba(255, 255, 255, 0.06);
    }
  }
`;
export const NavCTA = styled.button`
  padding: 9px 22px;
  background: ${theme.colors.primary.accent};
  color: ${theme.colors.primary.black};
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 700;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.normal};

  &:hover {
    background: #45ff20;
    box-shadow: ${theme.colors.shadows.neonGlowSm};
    transform: translateY(-2px);
  }

  @media (max-width: 420px) {
    padding: 8px 16px;
    font-size: 12px;
  }

  @media (max-width: 375px) {
    padding: 7px 14px;
    font-size: 11px;
  }

  @media (max-width: 320px) {
    padding: 6px 12px;
    font-size: 10px;
  }
`;

/* --- Contact Section --- */

export const ContactSection = styled.section`
  padding: ${theme.spacing.sectionPadding};
  background: ${theme.colors.primary.heroBg};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(57, 255, 20, 0.055) 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 400px;
    background: radial-gradient(
      ellipse at top,
      rgba(57, 255, 20, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const ContactLayout = styled.div`
  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;
  position: relative;
  z-index: 1;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const ContactInfo = styled.div`
  padding-top: 8px;
`;

export const ContactBadge = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.primary.accent};
  margin-bottom: 18px;
`;

export const ContactTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  color: ${theme.colors.primary.white};
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 20px;

  span {
    background: linear-gradient(90deg, #39FF14, #8DFF75, #39FF14);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }
`;

export const ContactSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.8;
  margin-bottom: 48px;
  max-width: 360px;
`;

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(57, 255, 20, 0.1);
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.normal};
  cursor: pointer;

  &:hover {
    border-color: rgba(57, 255, 20, 0.3);
    background: rgba(57, 255, 20, 0.06);
    transform: translateX(4px);
  }

  .icon {
    width: 40px;
    height: 40px;
    background: rgba(57, 255, 20, 0.08);
    border-radius: ${theme.borderRadius.sm};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    flex-shrink: 0;
  }

  .details {
    .label {
      font-family: ${theme.fonts.body};
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: rgba(255, 255, 255, 0.3);
      margin-bottom: 3px;
    }

    .value {
      font-family: ${theme.fonts.mono};
      font-size: 13px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

/* --- Contact Form --- */

export const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(57, 255, 20, 0.12);
  border-radius: ${theme.borderRadius.xl};
  padding: 40px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 60px rgba(57,255,20,0.05);
`;

export const FormTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.primary.white};
  margin-bottom: 6px;
`;

export const FormSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 32px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`;

export const FormLabel = styled.label`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
`;

export const FormInput = styled.input`
  padding: 13px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(57, 255, 20, 0.12);
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.primary.white};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  transition: ${theme.transitions.fast};
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.18);
  }

  &:focus {
    border-color: rgba(57, 255, 20, 0.45);
    background: rgba(57, 255, 20, 0.04);
    box-shadow: 0 0 0 3px rgba(57, 255, 20, 0.07);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 13px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(57, 255, 20, 0.12);
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.primary.white};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  transition: ${theme.transitions.fast};
  outline: none;
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;

  &::placeholder {
    color: rgba(255, 255, 255, 0.18);
  }

  &:focus {
    border-color: rgba(57, 255, 20, 0.45);
    background: rgba(57, 255, 20, 0.04);
    box-shadow: 0 0 0 3px rgba(57, 255, 20, 0.07);
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FormSubmit = styled.button`
  width: 100%;
  padding: 15px;
  background: ${theme.colors.primary.accent};
  color: ${theme.colors.primary.black};
  font-family: ${theme.fonts.heading};
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.3px;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  margin-top: 8px;
  transition: ${theme.transitions.normal};

  &:hover {
    background: #45ff20;
    box-shadow: ${theme.colors.shadows.neonGlow};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const FormDisclaimer = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.18);
  text-align: center;
  margin-top: 16px;
  line-height: 1.6;
`;

/* --- Footer --- */

export const FooterWrapper = styled.footer`
  background: #020202;
  border-top: 1px solid rgba(57, 255, 20, 0.08);
`;

export const FooterTop = styled.div`
  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 56px 40px 48px;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div`
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    .dot {
      width: 7px;
      height: 7px;
      background: ${theme.colors.primary.accent};
      border-radius: 50%;
      box-shadow: ${theme.colors.shadows.neonGlowSm};
    }

    .name {
      font-family: ${theme.fonts.heading};
      font-size: 17px;
      font-weight: 800;
      color: ${theme.colors.primary.white};
      letter-spacing: -0.5px;

      span {
        color: ${theme.colors.primary.accent};
      }
    }
  }

  .tagline {
    font-family: ${theme.fonts.body};
    font-size: 13px;
    color: rgba(255, 255, 255, 0.3);
    line-height: 1.75;
    max-width: 220px;
    margin-bottom: 24px;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.2s;

  .icon {
    font-size: 13px;
    opacity: 0.5;
  }

  &:hover {
    color: ${theme.colors.primary.accent};
  }
`;

export const FooterCol = styled.div`
  .col-title {
    font-family: ${theme.fonts.body};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
    margin-bottom: 18px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      font-family: ${theme.fonts.body};
      font-size: 13px;
      color: rgba(255, 255, 255, 0.45);
      transition: color 0.2s;

      &:hover {
        color: ${theme.colors.primary.white};
      }
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  .copy {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: rgba(255, 255, 255, 0.18);
  }

  .legal {
    display: flex;
    gap: 20px;

    a {
      font-family: ${theme.fonts.body};
      font-size: 12px;
      color: rgba(255, 255, 255, 0.18);
      transition: color 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.45);
      }
    }
  }
`;