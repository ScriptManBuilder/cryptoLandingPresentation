import React from 'react';
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

export default function TermsConditions() {
  return (
    <LegalPageWrapper>
      <Header />

      <LegalHero>
        <LegalBadge>Legal</LegalBadge>
        <LegalTitle>
          Terms &amp; <span>Conditions</span>
        </LegalTitle>
        <LegalMeta>Last updated: June 2026</LegalMeta>
      </LegalHero>

      <LegalContainer>
        <LegalSection>
          <LegalSectionTitle data-num="1">Acceptance of Terms</LegalSectionTitle>
          <LegalText>
            By accessing or using this website and the Momentum Short Scalper software,
            you agree to be bound by these Terms &amp; Conditions.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="2">Software License</LegalSectionTitle>
          <LegalText>
            We grant you a limited, non-exclusive, non-transferable license to use
            the software for personal or business purposes.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="3">No Financial Advice</LegalSectionTitle>
          <LegalText>
            The software is provided for informational and automation purposes only.
            Nothing on this website constitutes financial, investment, legal, or tax advice.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="4">User Responsibility</LegalSectionTitle>
          <LegalText>
            Users are solely responsible for their trading decisions, exchange accounts,
            API keys, positions, profits, and losses.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="5">No Performance Guarantee</LegalSectionTitle>
          <LegalText>
            We do not guarantee profits, returns, trading performance, or future
            results of any kind.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="6">Limitation of Liability</LegalSectionTitle>
          <LegalText>
            Under no circumstances shall we be liable for any direct, indirect,
            incidental, special, or consequential damages resulting from the use of the software.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="7">Modifications</LegalSectionTitle>
          <LegalText>
            We reserve the right to modify these terms at any time without prior notice.
          </LegalText>
        </LegalSection>

        <LegalSection>
          <LegalSectionTitle data-num="8">Contact</LegalSectionTitle>
          <LegalText>
            For questions regarding these Terms &amp; Conditions, please reach out:
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