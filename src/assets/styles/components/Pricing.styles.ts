import styled from 'styled-components';
import { theme } from '../theme';

export const PricingSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  background: ${theme.colors.primary.altBg};
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 72px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 620px;
    margin: 64px auto 0;
  }

  @media (max-width: 420px) {
    gap: 16px;
    margin-top: 40px;
  }
`;

export const PricingCard = styled.div<{ $featured?: boolean }>`
  padding: 42px 36px;
  background: ${theme.colors.primary.cardBg};
  border-radius: ${theme.borderRadius.xl};
  position: relative;
  overflow: hidden;

  border: ${({ $featured }) =>
    $featured
      ? `2px solid ${theme.colors.primary.accent}`
      : `1px solid ${theme.colors.primary.border}`};

  box-shadow: ${({ $featured }) =>
    $featured
      ? '0 20px 60px rgba(57,255,20,0.15)'
      : theme.colors.shadows.cardShadow};

  transition: ${theme.transitions.normal};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top,
      rgba(57,255,20,0.05),
      transparent 60%
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 70px rgba(0,0,0,0.12);
  }

  @media (max-width: 420px) {
    padding: 28px 22px;
  }

  @media (max-width: 375px) {
    padding: 24px 18px;
  }

  @media (max-width: 320px) {
    padding: 20px 16px;
  }
`;

export const PricingBadge = styled.span`
  position: absolute;
  top: 18px;
  right: 18px;

  background: ${theme.colors.primary.accent};
  color: ${theme.colors.primary.black};

  font-size: 10px;
  font-weight: 800;

  padding: 6px 12px;

  border-radius: 999px;

  text-transform: uppercase;
  letter-spacing: 1.5px;

  box-shadow: ${theme.colors.shadows.neonGlowSm};

  @media (max-width: 375px) {
    font-size: 9px;
    padding: 5px 10px;
  }
`;

export const PricingTier = styled.div`
   font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;

  color: ${theme.colors.primary.accentDark};

  margin-bottom: 18px;
`;

export const PricingPrice = styled.div`
    margin-bottom: 18px;

  .amount {
    font-size: 64px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -3px;
  }

  .period {
    font-size: 14px;
    color: ${theme.colors.primary.textMuted};
  }

  @media (max-width: 420px) {
    .amount {
      font-size: 52px;
    }
  }

  @media (max-width: 320px) {
    .amount {
      font-size: 44px;
    }
  }
`;

export const PricingDesc = styled.p`
  font-size: 14px;
  line-height: 1.8;
  color: ${theme.colors.primary.textMuted};

  margin-bottom: 32px;
  padding-bottom: 24px;

  border-bottom: 1px solid ${theme.colors.primary.border};

  min-height: 80px;

  @media (max-width: 420px) {
    min-height: auto;
  }
`;

export const PricingFeatures = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
`;

export const PricingFeatureItem = styled.li`
 display: flex;
  align-items: flex-start;
  gap: 12px;

  font-size: 14px;
  line-height: 1.6;

  color: ${theme.colors.primary.text};

  &::before {
    content: '✓';
    color: ${theme.colors.primary.accent};
    font-weight: 700;
    margin-top: 1px;
  }

  @media (max-width: 375px) {
    font-size: 13px;
  }
`;

export const PricingButton = styled.button<{ $featured?: boolean }>`
   width: 100%;
  margin-top: auto;

  padding: 16px;

  font-size: 14px;
  font-weight: 700;

  border-radius: 12px;

  background: ${({ $featured }) =>
    $featured
      ? theme.colors.primary.accent
      : 'transparent'};

  color: ${({ $featured }) =>
    $featured
      ? theme.colors.primary.black
      : theme.colors.primary.text};

  border: 1px solid ${({ $featured }) =>
    $featured
      ? theme.colors.primary.accent
      : theme.colors.primary.border};

  transition: ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.primary.accent};
    color: ${theme.colors.primary.black};

    transform: translateY(-2px);

    box-shadow: 0 0 25px rgba(57,255,20,0.25);
  }

  @media (max-width: 375px) {
    padding: 14px;
  }
`;