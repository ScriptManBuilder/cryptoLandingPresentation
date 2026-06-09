import styled from 'styled-components';
import { theme } from '../theme';

export const FeaturesSection = styled.section`
  padding: ${theme.spacing.sectionPadding};
  background: ${theme.colors.primary.pageBg};

  @media (max-width: 768px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  @media (max-width: 420px) {
    padding: 60px 0;
  }

  @media (max-width: 375px) {
    padding: 50px 0;
  }

  @media (max-width: 320px) {
    padding: 40px 0;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1px;

  background: ${theme.colors.primary.border};
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.xl};

  overflow: hidden;
  margin-top: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 48px;
  }

  @media (max-width: 420px) {
    margin-top: 40px;
    border-radius: ${theme.borderRadius.lg};
  }
`;

export const FeatureCard = styled.div`
  padding: 40px 36px;
  background: ${theme.colors.primary.cardBg};

  backdrop-filter: blur(12px);
  transition: ${theme.transitions.normal};

  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 2px;
    background: ${theme.colors.gradients.neonGlow};

    transform: scaleX(0);
    transition: ${theme.transitions.normal};
    transform-origin: left;
  }

  &:hover {
    background: rgba(255,255,255,0.96);
    box-shadow: ${theme.colors.shadows.cardHover};

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 420px) {
    padding: 28px 24px;
  }

  @media (max-width: 375px) {
    padding: 24px 20px;
  }

  @media (max-width: 320px) {
    padding: 20px 16px;
  }
`;

export const FeatureNumber = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;

  color: ${theme.colors.primary.accentDark};
  opacity: 0.6;

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const FeatureTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 700;

  color: ${theme.colors.primary.text};

  margin: 10px 0 8px;
  letter-spacing: -0.3px;

  @media (max-width: 420px) {
    font-size: 17px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 15px;
  }
`;

export const FeatureDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;

  color: ${theme.colors.primary.textMuted};

  line-height: 1.75;

  @media (max-width: 420px) {
    font-size: 13px;
    line-height: 1.7;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const FeatureTag = styled.span`
  display: inline-block;

  margin-top: 20px;
  padding: 4px 10px;

  background: rgba(57, 255, 20, 0.07);
  border: 1px solid ${theme.colors.primary.border};

  color: ${theme.colors.primary.accentDark};

  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 600;

  letter-spacing: 1px;
  border-radius: ${theme.borderRadius.sm};

  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;