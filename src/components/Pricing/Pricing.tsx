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
    amount: '$29',
    period: '/one-time',
    desc: 'Perfect for evaluation, testing and validating the strategy in live market conditions.',
    featured: false,
    features: [
      '90+ Supported Trading Pairs',
      'Testnet & Mainnet Trading',
      'Telegram Critical Alerts',
      'Email Support',
      'Basic User Guide',
    ],
  },
  {
    tier: 'Professional',
    amount: '$79',
    period: '/one-time',
    desc: 'Full-featured trading system with source code access and advanced customization.',
    featured: true,
    badge: 'Most Popular',
    features: [
      '90+ Supported Trading Pairs',
      'All Risk Management Modules',
      'Priority Support',
      'Strategy Updates',
      'Full Source Code Access',
      'Complete User Documentation',
    ],
  },
  {
    tier: 'Ultimate',
    amount: '$149',
    period: '/once',
    desc: 'One-time purchase with everything included for long-term operation and ownership.',
    featured: false,
    features: [
      'Everything In Professional',
      'Direct Developer Support',
      'Lifetime Updates',
      'Source Code Ownership',
      'Ready-Made Presets (1m / 5m / 15m)',
      'Optimized Strategy Configurations',
    ],
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
