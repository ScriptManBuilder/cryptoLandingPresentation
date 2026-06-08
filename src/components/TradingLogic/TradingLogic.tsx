import {
  TradingLogicSection,
  LogicLayout,
  SignalList,
  SignalItem,
  LogicArrow,
  ConfidenceBlock,
} from '../../assets/styles/components/TradingLogic.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const SIGNALS = [
  { name: 'RSI', strength: 74, desc: 'Min RSI threshold on selected timeframe' },
  { name: 'Funding Rate', strength: 62, desc: 'Min funding % to confirm directional bias' },
  { name: 'Volume Spike', strength: 88, desc: 'Current vol vs. average — min ratio required' },
  { name: 'HTF EMA Filter', strength: 79, desc: 'Higher-timeframe trend confirmation' },
  { name: 'Deceleration', strength: 71, desc: 'Price momentum slowing — entry window open' },
  { name: 'Min R:R Ratio', strength: 84, desc: 'TP distance must be ≥ min_rr × SL distance' },
];

export default function TradingLogic() {
  return (
    <TradingLogicSection id="trading-logic">
      <SectionContainer>
        <SectionLabel>Trading Logic</SectionLabel>
        <SectionTitle>The Signal Pipeline</SectionTitle>
        <SectionSubtitle>
          Six independent conditions must all pass before a trade is placed.
          Any rejection kills the setup — no partial entries.
        </SectionSubtitle>

        <LogicLayout>
          <SignalList>
            {SIGNALS.map((s) => (
              <SignalItem key={s.name} $strength={s.strength}>
                <div>
                  <span className="signal-name">{s.name}</span>
                  <div className="signal-desc">{s.desc}</div>
                </div>
                <div className="signal-bar" />
              </SignalItem>
            ))}
          </SignalList>

          <LogicArrow>
            <span>→</span>
            <span className="label">Score</span>
          </LogicArrow>

          <ConfidenceBlock>
            <div className="title">Confidence Score</div>
            <div className="score">81</div>
            <div className="unit">Min threshold: 65 — pass</div>
            <div className="decision">SHORT → Execute</div>
          </ConfidenceBlock>
        </LogicLayout>
      </SectionContainer>
    </TradingLogicSection>
  );
}
