import { useEffect, useState, type FormEvent } from 'react';
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
  FormAgreement,
  FormSuccessAlert,
} from '../../assets/styles/components/Layout.styles';
import { Link } from 'react-router-dom';


const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'contact@gmail.com';
const SUPPORT_EMAIL  = import.meta.env.VITE_SUPPORT_EMAIL  ?? 'support@gmail.com';
const TELEGRAM_URL   = import.meta.env.VITE_TELEGRAM       ?? 'https://t.me/placeholder';
const TELEGRAM_HANDLE = TELEGRAM_URL.replace('https://t.me/', '@');

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', plan: '', message: '' });

  useEffect(() => {
    if (!submitted) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSubmitted(false);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — wire to backend / email service
    setSubmitted(true);
    clearForm();
  };

  const clearForm = () => {
    setForm({ name: '', contact: '', plan: '', message: '' });
    setAccepted(false);
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
            <>
              <FormSuccessAlert role="status" aria-live="polite">
                <span className="icon">✓</span>
                <div className="content">
                  <div className="title">Request received</div>
                  <div className="text">
                    We&apos;ll reach out within 24 hours with your access details.
                  </div>
                </div>
              </FormSuccessAlert>

              <div style={{ textAlign: 'center', padding: '28px 0 10px' }}>
                <FormTitle style={{ color: '#39FF14', marginBottom: 8 }}>Message sent</FormTitle>
                <FormSubtitle style={{ marginBottom: 0 }}>
                  Thanks. The alert will stay visible for 8 seconds, then the form will be ready again.
                </FormSubtitle>
             
              </div>
            </>
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
                    maxLength={120}
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
                    maxLength={120}
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
                  maxLength={120}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Message (optional)</FormLabel>
                <FormTextarea
                  placeholder="Tell us about your trading experience, questions, or anything else..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  maxLength={500}
                />
              </FormGroup>
                            <FormAgreement>
                <label>
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    required
                  />

                  <span>
                    I have read and agree to the{' '}
                    <Link to="/terms">Terms of Use</Link>,{' '}
                    <Link to="/privacy">Privacy Policy</Link> and{' '}
                    <Link to="/disclaimer">Risk Disclaimer</Link>.
                  </span>
                </label>
              </FormAgreement>
              {/* <FormSubmit type="submit"></FormSubmit> */}
              

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
