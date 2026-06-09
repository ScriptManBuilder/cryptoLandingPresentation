import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

export const ScreenshotsSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  background: ${theme.colors.primary.pageBg};
`;

export const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(460px, 100%), 1fr));
  gap: 16px;
  margin-top: 64px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
    gap: 12px;
  }

  @media (max-width: 420px) {
    gap: 10px;
    margin-top: 32px;
  }
`;

export const ScreenshotCard = styled.div`
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  transition: ${theme.transitions.normal};
  background: ${theme.colors.primary.cardBg};
  backdrop-filter: blur(12px);
  box-shadow: ${theme.colors.shadows.cardShadow};
  cursor: zoom-in;

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    box-shadow: ${theme.colors.shadows.cardHover};
    transform: translateY(-4px);
  }

  @media (max-width: 375px) {
    border-radius: ${theme.borderRadius.md};
  }
`;

export const ScreenshotPreview = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${theme.colors.primary.altBg};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ScreenshotPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: ${theme.colors.primary.textLight};

  .icon {
    font-size: 38px;
  }

  .text {
    font-family: ${theme.fonts.body};
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
`;

export const ScreenshotLabel = styled.div`
  padding: 16px 20px;
  border-top: 1px solid ${theme.colors.primary.border};

  .title {
    font-family: ${theme.fonts.heading};
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.primary.text};
  }

  .desc {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: ${theme.colors.primary.textMuted};
    margin-top: 4px;
  }

  @media (max-width: 375px) {
    padding: 12px 14px;

    .title { font-size: 13px; }
    .desc  { font-size: 11px; }
  }
`;

export const ScreenshotImg = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  display: block;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.4s ease;
  position: absolute;
  inset: 0;
`;

export const ScreenshotSkeleton = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    ${theme.colors.primary.altBg} 25%,
    rgba(57,255,20,0.06) 50%,
    ${theme.colors.primary.altBg} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s infinite;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

/* ── Click hint overlay on card hover ── */
export const ClickHint = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 5, 5, 0.45);
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
  z-index: 2;

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    border-radius: 999px;
    border: 1px solid rgba(57, 255, 20, 0.5);
    background: rgba(57, 255, 20, 0.10);
    color: ${theme.colors.primary.accent};
    font-family: ${theme.fonts.heading};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    backdrop-filter: blur(8px);
  }

  ${ScreenshotCard}:hover & {
    opacity: 1;
  }
`;

/* ── Lightbox ── */
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.93); }
  to   { opacity: 1; transform: scale(1); }
`;

export const LightboxBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(5, 5, 5, 0.92);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: ${fadeIn} 0.2s ease;
  cursor: zoom-out;
`;

export const LightboxInner = styled.div`
  position: relative;
  max-width: min(1200px, 95vw);
  width: 100%;
  animation: ${scaleIn} 0.25s ease;
  cursor: default;
`;

export const LightboxImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 88vh;
  object-fit: contain;
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid rgba(57, 255, 20, 0.25);
  box-shadow:
    0 0 60px rgba(57,255,20,0.15),
    0 24px 80px rgba(0,0,0,0.6);
  display: block;
`;

export const LightboxCaption = styled.div`
  margin-top: 14px;
  text-align: center;

  .title {
    font-family: ${theme.fonts.heading};
    font-size: 15px;
    font-weight: 600;
    color: ${theme.colors.primary.white};
  }

  .desc {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: rgba(255,255,255,0.45);
    margin-top: 4px;
  }
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(57, 255, 20, 0.35);
  background: rgba(5, 5, 5, 0.9);
  color: ${theme.colors.primary.accent};
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.transitions.fast};
  z-index: 10;

  &:hover {
    background: rgba(57, 255, 20, 0.15);
    border-color: ${theme.colors.primary.accent};
  }

  @media (max-width: 480px) {
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;

export const LightboxNav = styled.button<{ $dir: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  ${({ $dir }) => ($dir === 'prev' ? 'left: -52px;' : 'right: -52px;')}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(57, 255, 20, 0.3);
  background: rgba(5, 5, 5, 0.85);
  color: ${theme.colors.primary.accent};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.transitions.fast};
  z-index: 10;

  &:hover {
    background: rgba(57, 255, 20, 0.12);
    border-color: ${theme.colors.primary.accent};
  }

  @media (max-width: 700px) {
    ${({ $dir }) => ($dir === 'prev' ? 'left: 6px;' : 'right: 6px;')}
    top: auto;
    bottom: -52px;
    transform: none;
  }
`;