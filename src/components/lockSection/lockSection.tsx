import {
  UnlockCard,
  Particle,
  LockWrapper,
  LockBody,
  LockShackle,
  UnlockContent,
  UnlockTitle,
  UnlockDescription,
  FeatureList,
  FeatureItem,
} from '../../assets/styles/components/LockSection.styles';

const PARTICLES = [
  { x: 8,  y: 20, delay: 0   },
  { x: 15, y: 65, delay: 0.5 },
  { x: 4,  y: 45, delay: 1   },
  { x: 20, y: 80, delay: 1.5 },
  { x: 12, y: 10, delay: 0.8 },
];

const FEATURES = [
  'Desktop Trading Application',
  'Full Source Code Access',
  'Complete Documentation',
  'Binance Futures Integration',
];

export default function UnlockPackage() {
  return (
    <UnlockCard>
      {PARTICLES.map((p, i) => (
        <Particle key={i} $x={p.x} $y={p.y} $delay={p.delay} />
      ))}

      <LockWrapper>
        <LockBody>
          <LockShackle />
        </LockBody>
      </LockWrapper>

      <UnlockContent>
        <UnlockTitle>Unlock The Complete Trading System</UnlockTitle>
        <UnlockDescription>
          Get everything required to deploy, customize and operate Momentum Scalper independently.
        </UnlockDescription>
        <FeatureList>
          {FEATURES.map(f => (
            <FeatureItem key={f}>{f}</FeatureItem>
          ))}
        </FeatureList>
      </UnlockContent>
    </UnlockCard>
  );
}
