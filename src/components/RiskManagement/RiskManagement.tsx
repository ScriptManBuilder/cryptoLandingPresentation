import {
  RiskSection,
  RiskGrid,
  RiskCard,
  RiskIcon,
  RiskTitle,
  RiskDescription,
  RiskBanner,
} from '../../assets/styles/components/RiskManagement.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const RISKS = [
  {
    icon: '�',
    title: 'Daily Loss Guard',
    desc: 'Bot pauses for the day when total daily PnL loss exceeds the configured % of deposit. Configurable: e.g. 8% = stop at −80 USDT on a $1000 account.',
  },
  {
    icon: '🔴',
    title: 'Consecutive Loss Limit',
    desc: 'After N losses in a row the bot halts and waits a configurable cooldown (minutes) before resuming. Prevents drawdown spirals.',
  },
  {
    icon: '🔗',
    title: 'Correlation Cap',
    desc: 'BTC, ETH and similar assets count as a group. Max correlated positions limits cluster exposure — not just total open count.',
  },
  {
    icon: '📍',
    title: 'ATR Stop-Loss',
    desc: 'SL = ATR × multiplier. Adapts to market volatility: tight stops in calm periods, wider when the market is moving fast.',
  },
  {
    icon: '⏱️',
    title: 'Max Position Age',
    desc: 'Any trade still open after the configured hours is force-closed. Prevents zombie positions drifting against you overnight.',
  },
  {
    icon: '📊',
    title: 'Max Price Drift',
    desc: 'Force-close triggered if price drifts a configured % from entry in the adverse direction — before the stop-loss is even hit.',
  },
];

export default function RiskManagement() {
  return (
    <RiskSection id="risk">
      <SectionContainer>
        <SectionLabel>Risk Management</SectionLabel>
        <SectionTitle>Risk Engine</SectionTitle>
        <SectionSubtitle>
          Every guard was added after a real incident.
          The bot closes itself down before it can blow an account.
        </SectionSubtitle>

        <RiskGrid>
          {RISKS.map((r) => (
            <RiskCard key={r.title}>
              <RiskIcon>{r.icon}</RiskIcon>
              <RiskTitle>{r.title}</RiskTitle>
              <RiskDescription>{r.desc}</RiskDescription>
            </RiskCard>
          ))}
        </RiskGrid>

        <RiskBanner>
          <span className="shield">🛡️</span>
          <div className="text">
            <h4>Capital preservation is the first objective</h4>
            <p>
              Every parameter in the Risk Engine is independently configurable.
              Set your daily loss %, max streak, cooldown timer, and position limits
              — the bot enforces them automatically, no manual intervention required.
            </p>
          </div>
        </RiskBanner>
      </SectionContainer>
    </RiskSection>
  );
}
