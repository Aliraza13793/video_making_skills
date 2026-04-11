import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, type, transitions } from "../styles";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Typing reveal for "Start Building_"
  const ctaText = "Start Building";
  const ctaChars = ctaText.length; // 14
  const typingProgress = Math.min(frame, ctaChars);
  const ctaVisible = ctaText.slice(0, typingProgress);
  const typingComplete = ctaChars; // frame 14

  // Cursor: blinks during typing, stays visible after
  const cursorVisible = frame < typingComplete
    ? Math.floor(frame / 8) % 2 === 0
    : true;

  // Spring scale for the whole block
  const titleScale = spring({
    frame,
    fps,
    from: 0.92,
    to: 1,
    durationInFrames: 20,
    config: transitions.springBouncy,
  });

  // URL fades in after typing completes
  const urlOpacity = interpolate(frame, [typingComplete + 5, typingComplete + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const urlTranslateY = interpolate(frame, [typingComplete + 5, typingComplete + 20], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: fonts.body,
        padding: 80,
      }}
    >
      <div
        style={{
          textAlign: "center",
          transform: `scale(${titleScale})`,
        }}
      >
        <h2
          style={{
            fontSize: type.hero.fontSize,
            fontWeight: type.hero.fontWeight,
            color: colors.textPrimary,
            letterSpacing: type.hero.letterSpacing,
            lineHeight: type.hero.lineHeight,
            margin: 0,
            fontFamily: fonts.display,
          }}
        >
          {ctaVisible}
          {cursorVisible && "_"}
        </h2>

        <p
          style={{
            fontSize: type.urlText.fontSize,
            color: colors.accent,
            marginTop: 50,
            fontFamily: type.urlText.fontFamily,
            opacity: urlOpacity,
            transform: `translateY(${urlTranslateY}px)`,
          }}
        >
          agentfactory.panaversity.org
        </p>

        <p
          style={{
            fontSize: type.mono.fontSize,
            color: colors.textDim,
            marginTop: 15,
            fontFamily: fonts.display,
            opacity: urlOpacity,
          }}
        >
          Docs → Business Domain Agent Workflows
        </p>
      </div>
    </AbsoluteFill>
  );
};
