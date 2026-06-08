import {
  TechSection,
  TechGrid,
  TechBadge,
  TechIcon,
  TechInfo,
  TechHighlight,
} from '../../assets/styles/components/Technology.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const STACK = [
  { icon: '🐍', name: 'Python 3.11', desc: 'Core runtime' },
  { icon: '🔄', name: 'Asyncio', desc: 'Concurrent I/O' },
  { icon: '🔌', name: 'WebSocket', desc: 'Live market feed' },
  { icon: '📈', name: 'Binance Futures API', desc: 'USD-M execution' },
  { icon: '🗄️', name: 'SQLite', desc: 'Local trade history' },
  { icon: '🖥️', name: 'Tkinter', desc: 'Desktop GUI' },
];

export default function Technology() {
  return (
    <TechSection id="technology">
      <SectionContainer>
        <SectionLabel>Technology</SectionLabel>
        <SectionTitle>Built With the Right Tools</SectionTitle>
        <SectionSubtitle>
          No heavy frameworks. Direct libraries, direct control.
          The stack runs locally — no cloud, no subscriptions.
        </SectionSubtitle>

        <TechGrid>
          {STACK.map((item) => (
            <TechBadge key={item.name}>
              <TechIcon>{item.icon}</TechIcon>
              <TechInfo>
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
              </TechInfo>
            </TechBadge>
          ))}
        </TechGrid>

        <div style={{ marginTop: 48 }}>
          <TechHighlight>
            <p>
              Built entirely in <strong>Python 3.11</strong> using <strong>asyncio</strong> — handles dozens of concurrent WebSocket
              streams with near-zero CPU overhead. All trade history and configuration persisted locally
              in <strong>SQLite</strong>. Packaged as a standalone <strong>Windows executable</strong> — no Python install,
              no internet dependency beyond the exchange API.
            </p>
          </TechHighlight>
        </div>
      </SectionContainer>
    </TechSection>
  );
}
