import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ScreenshotsSection,
  ScreenshotsGrid,
  ScreenshotCard,
  ScreenshotPreview,
  ScreenshotLabel,
  ScreenshotImg,
  ScreenshotSkeleton,
  ClickHint,
  LightboxBackdrop,
  LightboxInner,
  LightboxImg,
  LightboxCaption,
  LightboxClose,
  LightboxNav,
} from '../../assets/styles/components/Screenshots.styles';
import { SectionContainer, SectionLabel, SectionTitle, SectionSubtitle } from '../../assets/styles/components/WhatItDoes.styles';

const SCREENSHOTS = [
  { title: 'Main Dashboard',    desc: 'Live PnL, open positions, active pairs',         src: '/images/main2.avif' },
  { title: 'Strategy Settings', desc: 'Configure signals, thresholds, timeframes',       src: '/images/strategyEngine.avif' },
  { title: 'Whitelist Manager', desc: 'Select which pairs the bot trades',               src: '/images/whiteList.avif' },
  { title: 'Runtime Logs',      desc: 'Real-time event stream and trade history',        src: '/images/main1.avif' },
];

function LazyScreenshot({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <ScreenshotSkeleton $visible={!loaded} />
      <ScreenshotImg
        src={src}
        alt={title}
        loading="lazy"
        decoding="async"
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const item = SCREENSHOTS[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onNav]);

  return createPortal(
    <LightboxBackdrop onClick={onClose}>
      <LightboxInner onClick={e => e.stopPropagation()}>
        <LightboxClose onClick={onClose} aria-label="Close">✕</LightboxClose>

        {SCREENSHOTS.length > 1 && (
          <>
            <LightboxNav $dir="prev" onClick={() => onNav(-1)} aria-label="Previous">‹</LightboxNav>
            <LightboxNav $dir="next" onClick={() => onNav(1)}  aria-label="Next">›</LightboxNav>
          </>
        )}

        <LightboxImg src={item.src} alt={item.title} />

        <LightboxCaption>
          <div className="title">{item.title}</div>
          <div className="desc">{item.desc}</div>
        </LightboxCaption>
      </LightboxInner>
    </LightboxBackdrop>,
    document.body,
  );
}

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNav = useCallback((dir: 1 | -1) => {
    setActiveIndex(i =>
      i === null ? 0 : (i + dir + SCREENSHOTS.length) % SCREENSHOTS.length,
    );
  }, []);

  return (
    <ScreenshotsSection id="screenshots">
      <SectionContainer>
        <SectionLabel>Screenshots</SectionLabel>
        <SectionTitle>See It in Action</SectionTitle>
        <SectionSubtitle>
          A clean desktop interface — everything you need, nothing you don't.
        </SectionSubtitle>

        <ScreenshotsGrid>
          {SCREENSHOTS.map((s, i) => (
            <ScreenshotCard key={s.title} onClick={() => setActiveIndex(i)}>
              <ScreenshotPreview>
                <LazyScreenshot src={s.src} title={s.title} />
                <ClickHint><span>🔍 Click to expand</span></ClickHint>
              </ScreenshotPreview>
              <ScreenshotLabel>
                <div className="title">{s.title}</div>
                <div className="desc">{s.desc}</div>
              </ScreenshotLabel>
            </ScreenshotCard>
          ))}
        </ScreenshotsGrid>
      </SectionContainer>

      {activeIndex !== null && (
        <Lightbox
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNav={handleNav}
        />
      )}
    </ScreenshotsSection>
  );
}
