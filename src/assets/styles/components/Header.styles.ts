import styled from 'styled-components';
import { theme } from '../theme';

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(5, 5, 5, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 420px) {
    height: 62px;
    padding: 0 16px;
  }

  @media (max-width: 375px) {
    height: 58px;
    padding: 0 14px;
  }

  @media (max-width: 320px) {
    height: 56px;
    padding: 0 12px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

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

    @media (max-width: 420px) {
      font-size: 15px;
    }

    @media (max-width: 375px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 13px;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2px;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
  position: relative;
  display: block;
  padding: 8px 14px;

  font-family: ${theme.fonts.body};
  font-size: 13px;
  font-weight: 500;

  color: rgba(255,255,255,.65);

  transition: ${theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 4px;

    height: 2px;

    background: ${theme.colors.primary.accent};

    transform: scaleX(0);
    transform-origin: center;

    transition: 0.25s ease;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
`;

export const NavCTA = styled.button`
padding: 10px 20px;
background: linear-gradient(
    135deg,
    #39ff14,
    #22cc22
  );

  color: #000;

  font-weight: 700;

  border-radius: 10px;

  border: none;

  box-shadow:
    0 4px 20px rgba(57,255,20,.25);

  transition: .25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 30px rgba(57,255,20,.35);
  }

  @media (max-width: 420px) {
    padding: 8px 16px;
    font-size: 12px;
  }

  @media (max-width: 375px) {
    padding: 7px 14px;
    font-size: 11px;
  }

  @media (max-width: 320px) {
    padding: 6px 12px;
    font-size: 10px;
  }
`;
