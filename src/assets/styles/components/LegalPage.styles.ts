import styled from 'styled-components';
import { theme } from '../theme';

export const LegalPageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.primary.heroBg};
  background-image: radial-gradient(
    rgba(57, 255, 20, 0.045) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
  color: ${theme.colors.primary.white};
  font-family: ${theme.fonts.body};
`;

export const LegalHero = styled.div`
  padding: 100px 24px 64px;
  text-align: center;
  position: relative;
  background: radial-gradient(
    ellipse 70% 50% at 50% 0%,
    rgba(57, 255, 20, 0.12) 0%,
    transparent 70%
  );
  border-bottom: 1px solid ${theme.colors.primary.border};
`;

export const LegalBadge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${theme.colors.primary.borderMed};
  background: rgba(57, 255, 20, 0.08);
  color: ${theme.colors.primary.accent};
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const LegalTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
  color: ${theme.colors.primary.white};

  span {
    color: ${theme.colors.primary.accent};
  }
`;

export const LegalMeta = styled.p`
  font-size: 14px;
  color: ${theme.colors.primary.textLight};
  font-family: ${theme.fonts.mono};
`;

export const LegalContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 72px 24px 100px;
`;

export const LegalSection = styled.section`
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LegalSectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${theme.colors.primary.white};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: attr(data-num);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(57, 255, 20, 0.12);
    border: 1px solid ${theme.colors.primary.borderMed};
    color: ${theme.colors.primary.accent};
    font-size: 11px;
    font-weight: 700;
    font-family: ${theme.fonts.mono};
    flex-shrink: 0;
  }
`;

export const LegalText = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
  padding-left: 40px;
`;

export const LegalContactBlock = styled.div`
  margin-top: 12px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LegalContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.primary.accent};
  font-size: 14px;
  font-family: ${theme.fonts.mono};
  transition: ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.primary.accentSoft};
    text-decoration: underline;
  }
`;

export const LegalDivider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.primary.border};
  margin: 48px 0;
`;

export const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${theme.colors.primary.borderMed};
  background: rgba(57, 255, 20, 0.06);
  color: ${theme.colors.primary.accent};
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: ${theme.transitions.fast};
  margin-top: 64px;

  &:hover {
    background: rgba(57, 255, 20, 0.14);
    border-color: ${theme.colors.primary.borderStrong};
  }
`;
