import styled from 'styled-components';
import { theme } from '../theme';

export const TechSection = styled.section`
  padding: ${theme.spacing.sectionPadding};
  background: ${theme.colors.primary.altBg};

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

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 64px;

  @media (max-width: 768px) {
    margin-top: 48px;
  }

  @media (max-width: 420px) {
    gap: 10px;
    margin-top: 36px;
  }

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 22px;

  background: ${theme.colors.primary.cardBg};
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.md};

  backdrop-filter: blur(12px);
  box-shadow: ${theme.colors.shadows.cardShadow};

  transition: ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(255, 255, 255, 0.95);
    box-shadow: ${theme.colors.shadows.cardHover};
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 6px);
    min-width: 220px;
  }

  @media (max-width: 420px) {
    flex: 1 1 100%;
    min-width: unset;

    padding: 12px 16px;
    gap: 10px;
  }

  @media (max-width: 375px) {
    padding: 11px 14px;
  }

  @media (max-width: 320px) {
    padding: 10px 12px;
    gap: 8px;
  }
`;

export const TechIcon = styled.span`
  font-size: 22px;
  flex-shrink: 0;

  @media (max-width: 420px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const TechInfo = styled.div`
  min-width: 0;

  .name {
    font-family: ${theme.fonts.heading};
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.primary.text};

    @media (max-width: 420px) {
      font-size: 13px;
    }

    @media (max-width: 320px) {
      font-size: 12px;
    }
  }

  .desc {
    margin-top: 2px;

    font-family: ${theme.fonts.body};
    font-size: 11px;
    color: ${theme.colors.primary.textMuted};

    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 420px) {
      font-size: 10px;
    }

    @media (max-width: 320px) {
      font-size: 9px;
      letter-spacing: 0.6px;
    }
  }
`;

export const TechHighlight = styled.div`
  max-width: 560px;

  padding: 28px 32px;
  margin-top: 48px;

  background: ${theme.colors.primary.cardBg};

  border: 1px solid ${theme.colors.primary.border};
  border-left: 3px solid ${theme.colors.primary.accent};

  border-radius: ${theme.borderRadius.md};

  backdrop-filter: blur(12px);
  box-shadow: ${theme.colors.shadows.cardShadow};

  p {
    font-family: ${theme.fonts.body};
    font-size: 15px;
    line-height: 1.8;
    color: ${theme.colors.primary.textMuted};
  }

  strong {
    color: ${theme.colors.primary.accentDark};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 420px) {
    padding: 20px;
    margin-top: 36px;

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }

  @media (max-width: 375px) {
    padding: 18px;
  }

  @media (max-width: 320px) {
    padding: 16px;

    p {
      font-size: 13px;
      line-height: 1.6;
    }
  }
`;