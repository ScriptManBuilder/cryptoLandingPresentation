import { Link } from 'react-router-dom';
import {
  FooterWrapper,
  FooterTop,
  FooterBrand,
  FooterContact,
  FooterContactItem,
  FooterCol,
  FooterBottom,
} from '../../assets/styles/components/Footer.styles';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'contact@gmail.com';
const SUPPORT_EMAIL  = import.meta.env.VITE_SUPPORT_EMAIL  ?? 'support@gmail.com';
const TELEGRAM_URL   = import.meta.env.VITE_TELEGRAM       ?? 'https://t.me/placeholder';
const TELEGRAM_HANDLE = TELEGRAM_URL.replace('https://t.me/', '@');

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterBrand>
          <div className="logo">
            <span className="dot" />
            <span className="name">
              Momentum<span>Scalper</span>
            </span>
          </div>
          <p className="tagline">
            Automated crypto futures trading powered by momentum analysis and risk management.
          </p>
          <FooterContact>
            <FooterContactItem href={`mailto:${CONTACT_EMAIL}`}>
              <span className="icon">✉️</span>
              {CONTACT_EMAIL}
            </FooterContactItem>
            <FooterContactItem href={`mailto:${SUPPORT_EMAIL}`}>
              <span className="icon">🛠️</span>
              {SUPPORT_EMAIL}
            </FooterContactItem>
            <FooterContactItem href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="icon">✈️</span>
              {TELEGRAM_HANDLE}
            </FooterContactItem>
          </FooterContact>
        </FooterBrand>

        <FooterCol>
          <div className="col-title">Product</div>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#trading-logic">Strategy</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
          </ul>
        </FooterCol>

        <FooterCol>
          <div className="col-title">Details</div>
          <ul>
            <li><a href="#risk">Risk Management</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </FooterCol>

        <FooterCol>
          <div className="col-title">Contact</div>
          <ul>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>General Inquiries</a></li>
            <li><a href={`mailto:${SUPPORT_EMAIL}`}>Support</a></li>
            <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="#contact">Request Access</a></li>
          </ul>
        </FooterCol>
      </FooterTop>

      <FooterBottom>
        <span className="copy">
          © {new Date().getFullYear()} MomentumScalper. All rights reserved.
        </span>
        <div className="legal">
          <Link to="/disclaimer">Risk Disclaimer</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </FooterBottom>
    </FooterWrapper>
  );
}
