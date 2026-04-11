import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, type, transitions } from "../styles";

export const ShiftScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "AI Infrastructure" appears (top)
  const fromTextOpacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 15,
    config: transitions.springSmooth,
  });

  // Arrow animates downward (center)
  const arrowOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const arrowTranslateY = interpolate(frame, [15, 30], [-30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Enterprise Deployment" slides up from below (bottom)
  const toTextOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const toTextTranslateY = interpolate(frame, [25, 45], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle fades in after both parts
  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: fonts.body,
        padding: 80,
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 1200 }}>
        {/* From — top */}
        <div
          style={{
            opacity: fromTextOpacity,
            fontSize: type.h1.fontSize,
            fontWeight: type.h1.fontWeight,
            color: colors.textSecondary,
            letterSpacing: type.h1.letterSpacing,
            lineHeight: type.h1.lineHeight,
            fontFamily: fonts.display,
          }}
        >
          AI Infrastructure
        </div>

        {/* Arrow — downward (center) */}
        <div
          style={{
            fontSize: 72,
            color: colors.accent,
            margin: "30px 0",
            opacity: arrowOpacity,
            transform: `translateY(${arrowTranslateY}px)`,
          }}
        >
          &#8595;
        </div>

        {/* To — bottom */}
        <div
          style={{
            opacity: toTextOpacity,
            transform: `translateY(${toTextTranslateY}px)`,
            fontSize: type.h1.fontSize,
            fontWeight: type.h1.fontWeight,
            color: colors.textPrimary,
            letterSpacing: type.h1.letterSpacing,
            lineHeight: type.h1.lineHeight,
            fontFamily: fonts.display,
          }}
        >
          Enterprise Deployment
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: type.bodyLg.fontSize,
            color: colors.textSecondary,
            marginTop: 45,
            lineHeight: type.bodyLg.lineHeight,
            opacity: subtitleOpacity,
          }}
        >
          Parts 1 &amp; 2 taught you to build AI.
          <br />
          Part 3 teaches you to deploy it in real business functions.
        </p>
      </div>
    </AbsoluteFill>
  );
};
