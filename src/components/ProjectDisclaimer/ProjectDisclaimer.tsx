import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

const DisclaimerSection = styled.section`
  position: relative;
  z-index: 2;
  padding: 18px 16px 0;

  @media (max-width: 640px) {
    padding: 14px 16px 0;
  }
`;

const DisclaimerCard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid rgba(57, 255, 20, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
    rgba(8, 12, 9, 0.92);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.02),
    0 0 28px rgba(57, 255, 20, 0.06);
  backdrop-filter: blur(14px);

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;

  @media (max-width: 640px) {
    padding: 16px;
    gap: 12px;
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
  border: 1px solid rgba(57, 255, 20, 0.22);
  color: ${theme.colors.primary.accent};
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  box-shadow: ${theme.colors.shadows.neonGlowSm};
`;

const Content = styled.div`
  min-width: 0;
`;

const Label = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.primary.accent};
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(16px, 2vw, 22px);
  font-weight: 800;
  letter-spacing: -0.6px;
  line-height: 1.15;
  color: ${theme.colors.primary.white};
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.68);
  max-width: 980px;

  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.65;
  }
`;

const FooterNote = styled.div`
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  border: 1px solid rgba(57, 255, 20, 0.16);
  background: rgba(57, 255, 20, 0.06);
  color: rgba(255, 255, 255, 0.76);
  font-family: ${theme.fonts.body};
  font-size: 12px;
  line-height: 1;

  strong {
    color: ${theme.colors.primary.accent};
    font-weight: 700;
  }
`;

export default function ProjectDisclaimer() {
  return (
    <DisclaimerSection>
      <DisclaimerCard>
        <Badge aria-hidden="true">i</Badge>
        <Content>
          <Label>For Recruiters & Hiring Managers</Label>
          <Title>Portfolio Showcase</Title>
          <Text>
            This project was created as a technical and design showcase, demonstrating the ability
            to build modern, high-converting product websites with premium visual presentation,
            responsive UX, scalable frontend architecture, and production-quality implementation.
          </Text>
          <Text>
            The website is intended for portfolio and demonstration purposes and does not represent
            an actively marketed commercial business.
          </Text>
          <FooterNote>
            <strong>Note:</strong> technical showcase only
          </FooterNote>
        </Content>
      </DisclaimerCard>
    </DisclaimerSection>
  );
}
