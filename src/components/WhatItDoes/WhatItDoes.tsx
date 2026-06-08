import {
  WhatItDoesSection,
  SectionContainer,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  FlowWrapper,
  FlowNode,
  FlowIcon,
  FlowNodeText,
  FlowArrow,
  FinalTradeNode,
} from '../../assets/styles/components/WhatItDoes.styles';

const FLOW_STEPS = [
  {
    icon: '📡',
    name: 'Market Data Stream',
    desc: 'Live WebSocket feed from Binance — 95+ USD-M Futures pairs in real time',
  },
  {
    icon: '⚡',
    name: 'Signal Engine',
    desc: 'RSI · Funding Rate · Volume Spike · HTF EMA trend · Deceleration detection',
  },
  {
    icon: '🧮',
    name: 'Confidence Score',
    desc: 'Signals combine into a 0–100 score. Min threshold + R:R ratio must both pass',
  },
  {
    icon: '🛡️',
    name: 'Risk Engine',
    desc: 'ATR-sized stops, daily loss guard, consecutive loss limit, correlation cap',
  },
  {
    icon: '🚀',
    name: 'Execution Engine',
    desc: 'Position size calculated from deposit × risk %. Order placed via Binance API',
  },
];

export default function WhatItDoes() {
  return (
    <WhatItDoesSection id="how-it-works">
      <SectionContainer>
        <SectionLabel>How It Works</SectionLabel>
        <SectionTitle>From Market Data to Executed Order</SectionTitle>
        <SectionSubtitle>
          Every trade flows through a deterministic pipeline.
          No guesswork — each step has a hard pass/fail condition.
        </SectionSubtitle>

        <FlowWrapper>
          {FLOW_STEPS.map((step, i) => (
            <div key={step.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {i > 0 && <FlowArrow />}
              <FlowNode $active={i === 2}>
                <FlowIcon>{step.icon}</FlowIcon>
                <FlowNodeText>
                  <div className="name">{step.name}</div>
                  <div className="desc">{step.desc}</div>
                </FlowNodeText>
              </FlowNode>
            </div>
          ))}
          <FlowArrow />
          <FinalTradeNode>Trade Executed</FinalTradeNode>
        </FlowWrapper>
      </SectionContainer>
    </WhatItDoesSection>
  );
}
