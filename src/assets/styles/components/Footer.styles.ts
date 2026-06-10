import styled from 'styled-components';
import { theme } from '../theme';

export const FooterWrapper = styled.footer`
  background: #020202;
  border-top: 1px solid rgba(57, 255, 20, 0.08);
`;

export const FooterTop = styled.div`
  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 56px 40px 48px;

  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 40px 20px;
  }

  @media (max-width: 375px) {
    padding: 36px 18px;
  }

  @media (max-width: 320px) {
    padding: 32px 16px;
  }
`;
export const FooterBrand = styled.div`
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;

    .dot {
      width: 8px;
      height: 8px;
      background: ${theme.colors.primary.accent};
      border-radius: 50%;
      box-shadow: ${theme.colors.shadows.neonGlowSm};
    }

    .name {
      font-family: ${theme.fonts.heading};
      font-size: 18px;
      font-weight: 800;
      color: ${theme.colors.primary.white};

      span {
        color: ${theme.colors.primary.accent};
      }
    }
  }

  .tagline {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: rgba(255,255,255,0.55);
    line-height: 1.8;
    max-width: 280px;
    margin-bottom: 26px;
  }

  @media (max-width: 420px) {
    .tagline {
      max-width: 100%;
    }
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: ${theme.fonts.body};
  font-size: 14px;

  color: rgba(255,255,255,0.7);

  transition: all .25s ease;

  .icon {
    font-size: 14px;
    opacity: .8;
  }

  &:hover {
    color: ${theme.colors.primary.accent};
    transform: translateX(4px);
  }
`;
export const FooterCol = styled.div`
  .col-title {
    font-family: ${theme.fonts.body};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    margin-bottom: 18px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
      position: relative;

      width: fit-content;

      font-family: ${theme.fonts.body};
      font-size: 14px;

      color: rgba(255,255,255,0.72);

      transition: all .25s ease;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background: ${theme.colors.primary.accent};
        transition: width .25s ease;
      }

      &:hover {
        color: ${theme.colors.primary.white};
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.06);

  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;

  padding: 22px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  .copy {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: rgba(255,255,255,0.35);
  }

  @media (max-width: 420px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: 375px) {
    padding: 18px;
  }

  @media (max-width: 320px) {
    padding: 16px;
  }

  .legal {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    a {
      position: relative;

      font-family: ${theme.fonts.body};
      font-size: 12px;

      color: rgba(255,255,255,0.55);

      transition: all .25s ease;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 1px;
        background: ${theme.colors.primary.accent};
        transition: width .25s ease;
      }

      &:hover {
        color: ${theme.colors.primary.white};
      }

      &:hover::after {
        width: 100%;
      }
    }

    @media (max-width: 420px) {
      justify-content: center;
      gap: 14px;
    }
  }
`;
