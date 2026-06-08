export const theme = {
  colors: {
    primary: {
      // Core
      black: '#050505',
      white: '#FFFFFF',

      // Accent — neon green family
      accent: '#39FF14',
      accentSoft: '#8DFF75',
      accentDark: '#00C72B',

      // Light surfaces
      pageBg: '#F4F7F2',
      altBg: '#EBF0E8',
      cardBg: 'rgba(255, 255, 255, 0.85)',
      cardBgSolid: '#FFFFFF',

      // Text
      text: '#111827',
      textMuted: '#6B7280',
      textLight: '#9CA3AF',

      // Hero (dark)
      heroBg: '#050505',

      // Borders — green-tinted
      border: 'rgba(57, 255, 20, 0.12)',
      borderMed: 'rgba(57, 255, 20, 0.22)',
      borderStrong: 'rgba(57, 255, 20, 0.45)',

      // Legacy aliases kept for Hero/Contact (dark sections)
      neonGreen: '#39FF14',
      acidGreen: '#00FF41',
    },
    gradients: {
      neonGlow: 'linear-gradient(45deg, #00C72B, #39FF14)',
      heroGradient:
        'radial-gradient(circle at 50% 0%, rgba(57,255,20,0.18) 0%, rgba(57,255,20,0.05) 30%, #050505 100%)',
    },
    shadows: {
      // Premium soft glow — not hard ring
      neonGlow:
        '0 0 15px rgba(57,255,20,0.25), 0 0 40px rgba(57,255,20,0.12)',
      neonGlowSm:
        '0 0 8px rgba(57,255,20,0.30), 0 0 20px rgba(57,255,20,0.15)',
      // Cards
      cardShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
      cardHover:
        '0 10px 30px rgba(57,255,20,0.18), 0 4px 12px rgba(0,0,0,0.08)',
      // Green ambient
      greenAmbient: '0 4px 24px rgba(57,255,20,0.15)',
    },
  },
  fonts: {
    heading: "'Space Grotesk', 'Inter', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  spacing: {
    sectionPadding: '100px 0',
    sectionPaddingMobile: '64px 0',
    containerMaxWidth: '1200px',
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '18px',
    xl: '24px',
    full: '9999px',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
  },
};

export type Theme = typeof theme;
