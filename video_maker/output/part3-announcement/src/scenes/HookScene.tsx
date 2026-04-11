import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
} from "remotion";
import { colors, fonts, type, transitions } from "../styles";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "AgentFactory" types first (12 chars, 1 char per frame starting at frame 0)
  const brandText = "AgentFactory";
  const brandChars = brandText.length; // 12
  const brandProgress = Math.min(frame, brandChars);
  const brandVisible = brandText.slice(0, brandProgress);

  // ": PART 3" types after brand (8 chars, starts after brand completes + 3 frame pause)
  const subtitleText = ": PART 3";
  const subtitleStartFrame = brandChars + 3; // start typing at frame 15
  const subtitleProgress = Math.max(0, Math.min(frame - subtitleStartFrame, subtitleText.length));
  const subtitleVisible = subtitleText.slice(0, subtitleProgress);

  // Typing complete when subtitle is fully shown
  const typingComplete = subtitleStartFrame + subtitleText.length; // frame 23

  // Cursor: blinks during typing, stays solid (visible) after completion
  const cursorVisible = frame < typingComplete
    ? Math.floor(frame / 8) % 2 === 0  // Fast blink during typing
    : true;  // Stay visible after typing done

  // Scale-in for the whole block
  const scale = spring({
    frame,
    fps,
    from: 0.85,
    to: 1,
    durationInFrames: 18,
    config: transitions.springBouncy,
  });

  // "NOW LIVE" badge fades in after typing completes
  const liveOpacity = interpolate(frame, [typingComplete + 3, typingComplete + 12], [0, 1], {
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
      }}
    >
      {/* NOW LIVE badge — top right */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 80,
          opacity: liveOpacity,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: colors.live,
          }}
        />
        <span
          style={{
            fontSize: type.liveBadge.fontSize,
            fontWeight: type.liveBadge.fontWeight,
            letterSpacing: type.liveBadge.letterSpacing,
            textTransform: type.liveBadge.textTransform,
            color: colors.live,
            fontFamily: fonts.display,
          }}
        >
          NOW LIVE
        </span>
      </div>

      {/* Main text */}
      <div
        style={{
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <h1
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
          {brandVisible}
          <span style={{ color: colors.accent }}>{subtitleVisible}</span>
          {cursorVisible && "_"}
        </h1>
      </div>
    </AbsoluteFill>
  );
};
