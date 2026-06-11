import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const flowDown = keyframes`
  0% { opacity: 0; transform: translateY(-6px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const arrowPulse = keyframes`
  0%, 100% { transform: translateX(0) scale(1); opacity: 0.8; }
  50% { transform: translateX(4px) scale(1.08); opacity: 1; }
`;

const softFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

/* -- Shared section primitives used across all sections -- */

export const SectionContainer = styled.div`
  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export const SectionLabel = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.primary.accentDark};
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 3.8vw, 46px);
  font-weight: 800;
  color: ${theme.colors.primary.text};
  letter-spacing: -1.2px;
  margin-bottom: 14px;
  line-height: 1.1;
`;

export const SectionSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  color: ${theme.colors.primary.textMuted};
  max-width: 480px;
  line-height: 1.75;
`;

export const WhatItDoesTitle = styled(SectionTitle)`
  color: ${theme.colors.primary.white};
  font-size: clamp(32px, 4vw, 52px);
  letter-spacing: -1.5px;
  margin-bottom: 16px;
  max-width: 12ch;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.42);

  @media (max-width: 640px) {
    font-size: clamp(26px, 7vw, 36px);
    max-width: none;
  }
`;

export const WhatItDoesSubtitle = styled(SectionSubtitle)`
  font-size: 17px;
  color: rgba(255,255,255,0.68);

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;

/* -- Section-specific -- */

export const WhatItDoesSection = styled.section`
  padding: 110px 0;
  background:
    radial-gradient(circle at top, rgba(57,255,20,0.16), transparent 24%),
    radial-gradient(circle at 20% 20%, rgba(57,255,20,0.08), transparent 18%),
    radial-gradient(circle at 80% 78%, rgba(57,255,20,0.06), transparent 20%),
    linear-gradient(180deg, #0a120b 0%, #050805 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: radial-gradient(circle at center, black 0%, black 58%, transparent 100%);
    pointer-events: none;
    opacity: 0.4;
  }

  @media (max-width: 640px) {
    padding: 72px 0;
  }
`;

export const FlowWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 56px;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    bottom: 130px;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      180deg,
      rgba(57,255,20,0.05),
      rgba(57,255,20,0.35),
      rgba(57,255,20,0.08)
    );
    box-shadow: 0 0 18px rgba(57,255,20,0.16);
    pointer-events: none;
  }

  @media (max-width: 720px) {
    gap: 12px;
    margin-top: 36px;

    &::before {
      left: 15px;
      transform: none;
      bottom: 112px;
    }
  }
`;

export const FlowStepShell = styled.div<{ $side: 'left' | 'right' | 'center' }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 72px minmax(0, 1fr);
  align-items: center;
  width: 100%;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const FlowCard = styled.div<{ $active?: boolean; $isLeft?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04)),
    rgba(9, 14, 10, 0.88);
  border: 1px solid ${({ $active }) => ($active ? 'rgba(57,255,20,0.56)' : 'rgba(57,255,20,0.16)')};
  border-radius: 22px;
  padding: 22px 24px;
  width: min(100%, 460px);
  width: 100%;
  animation: ${flowDown} 0.4s ease forwards;
  animation-delay: 0.05s;
  transition: ${theme.transitions.normal};
  box-shadow:
    0 10px 30px rgba(0,0,0,0.28),
    0 0 0 1px rgba(255,255,255,0.02),
    ${({ $active }) => ($active ? '0 0 34px rgba(57,255,20,0.12)' : 'none')};
  backdrop-filter: blur(16px);
  position: relative;
  overflow: hidden;
  min-height: 120px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 18%, rgba(57,255,20,0.12), transparent 22%),
      radial-gradient(circle at 100% 0%, rgba(57,255,20,0.05), transparent 18%);
    opacity: ${({ $active }) => ($active ? 1 : 0.65)};
    pointer-events: none;
  }

  ${({ $active }) =>
    $active &&
    `
    transform: translateY(-2px);
  `}

  ${({ $isLeft }) => ($isLeft ? 'grid-column: 1;' : 'grid-column: 3;')}

  justify-self: ${({ $isLeft }) => ($isLeft ? 'start' : 'end')};

  &:hover {
    border-color: rgba(57,255,20,0.34);
    background:
      linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.05)),
      rgba(9, 14, 10, 0.96);
    box-shadow:
      0 14px 38px rgba(0,0,0,0.34),
      0 0 28px rgba(57,255,20,0.14);
    transform: translateY(-3px) scale(1.01);
  }

  @media (max-width: 720px) {
    width: 100%;
    padding: 16px 16px;
    border-radius: 18px;
    min-height: auto;
    gap: 12px;
    justify-self: stretch;
  }
`;

export const StepIndex = styled.div<{ $active?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  font-weight: 800;
  color: ${({ $active }) => ($active ? theme.colors.primary.black : theme.colors.primary.white)};
  background: ${({ $active }) => ($active ? theme.colors.primary.accent : 'rgba(255,255,255,0.08)')};
  border: 1px solid ${({ $active }) => ($active ? 'transparent' : 'rgba(57,255,20,0.18)')};
  box-shadow: ${({ $active }) => ($active ? theme.colors.shadows.neonGlowSm : '0 0 0 1px rgba(255,255,255,0.03)')};
  position: relative;
  z-index: 1;

  @media (max-width: 720px) {
    width: 28px;
    height: 28px;
    font-size: 10px;
  }
`;

export const FlowIcon = styled.div`
  width: 46px;
  height: 46px;
  background: linear-gradient(180deg, rgba(57,255,20,0.22), rgba(57,255,20,0.08));
  border: 1px solid rgba(57,255,20,0.28);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary.accent};
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.02), 0 18px 30px rgba(0,0,0,0.2);
  animation: ${softFloat} 4.5s ease-in-out infinite;

  @media (max-width: 720px) {
    width: 38px;
    height: 38px;
    border-radius: 14px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const FlowNodeText = styled.div`
  position: relative;
  z-index: 1;

  .name {
    font-family: ${theme.fonts.heading};
    font-size: 17px;
    font-weight: 700;
    color: ${theme.colors.primary.white};
    letter-spacing: -0.4px;
  }

  .desc {
    font-family: ${theme.fonts.body};
    font-size: 13px;
    color: rgba(255,255,255,0.74);
    margin-top: 6px;
    line-height: 1.65;
  }

  @media (max-width: 720px) {
    .name {
      font-size: 14px;
      line-height: 1.3;
    }

    .desc {
      font-size: 12px;
      margin-top: 4px;
      line-height: 1.55;
    }
  }
`;

export const FlowArrow = styled.div<{ $direction: 'left' | 'right' }>`
  width: 72px;
  height: 72px;
  position: relative;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    inset: 12px auto 12px auto;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(57,255,20,0.08),
      rgba(57,255,20,0.35),
      rgba(57,255,20,0.08)
    );
    box-shadow: 0 0 12px rgba(57,255,20,0.2);
  }

  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: ${theme.colors.primary.accent};
    box-shadow:
      0 0 0 6px rgba(57,255,20,0.08),
      0 0 20px rgba(57,255,20,0.42);
    animation: ${arrowPulse} 1.6s ease-in-out infinite;
  }

  @media (max-width: 720px) {
    width: 24px;
    height: 30px;
    justify-self: flex-start;
    align-self: flex-start;
    margin: -2px 0 0 14px;

    &::before {
      inset: 0 auto 0 10px;
      width: 2px;
      height: 30px;
    }

    &::after {
      width: 10px;
      height: 10px;
      left: 5px;
    }
  }
`;

export const FinalTradeNode = styled.div`
  grid-column: 1 / -1;
  margin-top: 18px;
  padding: 30px 28px;
  border-radius: 28px;
  border: 1px solid rgba(57,255,20,0.22);
  background:
    radial-gradient(circle at top left, rgba(57,255,20,0.16), transparent 26%),
    radial-gradient(circle at bottom right, rgba(57,255,20,0.05), transparent 28%),
    linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03),
    0 26px 50px rgba(0,0,0,0.32),
    0 0 32px rgba(57,255,20,0.08);
  backdrop-filter: blur(16px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .copy {
    min-width: 0;
  }

  .eyebrow {
    font-family: ${theme.fonts.body};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    margin-bottom: 10px;
  }

  .title {
    font-family: ${theme.fonts.heading};
    font-size: clamp(26px, 3vw, 36px);
    font-weight: 800;
    color: ${theme.colors.primary.white};
    letter-spacing: -1px;
    line-height: 1.1;
  }

  .text {
    margin-top: 8px;
    font-family: ${theme.fonts.body};
    font-size: 14px;
    line-height: 1.7;
    color: rgba(255,255,255,0.74);
    max-width: 520px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 999px;
    background: rgba(57,255,20,0.12);
    border: 1px solid rgba(57,255,20,0.24);
    color: ${theme.colors.primary.accent};
    font-family: ${theme.fonts.heading};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: ${theme.colors.shadows.neonGlowSm};
    white-space: nowrap;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;

    padding: 22px 18px;

    .badge {
      align-self: flex-start;
    }
  }

  @media (max-width: 420px) {
    .title {
      font-size: 22px;
    }

    .text {
      font-size: 13px;
    }

    .badge {
      font-size: 12px;
      padding: 10px 14px;
    }
  }
`;