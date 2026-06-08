import styled from 'styled-components';
import { theme } from '../theme';

export const TechSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  background: ${theme.colors.primary.altBg};
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 64px;
`;

export const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 22px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.colors.shadows.cardShadow};

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(255,255,255,0.95);
    box-shadow: ${theme.colors.shadows.cardHover};
    transform: translateY(-3px);
  }
`;

export const TechIcon = styled.span`
  font-size: 22px;
`;

export const TechInfo = styled.div`
  .name {
    font-family: ${theme.fonts.heading};
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.primary.text};
  }
  .desc {
    font-family: ${theme.fonts.body};
    font-size: 11px;
    color: ${theme.colors.primary.textMuted};
    margin-top: 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const TechHighlight = styled.div`
  max-width: 560px;
  padding: 28px 32px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.primary.border};
  border-left: 3px solid ${theme.colors.primary.accent};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.colors.shadows.cardShadow};

  p {
    font-family: ${theme.fonts.body};
    font-size: 15px;
    color: ${theme.colors.primary.textMuted};
    line-height: 1.8;
  }

  strong {
    color: ${theme.colors.primary.accentDark};
    font-weight: 700;
  }
`;