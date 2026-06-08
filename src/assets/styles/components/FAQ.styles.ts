import styled from 'styled-components';
import { theme } from '../theme';

export const FAQSection = styled.section`
  padding: ${theme.spacing.sectionPadding};

  @media (max-width: 640px) {
    padding: ${theme.spacing.sectionPaddingMobile};
  }

  background: ${theme.colors.primary.pageBg};
`;

export const FAQList = styled.div`
  max-width: 720px;
  margin: 64px auto 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid ${theme.colors.primary.border};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.colors.shadows.cardShadow};
  backdrop-filter: blur(12px);
  background: ${theme.colors.primary.cardBg};
`;

export const FAQItem = styled.div<{ $open?: boolean }>`
  border-bottom: 1px solid ${theme.colors.primary.border};
  background: ${({ $open }) =>
    $open ? 'rgba(57,255,20,0.04)' : 'transparent'};
  transition: ${theme.transitions.normal};

  &:last-child {
    border-bottom: none;
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 22px 28px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;

  .text {
    font-family: ${theme.fonts.heading};
    font-size: 15px;
    font-weight: 600;
    color: ${theme.colors.primary.text};
    transition: color 0.2s;
  }

  .icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    background: rgba(57, 255, 20, 0.07);
    border: 1px solid ${theme.colors.primary.border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary.accentDark};
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    transition: ${theme.transitions.normal};
  }

  &:hover .text {
    color: ${theme.colors.primary.accentDark};
  }

  &:hover .icon {
    border-color: ${theme.colors.primary.borderMed};
    background: rgba(57, 255, 20, 0.12);
  }
`;

export const FAQAnswer = styled.div<{ $open?: boolean }>`
  max-height: ${({ $open }) => ($open ? '220px' : '0')};
  overflow: hidden;
  transition: max-height 0.35s ease;

  p {
    font-family: ${theme.fonts.body};
    padding: 0 28px 22px;
    font-size: 14px;
    color: ${theme.colors.primary.textMuted};
    line-height: 1.8;
  }
`;