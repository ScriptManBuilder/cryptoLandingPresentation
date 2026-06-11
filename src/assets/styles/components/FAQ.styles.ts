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
  max-width: 760px;
  margin: 64px auto 0;

  border-radius: ${theme.borderRadius.xl};

  overflow: hidden;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.02),
      rgba(255,255,255,.01)
    );

  border: 1px solid ${theme.colors.primary.border};

  backdrop-filter: blur(16px);

  box-shadow:
    0 0 0 1px rgba(255,255,255,.02),
    0 20px 40px rgba(0,0,0,.35);

  @media (max-width: 640px) {
    margin-top: 40px;
  }
    @media (max-width: 375px) {
  .text {
    font-size: 13px;
  }

  p {
    font-size: 12px;
  }
}
`;

export const FAQItem = styled.div<{ $open?: boolean }>`
  position: relative;
  border-bottom: 1px solid ${theme.colors.primary.border};

  background: ${({ $open }) =>
    $open
      ? 'linear-gradient(90deg, rgba(57,255,20,.06), transparent)'
      : 'transparent'};

  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ $open }) => ($open ? '3px' : '0')};
    height: 100%;
    background: ${theme.colors.primary.accentDark};
    transition: width 0.3s ease;
  }

  &:last-child {
    border-bottom: none;
  }
`;
export const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 22px 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  background: transparent;
  border: none;
  cursor: pointer;

  .icon {
    display: inline-block;
    transition: transform 1s ease;
    transform: rotate(0deg);
  }

  .icon.open {
    transform: rotate(90deg);
  }

  @media (max-width: 640px) {
    padding: 18px 20px;
    gap: 12px;
  }

  @media (max-width: 380px) {
    padding: 16px;
  }

  .text {
    flex: 1;

    font-family: ${theme.fonts.heading};
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;

    color: ${theme.colors.primary.text};

    transition: color 0.2s ease;

    @media (max-width: 640px) {
      font-size: 14px;
    }
  }

  &:hover .text {
    color: ${theme.colors.primary.accentDark};
  }
`;

export const FAQAnswer = styled.div<{ $open?: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) =>
    $open ? '1fr' : '0fr'};

  transition: grid-template-rows 0.35s ease;

  > div {
    overflow: hidden;
  }

  p {
    padding: 0 28px 24px;

    font-size: 14px;
    line-height: 1.8;

    color: ${theme.colors.primary.textMuted};

    @media (max-width: 640px) {
      padding: 0 20px 20px;
      font-size: 13px;
      line-height: 1.7;
    }

    @media (max-width: 380px) {
      padding: 0 16px 16px;
    }
  }
`;

