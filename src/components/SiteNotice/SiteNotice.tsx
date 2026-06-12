import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../assets/styles/theme';

const slideInTop = keyframes`
  from {
    transform: translateY(-120%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutTop = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-120%);
    opacity: 0;
  }
`;

const progressShrink = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

const closeButtonPulse = keyframes`
  0% {
    box-shadow:
      0 0 0 0 rgba(57, 255, 20, 0.12),
      0 0 16px rgba(57, 255, 20, 0.08);
    transform: translateY(0) scale(1);
  }

  50% {
    box-shadow:
      0 0 0 8px rgba(57, 255, 20, 0),
      0 0 22px rgba(57, 255, 20, 0.22);
    transform: translateY(-1px) scale(1.04);
  }

  100% {
    box-shadow:
      0 0 0 0 rgba(57, 255, 20, 0),
      0 0 16px rgba(57, 255, 20, 0.08);
    transform: translateY(0) scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 88px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  width: calc(100vw - 32px);
  max-width: 760px;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 96px;
    width: calc(100vw - 24px);
    max-width: 760px;
  }

  @media (max-width: 420px) {
    top: 92px;
    width: calc(100vw - 16px);
    max-width: calc(100vw - 16px);
  }

  @media (max-width: 375px) {
    top: 88px;
    width: calc(100vw - 12px);
    max-width: calc(100vw - 12px);
  }

  @media (max-width: 320px) {
    top: 84px;
    width: calc(100vw - 10px);
    max-width: calc(100vw - 10px);
  }
`;

const Card = styled.div<{ $closing: boolean }>`
  pointer-events: auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(57, 255, 20, 0.22);
  background:
    linear-gradient(135deg, rgba(10, 18, 11, 0.96), rgba(6, 10, 7, 0.92)),
    rgba(5, 8, 5, 0.96);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.02),
    0 0 28px rgba(57, 255, 20, 0.08);
  backdrop-filter: blur(16px);
  animation: ${({ $closing }) =>
    $closing
      ? css`${slideOutTop} 0.35s ease forwards`
      : css`${slideInTop} 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards`};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at top left, rgba(57, 255, 20, 0.14), transparent 28%),
      radial-gradient(circle at bottom right, rgba(57, 255, 20, 0.08), transparent 22%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    border-radius: 16px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 20px 14px;

  @media (max-width: 640px) {
    gap: 12px;
    padding: 14px 14px 12px;
  }

  @media (max-width: 420px) {
    padding: 12px 12px 10px;
    gap: 10px;
  }

  @media (max-width: 375px) {
    padding: 11px 10px 9px;
  }

  @media (max-width: 320px) {
    padding: 10px 9px 8px;
  }
`;

const Badge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(57, 255, 20, 0.18), rgba(57, 255, 20, 0.08));
  border: 1px solid rgba(57, 255, 20, 0.24);
  box-shadow: ${theme.colors.shadows.neonGlowSm};
  color: ${theme.colors.primary.accent};
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 800;

  @media (max-width: 420px) {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-size: 16px;
  }

  @media (max-width: 320px) {
    width: 34px;
    height: 34px;
    font-size: 15px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  min-width: 0;
  width: 100%;

  @media (max-width: 640px) {
    width: 100%;
    gap: 10px;
  }
`;

const HeaderText = styled.div`
  min-width: 0;
  flex: 1;
`;

const TextBlock = styled.div`
  min-width: 0;
  width: 100%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;

  @media (max-width: 420px) {
    gap: 6px;
    margin-bottom: 6px;
    align-items: flex-start;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

const Label = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.primary.accent};

  @media (max-width: 420px) {
    font-size: 10px;
    letter-spacing: 2px;
  }

  @media (max-width: 320px) {
    font-size: 9px;
  }
`;

const Countdown = styled.div`
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(57, 255, 20, 0.08);
  border: 1px solid rgba(57, 255, 20, 0.16);
  color: rgba(255, 255, 255, 0.82);
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 600;
  line-height: 1;

  @media (max-width: 420px) {
    padding: 5px 8px;
    font-size: 10px;
  }

  @media (max-width: 320px) {
    padding: 4px 7px;
    font-size: 9px;
  }
`;

const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(16px, 2vw, 21px);
  font-weight: 800;
  letter-spacing: -0.6px;
  line-height: 1.15;
  color: ${theme.colors.primary.white};
  margin-bottom: 8px;

  @media (max-width: 420px) {
    font-size: 15px;
    margin-bottom: 6px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
    line-height: 1.2;
  }
`;

const Text = styled.p`
  margin: 0;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 1.55;
  }

  @media (max-width: 375px) {
    font-size: 11px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    line-height: 1.45;
  }
`;

const CloseButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid rgba(57, 255, 20, 0.16);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.8);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.transitions.normal};
  flex-shrink: 0;
  animation: ${closeButtonPulse} 2.8s ease-in-out infinite;
  will-change: transform, box-shadow;

  &:hover {
    animation: none;

    background: rgba(57, 255, 20, 0.12);

    color: ${theme.colors.primary.white};

    border-color: rgba(57, 255, 20, 0.35);

    box-shadow:
      0 0 18px rgba(57,255,20,0.18),
      0 0 30px rgba(57,255,20,0.08);

    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.96);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(57, 255, 20, 0.24),
      0 0 20px rgba(57, 255, 20, 0.2);
  }

  @media (max-width: 640px) {
    margin-left: auto;
    align-self: flex-start;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 420px) {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    font-size: 14px;
  }

  @media (max-width: 320px) {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    font-size: 13px;
  }
`;
const ProgressTrack = styled.div`
  position: relative;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;

  @media (max-width: 420px) {
    height: 2px;
  }
`;

const ProgressBar = styled.div<{ $duration: number; $closing: boolean }>`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.primary.accentDark}, ${theme.colors.primary.accent});
  transform-origin: left center;
  animation: ${({ $closing, $duration }) =>
    $closing ? 'none' : css`${progressShrink} ${$duration}ms linear forwards`};
`;

export default function SiteNotice() {
  const duration = 60000; // change to 60 seconds
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);

  const handleClose = () => {
    if (isClosing) {
      return;
    }

    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
    }, 350);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft(previous => {
        if (previous <= 1) {
          window.clearInterval(interval);
          handleClose();
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible && !isClosing) {
    return null;
  }

  const alertElement = (
    <Overlay>
      <Card $closing={isClosing} role="status" aria-live="polite" aria-atomic="true">
        <Content>
          <HeaderRow>
            <Badge aria-hidden="true">i</Badge>

              <HeaderText>
                <LabelRow>
                  <Label>Portfolio Notice</Label>
                  <Countdown>{secondsLeft}s remaining</Countdown>
                </LabelRow>
                <Title>Portfolio Showcase</Title>
              </HeaderText>

              <CloseButton onClick={handleClose} aria-label="Close notice">
                ✕
              </CloseButton>
            </HeaderRow>

          <TextBlock>
            <Text>
              This project was created as a technical and design showcase, demonstrating the ability
              to build modern, high-converting product websites with premium visual presentation,
              responsive UX, scalable frontend architecture, and production-quality implementation.
            </Text>
            <Text style={{ marginTop: 10 }}>
              The website is intended for portfolio and demonstration purposes and does not represent
              an actively marketed commercial business.
            </Text>
          </TextBlock>
        </Content>

        <ProgressTrack>
          <ProgressBar $duration={duration} $closing={isClosing} />
        </ProgressTrack>
      </Card>
    </Overlay>
  );

  return createPortal(alertElement, document.body);
}
