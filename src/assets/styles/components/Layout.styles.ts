import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
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
