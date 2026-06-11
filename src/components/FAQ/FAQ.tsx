import { useState } from 'react';
import {
  FAQSection,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
} from '../../assets/styles/components/FAQ.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const FAQS = [
  {
    q: 'Is profit guaranteed?',
    a: 'No. Trading involves real risk. Past performance does not guarantee future results. Use only capital you can afford to lose.',
  },
  {
    q: 'Does it trade automatically?',
    a: 'Yes. Once configured and running, the bot scans pairs, generates signals, sizes positions, and places orders without manual input.',
  },
  {
    q: 'Is a Binance account required?',
    a: 'Yes. Momentum Scalper connects exclusively to Binance USD-M Futures via API key. You need a Binance account with Futures enabled.',
  },
  {
    q: 'Does it work on Testnet?',
    a: 'Yes. You can point the bot at Binance Testnet to run fully automated with paper funds before going live.',
  },
  {
    q: 'What OS does it run on?',
    a: 'Windows 10 and 11. The bot ships as a standalone executable — no Python install required.',
  },
  {
    q: 'How is position size calculated?',
    a: 'Size = (Deposit × Risk%) ÷ Stop-loss distance. Risk % and leverage are fully configurable per your settings.',
  },
  {
    q: 'What is the Confidence Score?',
    a: 'A 0–100 number calculated from active signals (RSI, funding, volume, HTF, deceleration). Trades only fire when score ≥ your configured minimum AND R:R ≥ min_rr.',
  },
  {
    q: 'Can I limit which pairs it trades?',
    a: 'Yes. Enable the whitelist-only mode and add your preferred symbols in the Whitelist Manager tab. The bot ignores everything else.',
  },
  {
    q: 'What happens after a losing streak?',
    a: 'The Risk Engine pauses the bot after the configured number of consecutive losses and waits a cooldown period before resuming.',
  },
  {
    q: 'Is the source code included?',
    a: 'No. The bot ships as a compiled Windows executable. Source code is not distributed with any license tier.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <FAQSection id="faq">
      <SectionContainer>
        <SectionLabel>FAQ</SectionLabel>
        <SectionTitle>Common Questions</SectionTitle>
        <SectionSubtitle>
          Straight answers. No marketing fluff.
        </SectionSubtitle>

        <FAQList>
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} $open={openIndex === i}>
              <FAQQuestion type="button" onClick={() => toggle(i)}>
                <span className="text">{faq.q}</span>
                <span className={`icon ${openIndex === i ? 'open' : ''}`}>▼</span>
              </FAQQuestion>
              <FAQAnswer $open={openIndex === i}>
                <div>
                  <p>{faq.a}</p>
                </div>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </SectionContainer>
    </FAQSection>
  );
}
