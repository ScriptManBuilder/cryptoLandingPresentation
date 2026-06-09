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
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBrand = styled.div`
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    .dot {
      width: 7px;
      height: 7px;
      background: ${theme.colors.primary.accent};
      border-radius: 50%;
      box-shadow: ${theme.colors.shadows.neonGlowSm};
    }

    .name {
      font-family: ${theme.fonts.heading};
      font-size: 17px;
      font-weight: 800;
      color: ${theme.colors.primary.white};
      letter-spacing: -0.5px;

      span {
        color: ${theme.colors.primary.accent};
      }
    }
  }

  .tagline {
    font-family: ${theme.fonts.body};
    font-size: 13px;
    color: rgba(255, 255, 255, 0.3);
    line-height: 1.75;
    max-width: 220px;
    margin-bottom: 24px;
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
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  transition: color 0.2s;

  .icon {
    font-size: 13px;
    opacity: 0.5;
  }

  &:hover {
    color: ${theme.colors.primary.accent};
  }
`;

export const FooterCol = styled.div`
  .col-title {
    font-family: ${theme.fonts.body};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
    margin-bottom: 18px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      font-family: ${theme.fonts.body};
      font-size: 13px;
      color: rgba(255, 255, 255, 0.45);
      transition: color 0.2s;

      &:hover {
        color: ${theme.colors.primary.white};
      }
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  max-width: ${theme.spacing.containerMaxWidth};
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  .copy {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: rgba(255, 255, 255, 0.18);
  }

  .legal {
    display: flex;
    gap: 20px;

    a {
      font-family: ${theme.fonts.body};
      font-size: 12px;
      color: rgba(255, 255, 255, 0.18);
      transition: color 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.45);
      }
    }
  }
`;
