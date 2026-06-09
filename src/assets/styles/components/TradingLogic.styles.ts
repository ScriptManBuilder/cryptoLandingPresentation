import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const scoreRise = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;
export const TradingLogicSection = styled.section`
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

export const LogicLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 64px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 48px;
  }

  @media (max-width: 420px) {
    margin-top: 36px;
  }
`;

export const SignalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 420px) {
    gap: 8px;
  }
`;

export const SignalItem = styled.div<{ $strength?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  padding: 14px 18px;

  background: ${theme.colors.primary.cardBg};
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.md};

  backdrop-filter: blur(12px);
  box-shadow: ${theme.colors.shadows.cardShadow};

  transition: ${theme.transitions.normal};

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(255,255,255,0.95);
    transform: translateX(4px);
    box-shadow: ${theme.colors.shadows.cardHover};
  }

  .signal-content {
    flex: 1;
    min-width: 0;
  }

  .signal-name {
    font-family: ${theme.fonts.mono};
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.primary.text};
    letter-spacing: 0.5px;
  }

  .signal-desc {
    margin-top: 3px;

    font-family: ${theme.fonts.body};
    font-size: 11px;
    line-height: 1.4;

    color: ${theme.colors.primary.textMuted};
  }

  .signal-bar {
    width: 90px;
    min-width: 90px;
    height: 4px;

    background: ${theme.colors.primary.altBg};
    border-radius: 999px;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      height: 100%;
      width: ${({ $strength }) => $strength ?? 70}%;

      background: ${theme.colors.primary.accent};
      box-shadow: 0 0 8px rgba(57,255,20,0.6);

      animation: ${scoreRise} 1.2s ease forwards;
    }
  }

  @media (max-width: 420px) {
    padding: 12px 14px;

    .signal-name {
      font-size: 12px;
    }

    .signal-desc {
      font-size: 10px;
    }

    .signal-bar {
      width: 70px;
      min-width: 70px;
    }
  }

  @media (max-width: 320px) {
    gap: 12px;

    .signal-bar {
      width: 55px;
      min-width: 55px;
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

  @media (max-width: 800px) {
    transform: rotate(90deg);
    margin: 8px auto;
  }

  @media (max-width: 420px) {
    font-size: 18px;

    .label {
      font-size: 9px;
    }
  }
`;

export const ConfidenceBlock = styled.div`
  background: ${theme.colors.primary.cardBg};

  border: 2px solid ${theme.colors.primary.borderStrong};
  border-radius: ${theme.borderRadius.xl};

  backdrop-filter: blur(16px);

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
    margin-top: 8px;

    font-family: ${theme.fonts.body};
    font-size: 12px;
    line-height: 1.5;

    color: ${theme.colors.primary.textMuted};
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

  @media (max-width: 420px) {
    padding: 28px 20px;

    .score {
      font-size: 56px;
    }

    .decision {
      width: 100%;
      padding: 12px;
      font-size: 12px;
    }
  }

  @media (max-width: 375px) {
    .score {
      font-size: 48px;
    }
  }

  @media (max-width: 320px) {
    padding: 22px 16px;

    .score {
      font-size: 42px;
    }

    .title {
      font-size: 10px;
      letter-spacing: 2px;
    }
  }
`;