import styled from 'styled-components';
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
  grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
  gap: 16px;
  margin-top: 64px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
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

  &:hover {
    border-color: ${theme.colors.primary.borderMed};
    box-shadow: ${theme.colors.shadows.cardHover};
    transform: translateY(-4px);
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
`;