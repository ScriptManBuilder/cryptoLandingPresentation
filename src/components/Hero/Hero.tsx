import {
  HeroSection,
  HeroInner,
  HeroLeft,
  HeroRight,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroStats,
  StatItem,
} from '../../assets/styles/components/Hero.styles';
import DataCore from '../DataCore/DataCore';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <HeroSection id="hero">
      <HeroInner>
        <HeroLeft>
          <HeroContent>
            <HeroBadge>Binance Futures · Automated</HeroBadge>

            <HeroTitle>
              Momentum
              <span>Scalper</span>
            </HeroTitle>

            <HeroSubtitle>
              Custom-engineered desktop trading bot for Binance USD-M Futures —
              built for speed, control, and adaptability in volatile markets.
            </HeroSubtitle>

            <HeroButtons>
              <PrimaryButton onClick={() => scrollTo('contact')}>Request Access</PrimaryButton>
              <SecondaryButton onClick={() => scrollTo('screenshots')}>Watch Demo</SecondaryButton>
            </HeroButtons>

            <HeroStats>
              <StatItem>
                <div className="value">95+</div>
                <div className="label">Pairs</div>
              </StatItem>
              <StatItem>
                <div className="value">24/7</div>
                <div className="label">Uptime</div>
              </StatItem>
              <StatItem>
                <div className="value">ATR</div>
                <div className="label">Risk</div>
              </StatItem>
              <StatItem>
                <div className="value">v3.1</div>
                <div className="label">Build</div>
              </StatItem>
            </HeroStats>
          </HeroContent>
        </HeroLeft>

        <HeroRight>
          <DataCore />
        </HeroRight>
      </HeroInner>
    </HeroSection>
  );
}
