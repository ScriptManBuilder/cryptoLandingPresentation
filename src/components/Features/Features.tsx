import {
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  FeatureNumber,
  FeatureTitle,
  FeatureDescription,
  FeatureTag,
} from '../../assets/styles/components/Features.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const FEATURES = [
  {
    title: 'Real-Time WebSocket Stream',
    desc: 'Persistent WebSocket connections to Binance — 95+ USD-M Futures pairs processed live. No REST polling, no delays.',
    tag: 'Data',
  },
  {
    title: 'Automated Signal Detection',
    desc: 'Strategy engine detects momentum-short setups using RSI, funding rate, volume spike, HTF EMA, and deceleration patterns.',
    tag: 'Strategy',
  },
  {
    title: 'ATR-Based Risk Sizing',
    desc: 'Stop-loss and take-profit levels are calculated per-setup from ATR — adaptive to volatility, not fixed percentages.',
    tag: 'Risk',
  },
  {
    title: 'HTF Trend Filter',
    desc: 'Optional higher-timeframe EMA confirmation before entry. Cuts false signals on counter-trend setups.',
    tag: 'Filter',
  },
  {
    title: 'Position & Correlation Control',
    desc: 'Cap on max simultaneous positions, max per side (long/short), and correlated-asset groups to limit cluster risk.',
    tag: 'Protection',
  },
  {
    title: 'Desktop GUI — Tkinter',
    desc: 'Windows-native GUI for real-time monitoring, manual controls, strategy settings, whitelist manager and runtime logs.',
    tag: 'GUI',
  },
  {
    title: 'Trade History in SQLite',
    desc: 'Every execution, PnL, and event is stored locally in SQLite. No cloud dependency. Full offline history.',
    tag: 'Storage',
  },
  {
    title: 'Configurable Market Filters',
    desc: 'Min 24h volume, min/max ATR %, max 5m candle move, min funding rate — filter out illiquid or chaotic symbols.',
    tag: 'Filters',
  },
  {
    title: 'Confidence Score Engine',
    desc: 'Signals produce a 0–100 confidence score. Trades only execute when score and R:R ratio both meet the configured threshold.',
    tag: 'Alpha',
  },
];

export default function Features() {
  return (
    <FeaturesSection id="features">
      <SectionContainer>
        <SectionLabel>Features</SectionLabel>
        <SectionTitle>What's Inside</SectionTitle>
        <SectionSubtitle>
          Every module was built for a specific job.
          No wrappers around wrappers — direct, testable, replaceable.
        </SectionSubtitle>

        <FeaturesGrid>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title}>
              <FeatureNumber>{String(i + 1).padStart(2, '0')}</FeatureNumber>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureDescription>{f.desc}</FeatureDescription>
              <FeatureTag>{f.tag}</FeatureTag>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </SectionContainer>
    </FeaturesSection>
  );
}
