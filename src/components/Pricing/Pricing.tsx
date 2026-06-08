import {
  PricingSection,
  PricingGrid,
  PricingCard,
  PricingBadge,
  PricingTier,
  PricingPrice,
  PricingDesc,
  PricingFeatures,
  PricingFeatureItem,
  PricingButton,
} from '../../assets/styles/components/Pricing.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const scrollToContact = () =>
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

const PLANS = [
  {
    tier: 'Starter',
    amount: '$49',
    period: '/mo',
    desc: 'Good entry point for live testing with real capital.',
    featured: false,
    features: ['Up to 10 active pairs', 'Basic risk controls', 'Email support', '1 license key'],
  },
  {
    tier: 'Pro',
    amount: '$99',
    period: '/mo',
    desc: 'Full access — no limits on pairs or features.',
    featured: true,
    badge: 'Most Popular',
    features: ['Unlimited pairs', 'All risk modules', 'Priority support', 'Strategy updates', '2 license keys'],
  },
  {
    tier: 'Lifetime',
    amount: '$299',
    period: ' once',
    desc: 'Pay once, use forever. Best long-term value.',
    featured: false,
    features: ['Everything in Pro', 'Lifetime updates', 'Direct support', '3 license keys'],
  },
];

export default function Pricing() {  return (
    <PricingSection id="pricing">
      <SectionContainer>
        <SectionLabel>Pricing</SectionLabel>
        <SectionTitle>Simple, Transparent Pricing</SectionTitle>
        <SectionSubtitle>
          No hidden fees. Cancel anytime. License key delivered instantly.
        </SectionSubtitle>

        <PricingGrid>
          {PLANS.map((plan) => (
            <PricingCard key={plan.tier} $featured={plan.featured}>
              {plan.featured && plan.badge && <PricingBadge>{plan.badge}</PricingBadge>}
              <PricingTier>{plan.tier}</PricingTier>
              <PricingPrice>
                <span className="amount">{plan.amount}</span>
                <span className="period">{plan.period}</span>
              </PricingPrice>
              <PricingDesc>{plan.desc}</PricingDesc>
              <PricingFeatures>
                {plan.features.map((f) => (
                  <PricingFeatureItem key={f}>{f}</PricingFeatureItem>
                ))}
              </PricingFeatures>
              <PricingButton
                $featured={plan.featured}
                onClick={scrollToContact}
              >
                Get {plan.tier}
              </PricingButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </SectionContainer>
    </PricingSection>
  );
}
