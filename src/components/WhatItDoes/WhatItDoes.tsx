import {
  WhatItDoesSection,
  SectionContainer,
  SectionLabel,
  WhatItDoesTitle,
  WhatItDoesSubtitle,
  FlowWrapper,
  FlowStepShell,
  FlowCard,
  FlowIcon,
  FlowNodeText,
  FlowArrow,
  StepIndex,
  FinalTradeNode,
} from '../../assets/styles/components/WhatItDoes.styles';
import {
  Activity,
  BarChart3,
  Cpu,
  Rocket,
  Shield,
  type LucideIcon,
} from 'lucide-react';

const FLOW_STEPS = [
  {
    icon: Activity,
    name: 'Market Data Stream',
    desc: 'Live WebSocket feed from Binance — 95+ USD-M Futures pairs in real time',
  },
  {
    icon: Cpu,
    name: 'Signal Engine',
    desc: 'RSI · Funding Rate · Volume Spike · HTF EMA trend · Deceleration detection',
  },
  {
    icon: BarChart3,
    name: 'Confidence Score',
    desc: 'Signals combine into a 0–100 score. Min threshold + R:R ratio must both pass',
  },
  {
    icon: Shield,
    name: 'Risk Engine',
    desc: 'ATR-sized stops, daily loss guard, consecutive loss limit, correlation cap',
  },
  {
    icon: Rocket,
    name: 'Execution Engine',
    desc: 'Position size calculated from deposit × risk %. Order placed via Binance API',
  },
];

export default function WhatItDoes() {
  return (
    <WhatItDoesSection id="how-it-works">
      <SectionContainer>
        <SectionLabel>How It Works</SectionLabel>
        <WhatItDoesTitle>From Market Data to Executed Order</WhatItDoesTitle>
        <WhatItDoesSubtitle>
          Every trade flows through a deterministic pipeline.
          No guesswork — each step has a hard pass/fail condition.
        </WhatItDoesSubtitle>

        <FlowWrapper>
          {FLOW_STEPS.map((step, i) => {
            const Icon = step.icon as LucideIcon;
            const side = i % 2 === 0 ? 'left' : 'right';
            const isLeft = side === 'left';

            return (
              <FlowStepShell key={step.name} $side={side}>
                <FlowCard $active={i === 2} $isLeft={isLeft}>
                  <StepIndex $active={i === 2}>{String(i + 1).padStart(2, '0')}</StepIndex>
                  <FlowIcon>
                    <Icon size={22} strokeWidth={2.1} />
                  </FlowIcon>
                  <FlowNodeText>
                    <div className="name">{step.name}</div>
                    <div className="desc">{step.desc}</div>
                  </FlowNodeText>
                </FlowCard>

                {i < FLOW_STEPS.length - 1 && <FlowArrow $direction={side === 'left' ? 'right' : 'left'} />}
              </FlowStepShell>
            );
          })}

          <FinalTradeNode>
            <div className="copy">
              <div className="eyebrow">Execution complete</div>
              <div className="title">Trade Executed</div>
              <div className="text">
                All gates are green. The bot has validated signal strength, sized the
                position, protected downside, and sent the order.
              </div>
            </div>

            <div className="badge">
              <Rocket size={16} strokeWidth={2.4} />
              Order sent
            </div>
          </FinalTradeNode>
        </FlowWrapper>
      </SectionContainer>
    </WhatItDoesSection>
  );
}
