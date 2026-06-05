"use client";
import { useState } from "react";
import { Shell, type Route } from "@/components/Shell";
import { CommandCenter } from "@/components/CommandCenter";
import { Wizard } from "@/components/Wizard";
import { Memory } from "@/components/Memory";
import { Constellation } from "@/components/Constellation";
import { Pipeline } from "@/components/Pipeline";
import { Vault } from "@/components/Vault";
import { Creators } from "@/components/Creators";
import { Copywriter } from "@/components/Copywriter";
import { VideoEditor } from "@/components/VideoEditor";
import { ThumbnailStudio } from "@/components/ThumbnailStudio";
import { LibraryView } from "@/components/LibraryView";
import { Opportunities } from "@/components/Opportunities";
import { Patterns } from "@/components/Patterns";
import { Settings } from "@/components/Settings";

const MAP: Record<Route, () => JSX.Element> = {
  command: () => <CommandCenter />,
  pipeline: () => <Pipeline />,
  opportunities: () => <Opportunities />,
  copywriter: () => <Copywriter />,
  video: () => <VideoEditor />,
  thumbnail: () => <ThumbnailStudio />,
  creators: () => <Creators />,
  vault: () => <Vault />,
  wizard: () => <Wizard />,
  patterns: () => <Patterns />,
  memory: () => <Memory />,
  constellation: () => <Constellation />,
  library: () => <LibraryView />,
  settings: () => <Settings />,
};

export default function HomePage() {
  const [route, setRoute] = useState<Route>("command");
  const C = MAP[route];
  return (
    <Shell route={route} onNavigate={setRoute}>
      <C />
    </Shell>
  );
}
