import { useState, type FormEvent } from 'react';
import {
  NavBar,
  NavLogo,
  NavLinks,
  NavCTA,
  ContactSection,
  ContactLayout,
  ContactInfo,
  ContactBadge,
  ContactTitle,
  ContactSubtitle,
  ContactMethods,
  ContactMethod,
  FormCard,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormRow,
  FormSubmit,
  FormDisclaimer,
  FooterWrapper,
  FooterTop,
  FooterBrand,
  FooterContact,
  FooterContactItem,
  FooterCol,
  FooterBottom,
} from '../../assets/styles/components/Layout.styles';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export function Navbar() {
  return (
    <NavBar>
      <NavLogo>
        <span className="dot" />
        <span className="name">
          Momentum<span>Scalper</span>
        </span>
      </NavLogo>

      <NavLinks>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#trading-logic">Strategy</a></li>
        <li><a href="#risk">Risk</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </NavLinks>

      <NavCTA onClick={scrollToContact}>Request Access</NavCTA>
    </NavBar>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', plan: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to backend / email service
    setSubmitted(true);
  };

  return (
    <ContactSection id="contact">
      <ContactLayout>
        <ContactInfo>
          <ContactBadge>Get Access</ContactBadge>
          <ContactTitle>
            Start trading<br />
            <span>smarter today.</span>
          </ContactTitle>
          <ContactSubtitle>
            Fill out the form and we'll get back to you within 24 hours with your license key and setup instructions.
          </ContactSubtitle>

          <ContactMethods>
            <ContactMethod href="mailto:contact@gmail.com">
              <span className="icon">✉️</span>
              <div className="details">
                <div className="label">General</div>
                <div className="value">contact@gmail.com</div>
              </div>
            </ContactMethod>

            <ContactMethod href="mailto:support@gmail.com">
              <span className="icon">🛠️</span>
              <div className="details">
                <div className="label">Support</div>
                <div className="value">support@gmail.com</div>
              </div>
            </ContactMethod>

            <ContactMethod href="https://t.me/placeholder" target="_blank" rel="noopener noreferrer">
              <span className="icon">✈️</span>
              <div className="details">
                <div className="label">Telegram</div>
                <div className="value">@MomentumScalper</div>
              </div>
            </ContactMethod>
          </ContactMethods>
        </ContactInfo>

        <FormCard>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <FormTitle style={{ color: '#39FF14', marginBottom: 8 }}>Request Received</FormTitle>
              <FormSubtitle style={{ marginBottom: 0 }}>
                We'll reach out within 24 hours with your access details.
              </FormSubtitle>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormTitle>Request Access</FormTitle>
              <FormSubtitle>No commitment. We'll answer all questions first.</FormSubtitle>

              <FormRow>
                <FormGroup>
                  <FormLabel>Your Name</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Preferred Plan</FormLabel>
                  <FormInput
                    type="text"
                    placeholder="Starter / Pro / Lifetime"
                    value={form.plan}
                    onChange={e => setForm(f => ({ ...f, plan: e.target.value }))}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel>Telegram or Email</FormLabel>
                <FormInput
                  type="text"
                  placeholder="@yourusername  or  you@email.com"
                  value={form.contact}
                  onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Message (optional)</FormLabel>
                <FormTextarea
                  placeholder="Tell us about your trading experience, questions, or anything else..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </FormGroup>

              <FormSubmit type="submit">Send Request →</FormSubmit>
              <FormDisclaimer>
                We do not share your info with third parties.
                Response time: &lt;24 hours.
              </FormDisclaimer>
            </form>
          )}
        </FormCard>
      </ContactLayout>
    </ContactSection>
  );
}

export function PageFooter() {
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
            <FooterContactItem href="mailto:contact@gmail.com">
              <span className="icon">✉️</span>
              contact@gmail.com
            </FooterContactItem>
            <FooterContactItem href="mailto:support@gmail.com">
              <span className="icon">🛠️</span>
              support@gmail.com
            </FooterContactItem>
            <FooterContactItem href="https://t.me/placeholder" target="_blank" rel="noopener noreferrer">
              <span className="icon">✈️</span>
              @MomentumScalper
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
            <li><a href="mailto:contact@gmail.com">General Inquiries</a></li>
            <li><a href="mailto:support@gmail.com">Support</a></li>
            <li><a href="https://t.me/placeholder" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="#contact">Request Access</a></li>
          </ul>
        </FooterCol>
      </FooterTop>

      <FooterBottom>
        <span className="copy">
          © {new Date().getFullYear()} MomentumScalper. All rights reserved.
        </span>
        <div className="legal">
          <a href="#">Risk Disclaimer</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </FooterBottom>
    </FooterWrapper>
  );
}
