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
    @media (max-width: 420px) {
  padding: 80px 0;
}

@media (max-width: 375px) {
  padding: 70px 0;
}

@media (max-width: 320px) {
  padding: 60px 0;
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

  @media (max-width: 420px) {
    padding: 0 20px;
    gap: 36px;
  }

  @media (max-width: 375px) {
    padding: 0 18px;
  }

  @media (max-width: 320px) {
    padding: 0 16px;
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
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 800;
  color: ${theme.colors.primary.white};
  letter-spacing: -1.5px;
  line-height: 1.05;
  margin-bottom: 20px;

  span {
    background: linear-gradient(
      90deg,
      #39ff14,
      #8dff75,
      #39ff14
    );
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }

  @media (max-width: 420px) {
    font-size: 32px;
  }

  @media (max-width: 375px) {
    font-size: 28px;
  }

  @media (max-width: 320px) {
    font-size: 24px;
  }
`;
export const ContactSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: rgba(255,255,255,0.55);
  line-height: 1.8;
  margin-bottom: 42px;
  max-width: 420px;

  @media (max-width: 420px) {
    font-size: 14px;
    margin-bottom: 32px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
  }
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

  padding: 18px 22px;

  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(57,255,20,0.12);

  border-radius: ${theme.borderRadius.md};

  transition: all .25s ease;

  &:hover {
    transform: translateX(6px);

    border-color: rgba(57,255,20,0.3);

    background: rgba(57,255,20,0.05);

    box-shadow: 0 0 25px rgba(57,255,20,0.08);
  }

  .icon {
    width: 44px;
    height: 44px;

    background: rgba(57,255,20,0.08);

    border-radius: ${theme.borderRadius.sm};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;

    flex-shrink: 0;
  }

  .details {
    min-width: 0;

    .label {
      font-size: 10px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.35);
    }

    .value {
      font-size: 13px;
      color: rgba(255,255,255,0.82);
      word-break: break-word;
    }
  }

  @media (max-width: 320px) {
    padding: 14px;
    gap: 12px;
  }
`;

/* --- Contact Form --- */
export const FormCard = styled.div`
  background: rgba(255,255,255,0.04);

  border: 1px solid rgba(57,255,20,0.15);

  border-radius: ${theme.borderRadius.xl};

  padding: 42px;

  backdrop-filter: blur(20px);

  box-shadow:
    0 0 60px rgba(57,255,20,0.05),
    inset 0 1px 0 rgba(255,255,255,0.05);

  @media (max-width: 420px) {
    padding: 28px;
  }

  @media (max-width: 375px) {
    padding: 24px;
  }

  @media (max-width: 320px) {
    padding: 20px;
  }
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
  padding: 16px;

  background: ${theme.colors.primary.accent};

  color: ${theme.colors.primary.black};

  font-family: ${theme.fonts.heading};
  font-size: 15px;
  font-weight: 800;

  border: none;
  border-radius: ${theme.borderRadius.sm};

  margin-top: 10px;

  transition: all .25s ease;

  &:hover {
    background: #4cff25;

    transform: translateY(-2px);

    box-shadow:
      0 0 20px rgba(57,255,20,0.35),
      0 0 40px rgba(57,255,20,0.15);
  }

  @media (max-width: 375px) {
    font-size: 14px;
    padding: 14px;
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

import { Link } from 'react-router-dom';

export const FormAgreement = styled.div`
  margin: 18px 0 20px;

  label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
  }

  input[type='checkbox'] {
    margin-top: 3px;
    accent-color: #39ff14;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  span {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    line-height: 1.6;
    color: rgba(255,255,255,0.55);
  }

  a {
    color: ${theme.colors.primary.accent};
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #5dff3f;
      text-decoration: underline;
    }
  }
`;
