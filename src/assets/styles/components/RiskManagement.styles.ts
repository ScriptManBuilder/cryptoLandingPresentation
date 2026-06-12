import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const floatGlow = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.55;
  }

  50% {
    transform: translate3d(0, -8px, 0);
    opacity: 0.9;
  }
`;

export const RiskSection = styled.section`
  padding: ${theme.spacing.sectionPadding};
  position: relative;
  isolation: isolate;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 15% 20%, rgba(57, 255, 20, 0.08), transparent 28%),
      radial-gradient(circle at 85% 0%, rgba(57, 255, 20, 0.06), transparent 22%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 8% 40px;
    height: 180px;
    background: radial-gradient(circle, rgba(57, 255, 20, 0.14) 0%, rgba(57, 255, 20, 0.04) 35%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
    z-index: -1;
    animation: ${floatGlow} 8s ease-in-out infinite;
  }

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};

    &::after {
      inset: auto 4% 24px;
      height: 140px;
    }
  }
`;

export const RiskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin-top: 64px;

  /* Tablet */
  @media (max-width: 768px) {
    margin-top: 48px;
    gap: 14px;
  }

  /* Mobile L */
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    margin-top: 36px;
    gap: 10px;
  }
`;

export const RiskCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 32px;
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(18px);
  border: 1px solid rgba(57, 255, 20, 0.14);
  border-radius: ${theme.borderRadius.lg};
  transition: ${theme.transitions.normal};
  box-shadow:
    0 8px 24px rgba(15, 23, 42, 0.06),
    0 1px 0 rgba(255, 255, 255, 0.48) inset,
    ${theme.colors.shadows.cardShadow};

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary.accentDark}, ${theme.colors.primary.accent}, rgba(57, 255, 20, 0));
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto -18% -22% auto;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(57, 255, 20, 0.16) 0%, rgba(57, 255, 20, 0.04) 36%, transparent 68%);
    pointer-events: none;
    opacity: 0.75;
  }

  &:hover {
    border-color: rgba(57, 255, 20, 0.3);
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-6px);
    box-shadow:
      0 18px 36px rgba(15, 23, 42, 0.08),
      0 0 0 1px rgba(57, 255, 20, 0.12),
      ${theme.colors.shadows.cardHover};
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
  position: relative;
  background:
    linear-gradient(180deg, rgba(57, 255, 20, 0.16), rgba(57, 255, 20, 0.06)),
    ${theme.colors.primary.cardBgSolid};
  border: 1px solid rgba(57, 255, 20, 0.18);
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
  box-shadow: ${theme.colors.shadows.neonGlowSm};

  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.5);
    opacity: 0.55;
  }

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
  line-height: 1.25;

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
  max-width: 34ch;

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
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 247, 238, 0.9)),
    ${theme.colors.primary.cardBg};
  backdrop-filter: blur(18px);
  border: 1px solid rgba(57, 255, 20, 0.14);
  border-left: 4px solid ${theme.colors.primary.accent};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.06),
    0 0 0 1px rgba(57, 255, 20, 0.08),
    ${theme.colors.shadows.cardShadow};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at top right, rgba(57, 255, 20, 0.15), transparent 32%),
      linear-gradient(90deg, rgba(57, 255, 20, 0.04), transparent 35%);
    pointer-events: none;
  }

  .shield {
    font-size: 40px;
    flex-shrink: 0;
    filter: drop-shadow(0 10px 18px rgba(57, 255, 20, 0.18));
  }

  .text {
    position: relative;
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