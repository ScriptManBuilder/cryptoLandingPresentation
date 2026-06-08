import styled from 'styled-components';
import { theme } from '../theme';

export const RiskSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  background: ${theme.colors.primary.altBg};
`;

export const RiskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
  margin-top: 64px;
`;

export const RiskCard = styled.div`
  padding: 32px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.colors.shadows.cardShadow};

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(255,255,255,0.95);
    transform: translateY(-4px);
    box-shadow: ${theme.colors.shadows.cardHover};
  }
`;

export const RiskIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(57, 255, 20, 0.08);
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const RiskTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.primary.text};
  margin-bottom: 8px;
  letter-spacing: -0.2px;
`;

export const RiskDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.primary.textMuted};
  line-height: 1.75;
`;

export const RiskBanner = styled.div`
  margin-top: 40px;
  padding: 28px 36px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.primary.border};
  border-left: 3px solid ${theme.colors.primary.accent};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow: ${theme.colors.shadows.cardShadow};

  .shield {
    font-size: 40px;
  }

  .text {
    flex: 1;

    h4 {
      font-family: ${theme.fonts.heading};
      font-size: 17px;
      font-weight: 700;
      color: ${theme.colors.primary.text};
      margin-bottom: 6px;
    }

    p {
      font-family: ${theme.fonts.body};
      font-size: 14px;
      color: ${theme.colors.primary.textMuted};
      line-height: 1.6;
    }
  }
`;