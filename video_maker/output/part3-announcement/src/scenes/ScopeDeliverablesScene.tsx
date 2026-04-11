import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  Sequence,
} from "remotion";
import { colors, fonts, type, transitions } from "../styles";

const functions = [
  "CFO Office",
  "Legal & Compliance",
  "Sales & Marketing",
  "Supply Chain",
  "HR & Operations",
  "Innovation Lab",
];

const checklist = [
  "\u2713 Production-Ready SKILL.md Libraries",
  "\u2713 Governance Frameworks (10-80-10 Rhythm)",
  "\u2713 MCP Integration",
  "\u2713 Multi-Jurisdiction Compliance",
];

export const ScopeDeliverablesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Title + grid (0-60 frames = 0-2s)
  const titleOpacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 15,
    config: transitions.springSnappy,
  });

  // Phase 2: Grid cards stagger in (100ms = 3 frames apart)
  // Phase 3: After grid establishes (~60 frames), checklist slides up

  // Determine if we should show checklist (after ~2s / 60 frames)
  const checklistStartFrame = 60;
  const isChecklistVisible = frame >= checklistStartFrame;

  // Title scales down slightly when checklist appears
  const titleScale = isChecklistVisible
    ? interpolate(frame, [checklistStartFrame, checklistStartFrame + 15], [1, 0.88], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;

  const titleTranslateY = isChecklistVisible
    ? interpolate(frame, [checklistStartFrame, checklistStartFrame + 15], [0, -40], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  // Checklist slide-up
  const checklistOpacity = isChecklistVisible
    ? interpolate(frame, [checklistStartFrame + 5, checklistStartFrame + 25], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  const checklistTranslateY = isChecklistVisible
    ? interpolate(frame, [checklistStartFrame + 5, checklistStartFrame + 25], [60, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 60;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: fonts.body,
        padding: 60,
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <div
        style={{
          textAlign: "center",
          width: "100%",
          opacity: titleOpacity,
          transform: `scale(${titleScale}) translateY(${titleTranslateY}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <h2
          style={{
            fontSize: type.h1.fontSize,
            fontWeight: type.h1.fontWeight,
            color: colors.textPrimary,
            letterSpacing: type.h1.letterSpacing,
            lineHeight: type.h1.lineHeight,
            margin: "0 0 20px 0",
          }}
        >
          16 Chapters | 7 Enterprise Functions
        </h2>
      </div>

      {/* Function cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          maxWidth: 900,
          margin: "0 auto",
          transform: `translateY(${titleTranslateY * 0.5}px)`,
        }}
      >
        {functions.map((func, i) => {
          const itemOpacity = interpolate(frame, [i * 5 + 10, i * 5 + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          const itemScale = spring({
            frame: Math.max(0, frame - i * 5),
            fps,
            from: 0.9,
            to: 1,
            durationInFrames: 12,
            config: transitions.springSnappy,
          });

          return (
            <div
              key={func}
              style={{
                backgroundColor: colors.primary,
                padding: "20px 16px",
                borderRadius: 8,
                opacity: itemOpacity,
                transform: `scale(${itemScale})`,
                border: `2px solid ${colors.accent}`,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: type.cardText.fontSize,
                  color: colors.accent,
                  margin: 0,
                  fontWeight: type.cardText.fontWeight,
                  letterSpacing: type.cardText.letterSpacing,
                }}
              >
                {func}
              </p>
            </div>
          );
        })}
      </div>

      {/* Checklist — slides up after grid establishes */}
      {isChecklistVisible && (
        <div
          style={{
            textAlign: "left",
            maxWidth: 700,
            marginTop: 30,
            opacity: checklistOpacity,
            transform: `translateY(${checklistTranslateY}px)`,
          }}
        >
          {checklist.map((item, i) => {
            const itemDelay = i * 8;
            const itemOpacity = interpolate(
              frame,
              [checklistStartFrame + 15 + itemDelay, checklistStartFrame + 25 + itemDelay],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                  opacity: itemOpacity,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    color: colors.accent,
                    fontWeight: 700,
                    fontFamily: fonts.display,
                  }}
                >
                  {item.charAt(0)}
                </span>
                <span
                  style={{
                    fontSize: type.checklist.fontSize,
                    fontWeight: type.checklist.fontWeight,
                    color: colors.checklist,
                    fontFamily: type.checklist.fontFamily,
                  }}
                >
                  {item.slice(2)}
                </span>
              </div>
            );
          })}

          <p
            style={{
              fontSize: type.body.fontSize,
              color: colors.textSecondary,
              marginTop: 20,
              lineHeight: type.body.lineHeight,
              opacity: checklistOpacity,
            }}
          >
            Not prototypes. Deployable agent workflows.
          </p>
        </div>
      )}

      {/* SFX: Checkmark clicks — one per checklist item */}
      {checklist.map((_, i) => {
        const sfxFrame = checklistStartFrame + 15 + i * 8;
        return (
          <Sequence key={`sfx-check-${i}`} from={sfxFrame} durationInFrames={5}>
            <Audio src={require("../../public/audio/click.wav")} volume={0.25} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
