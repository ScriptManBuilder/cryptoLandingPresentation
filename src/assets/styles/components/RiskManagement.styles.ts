import styled from 'styled-components';
import { theme } from '../theme';

export const RiskSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }
`;

export const RiskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
  margin-top: 64px;

  /* Tablet */
  @media (max-width: 768px) {
    margin-top: 48px;
    gap: 12px;
  }

  /* Mobile L */
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    margin-top: 36px;
    gap: 10px;
  }
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

  @media (max-width: 420px) {
    padding: 24px;
  }

  @media (max-width: 375px) {
    padding: 20px;
  }

  @media (max-width: 320px) {
    padding: 18px;
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

  @media (max-width: 420px) {
    width: 42px;
    height: 42px;
    font-size: 20px;
    margin-bottom: 16px;
  }

  @media (max-width: 320px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }
`;

export const RiskTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.primary.text};
  margin-bottom: 8px;
  letter-spacing: -0.2px;

  @media (max-width: 420px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const RiskDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.primary.textMuted};
  line-height: 1.75;

  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 1.65;
  }

  @media (max-width: 320px) {
    font-size: 11px;
  }
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
    flex-shrink: 0;
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

  /* Tablet */
  @media (max-width: 768px) {
    padding: 24px;
    gap: 18px;
  }

  /* Mobile L */
  @media (max-width: 420px) {
    flex-direction: column;
    text-align: center;
    padding: 22px;

    .shield {
      font-size: 34px;
    }

    .text h4 {
      font-size: 15px;
    }

    .text p {
      font-size: 13px;
    }
  }

  /* Mobile M */
  @media (max-width: 375px) {
    padding: 18px;

    .shield {
      font-size: 30px;
    }

    .text h4 {
      font-size: 14px;
    }

    .text p {
      font-size: 12px;
      line-height: 1.6;
    }
  }

  /* Mobile S */
  @media (max-width: 320px) {
    padding: 16px;

    .shield {
      font-size: 28px;
    }

    .text h4 {
      font-size: 13px;
    }

    .text p {
      font-size: 11px;
    }
  }
`;