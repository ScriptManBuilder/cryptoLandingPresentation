import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const flowDown = keyframes`
  0% { opacity: 0; transform: translateY(-6px); }
  100% { opacity: 1; transform: translateY(0); }
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

/* -- Section-specific -- */

export const WhatItDoesSection = styled.section`
  padding: ${theme.spacing.sectionPadding};
  background: ${theme.colors.primary.altBg};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }
`;

export const FlowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 64px;
`;

export const FlowNode = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${({ $active }) =>
    $active ? 'rgba(57,255,20,0.07)' : theme.colors.primary.cardBg};
  border: 1px solid ${({ $active }) =>
    $active ? theme.colors.primary.borderStrong : theme.colors.primary.border};
  border-radius: ${theme.borderRadius.md};
  padding: 20px 36px;
  min-width: 280px;
  max-width: 420px;
  width: 100%;
  animation: ${flowDown} 0.4s ease forwards;
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.colors.shadows.cardShadow};
  backdrop-filter: blur(12px);

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(255,255,255,0.95);
    box-shadow: ${theme.colors.shadows.cardHover};
    transform: translateY(-2px);
  }
`;

export const FlowIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

export const FlowNodeText = styled.div`
  .name {
    font-family: ${theme.fonts.heading};
    font-size: 15px;
    font-weight: 700;
    color: ${theme.colors.primary.text};
  }
  .desc {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: ${theme.colors.primary.textMuted};
    margin-top: 3px;
  }
`;

export const FlowArrow = styled.div`
  width: 1px;
  height: 28px;
  background: linear-gradient(180deg, ${theme.colors.primary.accentDark}, rgba(0,199,43,0.1));
  position: relative;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid ${theme.colors.primary.accentDark};
  }
`;

export const FinalTradeNode = styled.div`
  margin-top: 24px;
  padding: 14px 48px;
  background: ${theme.colors.primary.accent};
  color: ${theme.colors.primary.black};
  font-family: ${theme.fonts.heading};
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${theme.borderRadius.sm};
  box-shadow: ${theme.colors.shadows.neonGlowSm};
`;