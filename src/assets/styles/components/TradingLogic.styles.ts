import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const scoreRise = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const TradingLogicSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  background: ${theme.colors.primary.pageBg};
`;

export const LogicLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 64px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SignalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignalItem = styled.div<{ $strength?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.colors.shadows.cardShadow};

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(255,255,255,0.95);
    transform: translateX(4px);
    box-shadow: ${theme.colors.shadows.cardHover};
  }

  .signal-name {
    font-family: ${theme.fonts.mono};
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.primary.text};
    letter-spacing: 0.5px;
  }

  .signal-desc {
    font-family: ${theme.fonts.body};
    font-size: 11px;
    color: ${theme.colors.primary.textMuted};
    margin-top: 3px;
    line-height: 1.4;
  }

  .signal-bar {
    width: 80px;
    height: 3px;
    background: ${theme.colors.primary.altBg};
    border-radius: 2px;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      height: 100%;
      width: ${({ $strength }) => $strength ?? 70}%;
      background: ${theme.colors.primary.accent};
      box-shadow: 0 0 6px rgba(57,255,20,0.5);
      animation: ${scoreRise} 1.2s ease forwards;
    }
  }
`;

export const LogicArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: ${theme.colors.primary.accentDark};
  font-size: 22px;

  .label {
    font-family: ${theme.fonts.body};
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${theme.colors.primary.textLight};
  }
`;

export const ConfidenceBlock = styled.div`
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(16px);
  border: 2px solid ${theme.colors.primary.borderStrong};
  border-radius: ${theme.borderRadius.xl};
  padding: 40px 36px;
  text-align: center;
  box-shadow: ${theme.colors.shadows.greenAmbient};

  .title {
    font-family: ${theme.fonts.body};
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: ${theme.colors.primary.textLight};
    margin-bottom: 16px;
  }

  .score {
    font-family: ${theme.fonts.mono};
    font-size: 72px;
    font-weight: 800;
    color: ${theme.colors.primary.text};
    line-height: 1;
    letter-spacing: -3px;
  }

  .unit {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: ${theme.colors.primary.textMuted};
    margin-top: 8px;
    line-height: 1.5;
  }

  .decision {
    margin-top: 24px;
    padding: 12px 28px;
    background: ${theme.colors.primary.accent};
    color: ${theme.colors.primary.black};
    font-family: ${theme.fonts.heading};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: ${theme.borderRadius.sm};
    box-shadow: ${theme.colors.shadows.neonGlowSm};
  }
`;