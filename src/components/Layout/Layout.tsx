import { useState, type FormEvent } from 'react';
import {
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
} from '../../assets/styles/components/Layout.styles';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'contact@gmail.com';
const SUPPORT_EMAIL  = import.meta.env.VITE_SUPPORT_EMAIL  ?? 'support@gmail.com';
const TELEGRAM_URL   = import.meta.env.VITE_TELEGRAM       ?? 'https://t.me/placeholder';
const TELEGRAM_HANDLE = TELEGRAM_URL.replace('https://t.me/', '@');

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
            <ContactMethod href={`mailto:${CONTACT_EMAIL}`}>
              <span className="icon">✉️</span>
              <div className="details">
                <div className="label">General</div>
                <div className="value">{CONTACT_EMAIL}</div>
              </div>
            </ContactMethod>

            <ContactMethod href={`mailto:${SUPPORT_EMAIL}`}>
              <span className="icon">🛠️</span>
              <div className="details">
                <div className="label">Support</div>
                <div className="value">{SUPPORT_EMAIL}</div>
              </div>
            </ContactMethod>

            <ContactMethod href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="icon">✈️</span>
              <div className="details">
                <div className="label">Telegram</div>
                <div className="value">{TELEGRAM_HANDLE}</div>
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
