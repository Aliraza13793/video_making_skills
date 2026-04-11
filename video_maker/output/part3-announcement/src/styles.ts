export const colors = {
  primary: "#1C2833",
  secondary: "#2E4053",
  accent: "#AAB7B8",
  background: "#F4F6F6",
  textPrimary: "#F4F6F6",
  textSecondary: "rgba(244, 246, 246, 0.7)",
  textDim: "rgba(244, 246, 246, 0.4)",
  live: "#4CAF50",
  checklist: "#F4F6F6",
};

export const fonts = {
  display: "'JetBrains Mono', 'Courier New', monospace",
  body: "Inter, Arial, system-ui, sans-serif",
};

export const type = {
  hero: {
    fontSize: 96,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 1.05,
  },
  h1: {
    fontSize: 68,
    fontWeight: 700,
    letterSpacing: "-0.035em",
    lineHeight: 1.1,
  },
  h2: {
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
  },
  body: {
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: "-0.01em",
    lineHeight: 1.5,
  },
  bodyLg: {
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: "-0.015em",
    lineHeight: 1.4,
  },
  mono: {
    fontSize: 22,
    fontWeight: 500,
    fontFamily: "'JetBrains Mono', monospace",
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
  liveBadge: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  checklist: {
    fontSize: 26,
    fontWeight: 500,
    fontFamily: "'JetBrains Mono', monospace",
  },
  cardText: {
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: "0.02em",
  },
  urlText: {
    fontSize: 28,
    fontWeight: 400,
    fontFamily: "'JetBrains Mono', monospace",
  },
};

export const transitions = {
  springSnappy: { stiffness: 400, damping: 30 },
  springSmooth: { stiffness: 120, damping: 25 },
  springBouncy: { stiffness: 300, damping: 15 },
};
