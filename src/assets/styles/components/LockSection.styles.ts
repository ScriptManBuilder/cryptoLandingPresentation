import styled, { keyframes, css } from 'styled-components';
import { theme } from '../theme';

/* ─────────────────────────────────────────────
   Keyframes
───────────────────────────────────────────── */
export const lockPulse = keyframes`
  0%, 100% {
    box-shadow:
      0 0 18px rgba(57,255,20,0.35),
      0 0 42px rgba(57,255,20,0.15);
  }
  50% {
    box-shadow:
      0 0 28px rgba(57,255,20,0.60),
      0 0 60px rgba(57,255,20,0.28),
      0 0 100px rgba(57,255,20,0.10);
  }
`;

export const particleFloat = keyframes`
  0%   { transform: translateY(0px)   translateX(0px)   scale(1);   opacity: 0.7; }
  33%  { transform: translateY(-14px) translateX(6px)   scale(1.2); opacity: 1;   }
  66%  { transform: translateY(-8px)  translateX(-8px)  scale(0.8); opacity: 0.5; }
  100% { transform: translateY(0px)   translateX(0px)   scale(1);   opacity: 0.7; }
`;

export const glowPop = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1);   }
  50%       { opacity: 1;   transform: scale(1.12); }
`;

export const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─────────────────────────────────────────────
   Card wrapper
───────────────────────────────────────────── */
export const UnlockCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 22px 28px;
  margin-top: 32px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(57, 255, 20, 0.18);
  backdrop-filter: blur(16px);
  overflow: hidden;
  cursor: default;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
  animation: ${fadeSlideIn} 0.9s ease 0.3s both;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(57, 255, 20, 0.04) 0%,
      transparent 60%
    );
    pointer-events: none;
    border-radius: inherit;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(57, 255, 20, 0.45);
    background: rgba(57, 255, 20, 0.04);
    box-shadow:
      0 12px 40px rgba(57,255,20,0.18),
      0 4px 16px rgba(0,0,0,0.35);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 20px 20px;
  }
`;

/* ─────────────────────────────────────────────
   Particles
───────────────────────────────────────────── */
const particleBase = css`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${theme.colors.primary.accent};
  pointer-events: none;
`;

export const Particle = styled.span<{ $delay: number; $x: number; $y: number }>`
  ${particleBase}
  left: ${({ $x }) => $x}%;
  top:  ${({ $y }) => $y}%;
  opacity: 0.7;
  animation: ${particleFloat} ${({ $delay }) => 2.4 + $delay * 0.6}s ease-in-out
    ${({ $delay }) => $delay * 0.35}s infinite;
`;

/* ─────────────────────────────────────────────
   Lock icon (pure CSS)
───────────────────────────────────────────── */
export const LockWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(57, 255, 20, 0.08);
  border: 1px solid rgba(57, 255, 20, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${lockPulse} 3s ease-in-out infinite;
  transition: transform 0.3s ease;

  ${UnlockCard}:hover & {
    transform: scale(1.05);
    animation: ${glowPop} 1.2s ease-in-out infinite;
  }
`;

export const LockBody = styled.div`
  position: relative;
  width: 26px;
  height: 20px;
  background: ${theme.colors.primary.accent};
  border-radius: 5px;
  margin-top: 10px;
  box-shadow:
    0 0 10px rgba(57,255,20,0.6),
    0 0 22px rgba(57,255,20,0.3);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${theme.colors.primary.heroBg};
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% + 1px);
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 6px;
    background: ${theme.colors.primary.heroBg};
    border-radius: 0 0 2px 2px;
  }
`;

export const LockShackle = styled.div`
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border: 3px solid ${theme.colors.primary.accent};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  box-shadow:
    0 0 8px rgba(57,255,20,0.5),
    0 0 16px rgba(57,255,20,0.25);
  transform-origin: bottom right;
  transition: transform 0.3s ease;

  ${UnlockCard}:hover & {
    transform: translateX(-50%) rotate(15deg);
  }
`;

/* ─────────────────────────────────────────────
   Right side content
───────────────────────────────────────────── */
export const UnlockContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UnlockTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(14px, 2.2vw, 17px);
  font-weight: 700;
  color: ${theme.colors.primary.white};
  margin-bottom: 4px;
  line-height: 1.25;
`;

export const UnlockDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 12px;
  line-height: 1.55;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.li`
  font-family: ${theme.fonts.body};
  font-size: 11.5px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;

  &::before {
    content: '✔';
    color: ${theme.colors.primary.accent};
    font-size: 10px;
    flex-shrink: 0;
    filter: drop-shadow(0 0 4px rgba(57,255,20,0.6));
  }

  ${UnlockCard}:hover & {
    color: rgba(255, 255, 255, 0.85);
  }
`;
