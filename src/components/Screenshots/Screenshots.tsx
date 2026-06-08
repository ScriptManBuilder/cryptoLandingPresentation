import {
  ScreenshotsSection,
  ScreenshotsGrid,
  ScreenshotCard,
  ScreenshotPreview,
  ScreenshotPlaceholder,
  ScreenshotLabel,
} from '../../assets/styles/components/Screenshots.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const SCREENSHOTS = [
  { title: 'Main Dashboard', desc: 'Live PnL, open positions, active pairs' },
  { title: 'Strategy Settings', desc: 'Configure signals, thresholds, timeframes' },
  { title: 'Whitelist Manager', desc: 'Select which pairs the bot trades' },
  { title: 'Runtime Logs', desc: 'Real-time event stream and trade history' },
];

export default function Screenshots() {
  return (
    <ScreenshotsSection id="screenshots">
      <SectionContainer>
        <SectionLabel>Screenshots</SectionLabel>
        <SectionTitle>See It in Action</SectionTitle>
        <SectionSubtitle>
          A clean desktop interface — everything you need, nothing you don't.
        </SectionSubtitle>

        <ScreenshotsGrid>
          {SCREENSHOTS.map((s) => (
            <ScreenshotCard key={s.title}>
              <ScreenshotPreview>
                <ScreenshotPlaceholder>
                  <span className="icon">🖥️</span>
                  <span className="text">Screenshot placeholder</span>
                </ScreenshotPlaceholder>
              </ScreenshotPreview>
              <ScreenshotLabel>
                <div className="title">{s.title}</div>
                <div className="desc">{s.desc}</div>
              </ScreenshotLabel>
            </ScreenshotCard>
          ))}
        </ScreenshotsGrid>
      </SectionContainer>
    </ScreenshotsSection>
  );
}
