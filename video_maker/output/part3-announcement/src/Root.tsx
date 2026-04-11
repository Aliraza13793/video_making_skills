import React from "react";
import { Composition, Sequence, AbsoluteFill, Audio, interpolate } from "remotion";
import { HookScene } from "./scenes/HookScene";
import { ShiftScene } from "./scenes/ShiftScene";
import { PrincipleScene } from "./scenes/PrincipleScene";
import { ScopeDeliverablesScene } from "./scenes/ScopeDeliverablesScene";
import { CTAScene } from "./scenes/CTAScene";
import { colors } from "./styles";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

// Scene timings (all in frames at 30fps)
const SCENES = {
  hook: { from: 0, duration: 90 },            // 3s
  shift: { from: 90, duration: 210 },          // 7s
  principle: { from: 300, duration: 210 },     // 7s
  scopeDeliverables: { from: 510, duration: 480 }, // 16s
  cta: { from: 990, duration: 360 },           // 12s
};

const TOTAL_FRAMES = 1350; // 45 seconds

// Music bed volume: fades in over 1.5s, stays at 0.15, fades out in last 2s
const musicVolume = (f: number) =>
  interpolate(f, [0, FPS * 1.5, TOTAL_FRAMES - FPS * 2, TOTAL_FRAMES], [0, 0.15, 0.15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const Part3Announcement: React.FC = () => {
  return <VideoContent />;
};

/** Shared video content component — reusable for both 16:9 and 9:16 */
const VideoContent: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* === AUDIO LAYER === */}

      {/* Music bed — ambient bass drone, plays throughout */}
      <Audio
        src={require("../public/audio/ambient-drone.wav")}
        volume={musicVolume}
      />

      {/* SFX: Keyboard typing — hook scene "AgentFactory: PART 3" reveal */}
      <Sequence from={0} durationInFrames={12}>
        <Audio src={require("../public/audio/typing.wav")} volume={0.4} />
      </Sequence>

      {/* SFX: Bass hit — hook completion */}
      <Sequence from={28} durationInFrames={8}>
        <Audio src={require("../public/audio/bass-hit.wav")} volume={0.2} />
      </Sequence>

      {/* SFX: Whoosh — shift scene transition */}
      <Sequence from={90} durationInFrames={10}>
        <Audio src={require("../public/audio/whoosh.wav")} volume={0.3} />
      </Sequence>

      {/* SFX: Click — principle scene quote reveal */}
      <Sequence from={300} durationInFrames={5}>
        <Audio src={require("../public/audio/click.wav")} volume={0.4} />
      </Sequence>

      {/* SFX: Whoosh — scope+deliverables transition */}
      <Sequence from={510} durationInFrames={10}>
        <Audio src={require("../public/audio/whoosh.wav")} volume={0.3} />
      </Sequence>

      {/* SFX: Resolve chord — CTA scene */}
      <Sequence from={990} durationInFrames={15}>
        <Audio src={require("../public/audio/resolve-chord.wav")} volume={0.15} />
      </Sequence>

      {/* === VISUAL LAYER === */}

      <Sequence from={SCENES.hook.from} durationInFrames={SCENES.hook.duration}>
        <HookScene />
      </Sequence>

      <Sequence from={SCENES.shift.from} durationInFrames={SCENES.shift.duration}>
        <ShiftScene />
      </Sequence>

      <Sequence from={SCENES.principle.from} durationInFrames={SCENES.principle.duration}>
        <PrincipleScene />
      </Sequence>

      <Sequence
        from={SCENES.scopeDeliverables.from}
        durationInFrames={SCENES.scopeDeliverables.duration}
      >
        <ScopeDeliverablesScene />
      </Sequence>

      <Sequence from={SCENES.cta.from} durationInFrames={SCENES.cta.duration}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

export const Root: React.FC = () => {
  return (
    <>
      {/* 16:9 Master — LinkedIn, YouTube, website embed */}
      <Composition
        id="Part3Announcement"
        component={Part3Announcement}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* 9:16 Cutdown — TikTok, Instagram Reels, YouTube Shorts */}
      <Composition
        id="Part3AnnouncementVertical"
        component={Part3AnnouncementVertical}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={VERTICAL_WIDTH}
        height={VERTICAL_HEIGHT}
      />
    </>
  );
};

const VERTICAL_WIDTH = 1080;
const VERTICAL_HEIGHT = 1920;

export const Part3AnnouncementVertical: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.primary }}>
      {/* Safe area: center 1080x1400 of the 1920x1080 content, scaled to fit 1080 width */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: VERTICAL_WIDTH,
            height: Math.round(VERTICAL_WIDTH * (HEIGHT / WIDTH)),
            // Scale up the 16:9 content to fill the vertical width, then crop center
            transform: `scale(${VERTICAL_WIDTH / WIDTH})`,
            transformOrigin: "center center",
          }}
        >
          <VideoContent />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
