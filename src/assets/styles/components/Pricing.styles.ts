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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 64px;
  align-items: start;
`;

export const PricingCard = styled.div<{ $featured?: boolean }>`
  padding: 40px 32px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  border: ${({ $featured }) =>
    $featured
      ? `2px solid ${theme.colors.primary.borderStrong}`
      : `1px solid ${theme.colors.primary.border}`};
  border-radius: ${theme.borderRadius.xl};
  transition: ${theme.transitions.normal};
  position: relative;
  box-shadow: ${({ $featured }) =>
    $featured ? theme.colors.shadows.greenAmbient : theme.colors.shadows.cardShadow};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.colors.shadows.cardHover};
  }
`;

export const PricingBadge = styled.span`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.primary.accent};
  color: ${theme.colors.primary.black};
  font-family: ${theme.fonts.heading};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 18px;
  border-radius: ${theme.borderRadius.full};
  white-space: nowrap;
  box-shadow: ${theme.colors.shadows.neonGlowSm};
`;

export const PricingTier = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${theme.colors.primary.accentDark};
  margin-bottom: 16px;
`;

export const PricingPrice = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
  gap: 4px;

  .amount {
    font-family: ${theme.fonts.heading};
    font-size: 52px;
    font-weight: 800;
    color: ${theme.colors.primary.text};
    line-height: 1;
    letter-spacing: -2px;
  }

  .period {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: ${theme.colors.primary.textMuted};
  }
`;

export const PricingDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.primary.textMuted};
  margin-bottom: 28px;
  line-height: 1.65;
  border-bottom: 1px solid ${theme.colors.primary.border};
  padding-bottom: 24px;
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
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${theme.colors.primary.text};

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    background: rgba(57, 255, 20, 0.1);
    border: 1px solid ${theme.colors.primary.borderMed};
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L3.5 6.5L9 1' stroke='%2300C72B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const PricingButton = styled.button<{ $featured?: boolean }>`
  width: 100%;
  padding: 14px;
  background: ${({ $featured }) =>
    $featured ? theme.colors.primary.accent : 'transparent'};
  color: ${({ $featured }) =>
    $featured ? theme.colors.primary.black : theme.colors.primary.text};
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border: 1px solid ${({ $featured }) =>
    $featured ? theme.colors.primary.accent : theme.colors.primary.border};
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.primary.accent};
    color: ${theme.colors.primary.black};
    border-color: ${theme.colors.primary.accent};
    box-shadow: ${theme.colors.shadows.neonGlowSm};
    transform: translateY(-2px);
  }
`;