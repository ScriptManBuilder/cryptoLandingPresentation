import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {
  LegalPageWrapper,
  LegalHero,
  LegalBadge,
  LegalTitle,
  LegalMeta,
  LegalContainer,
  LegalSection,
  LegalSectionTitle,
  LegalText,
  LegalDivider,
  BackButton,
} from '../assets/styles/components/LegalPage.styles';

export default function Disclaimer() {
  return (
    <LegalPageWrapper>
      <Header />

      <LegalHero>
        <LegalBadge>Legal</LegalBadge>
        <LegalTitle>
          Risk <span>Disclaimer</span>
        </LegalTitle>
        <LegalMeta>Last updated: June 2026</LegalMeta>
      </LegalHero>

      <LegalContainer>
        <LegalSection>
          <LegalSectionTitle data-num="!">High Risk Warning</LegalSectionTitle>
          <LegalText>
            Cryptocurrency trading involves substantial risk and may not be
            suitable for all investors.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="!">No Guaranteed Results</LegalSectionTitle>
          <LegalText>
            Past performance does not guarantee future results. The software may
            generate losses, including the loss of your entire trading capital.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="!">Not Financial Advice</LegalSectionTitle>
          <LegalText>
            The information provided by this software and website is for
            informational purposes only and should not be considered financial or
            investment advice.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="!">User Responsibility</LegalSectionTitle>
          <LegalText>
            All trading decisions are made solely by the user. You are responsible
            for evaluating risks and determining whether cryptocurrency trading is
            appropriate for your circumstances.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="!">No Liability</LegalSectionTitle>
          <LegalText>
            We are not responsible for any losses, damages, missed opportunities,
            exchange outages, API failures, software bugs, market events, or other
            consequences arising from the use of the software.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="!">Use At Your Own Risk</LegalSectionTitle>
          <LegalText>
            By using the software, you acknowledge and accept all risks associated
            with cryptocurrency trading and automated trading systems.
          </LegalText>
        </LegalSection>

        <LegalDivider />

        <BackButton as={Link} to="/">
          ← Back to Home
        </BackButton>
      </LegalContainer>

      <Footer />
    </LegalPageWrapper>
  );
}