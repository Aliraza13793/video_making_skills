import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, type, transitions } from "../styles";

export const PrincipleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Quote spring reveal
  const quoteOpacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 20,
    config: transitions.springBouncy,
  });
  const quoteScale = spring({
    frame,
    fps,
    from: 0.9,
    to: 1,
    durationInFrames: 25,
    config: transitions.springBouncy,
  });

  // Subtitle staggered reveal (1s delay)
  const subtextOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtextTranslateY = interpolate(frame, [20, 40], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor blink
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

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
          maxWidth: 1100,
          opacity: quoteOpacity,
          transform: `scale(${quoteScale})`,
        }}
      >
        <h2
          style={{
            fontSize: type.h1.fontSize,
            fontWeight: type.h1.fontWeight,
            color: colors.accent,
            letterSpacing: type.h1.letterSpacing,
            lineHeight: type.h1.lineHeight,
            margin: 0,
            fontFamily: fonts.display,
          }}
        >
          &ldquo;Domain Expertise is the Scarce Resource&rdquo;
          {cursorVisible ? "_" : ""}
        </h2>

        <p
          style={{
            fontSize: type.body.fontSize,
            color: colors.textSecondary,
            marginTop: 50,
            lineHeight: type.body.lineHeight,
            opacity: subtextOpacity,
            transform: `translateY(${subtextTranslateY}px)`,
          }}
        >
          Not technical capability. Professional judgment encoded into AI workflows.
        </p>
      </div>
    </AbsoluteFill>
  );
};
