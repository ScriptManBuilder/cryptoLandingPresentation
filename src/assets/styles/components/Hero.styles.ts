import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowBreath = keyframes`
  0%, 100% {
    text-shadow:
      0 0 20px rgba(57,255,20,0.35),
      0 0 60px rgba(57,255,20,0.15);
  }
  50% {
    text-shadow:
      0 0 30px rgba(57,255,20,0.55),
      0 0 80px rgba(57,255,20,0.25),
      0 0 120px rgba(57,255,20,0.10);
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary.heroBg};
  background-image: ${theme.colors.gradients.heroGradient};
  background-blend-mode: normal;
  position: relative;
  overflow: hidden;
  padding: 100px 40px 60px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(57, 255, 20, 0.06) 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 100px 24px 56px;
  }

  @media (max-width: 480px) {
    padding: 90px 16px 48px;
  }
`;

/* Two-column layout: text left, 3D right */
export const HeroInner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.9s ease forwards;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRight = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1.1s ease forwards;

  @media (max-width: 860px) {
    order: -1; /* 3D goes on top on mobile */
    max-width: 340px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }

  @media (max-width: 375px) {
    max-width: 240px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(57, 255, 20, 0.07);
  border: 1px solid rgba(57, 255, 20, 0.25);
  color: ${theme.colors.primary.accent};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 7px 18px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: 28px;
  animation: ${pulse} 2.5s ease-in-out infinite;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: ${theme.colors.primary.accent};
    border-radius: 50%;
    box-shadow: 0 0 8px ${theme.colors.primary.accent};
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 800;
  line-height: 0.95;
  color: ${theme.colors.primary.white};
  letter-spacing: -2.5px;
  margin-bottom: 10px;

  span {
    color: ${theme.colors.primary.accent};
    animation: ${glowBreath} 3.5s ease-in-out infinite;
    display: block;
    letter-spacing: -2.5px;
  }

  @media (max-width: 480px) {
    font-size: clamp(36px, 10vw, 56px);
    letter-spacing: -1.5px;

    span {
      letter-spacing: -1.5px;
    }
  }

  @media (max-width: 375px) {
    font-size: 34px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: clamp(14px, 2vw, 17px);
  color: rgba(255, 255, 255, 0.5);
  max-width: 440px;
  margin: 24px 0 44px;
  line-height: 1.75;
  font-weight: 400;

  @media (max-width: 860px) {
    margin: 20px auto 40px;
    max-width: 380px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 18px auto 32px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    justify-content: center;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 280px;
  }
`;

export const PrimaryButton = styled.button`
  padding: 14px 36px;
  background: ${theme.colors.primary.accent};
  color: ${theme.colors.primary.black};
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.normal};
  white-space: nowrap;

  &:hover {
    background: #45ff20;
    box-shadow: ${theme.colors.shadows.neonGlow};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 420px) {
    padding: 14px 24px;
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  padding: 14px 36px;
  background: transparent;
  color: rgba(255, 255, 255, 0.75);
  font-family: ${theme.fonts.heading};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.normal};
  white-space: nowrap;

  &:hover {
    border-color: rgba(57, 255, 20, 0.4);
    color: ${theme.colors.primary.accent};
    background: rgba(57, 255, 20, 0.05);
    transform: translateY(-3px);
  }

  @media (max-width: 420px) {
    padding: 14px 24px;
    width: 100%;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 0;
  margin-top: 56px;
  flex-wrap: wrap;
  border: 1px solid rgba(57, 255, 20, 0.1);
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.02);
  max-width: 480px;

  @media (max-width: 860px) {
    margin: 48px auto 0;
  }

  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const StatItem = styled.div`
  flex: 1;
  min-width: 80px;
  text-align: center;
  padding: 20px 12px;
  border-right: 1px solid rgba(57, 255, 20, 0.08);
  position: relative;

  &:last-child {
    border-right: none;
  }

  .value {
    font-family: ${theme.fonts.mono};
    font-size: 22px;
    font-weight: 700;
    color: ${theme.colors.primary.accent};
    line-height: 1;

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }

  .label {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 6px;
    font-family: ${theme.fonts.body};
  }
`;