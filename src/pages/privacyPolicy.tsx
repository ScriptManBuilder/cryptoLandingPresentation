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
  LegalContactBlock,
  LegalContactLink,
  LegalDivider,
  BackButton,
} from '../assets/styles/components/LegalPage.styles';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'contact@gmail.com';

export default function PrivacyPolicy() {
  return (
    <LegalPageWrapper>
      <Header />

      <LegalHero>
        <LegalBadge>Legal</LegalBadge>
        <LegalTitle>
          Privacy <span>Policy</span>
        </LegalTitle>
        <LegalMeta>Last updated: June 2026</LegalMeta>
      </LegalHero>

      <LegalContainer>
        <LegalSection>
          <LegalSectionTitle data-num="1">Information We Collect</LegalSectionTitle>
          <LegalText>
            We may collect basic information such as your name, email address,
            contact information, and website usage analytics.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="2">How We Use Information</LegalSectionTitle>
          <LegalText>
            Information is used to provide services, improve user experience,
            communicate with customers, and maintain platform security.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="3">Data Security</LegalSectionTitle>
          <LegalText>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or misuse.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="4">Third-Party Services</LegalSectionTitle>
          <LegalText>
            Our website may use third-party analytics, payment processors, and
            communication services.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="5">Cookies</LegalSectionTitle>
          <LegalText>
            We may use cookies and similar technologies to improve website
            functionality and user experience.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="6">Your Rights</LegalSectionTitle>
          <LegalText>
            You may request access, correction, or deletion of your personal data
            where applicable under local laws.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="7">Contact</LegalSectionTitle>
          <LegalText>
            If you have any privacy-related questions, please reach out:
          </LegalText>
          <LegalContactBlock>
            <LegalContactLink href={`mailto:${CONTACT_EMAIL}`}>
              ✉️ {CONTACT_EMAIL}
            </LegalContactLink>
          </LegalContactBlock>
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