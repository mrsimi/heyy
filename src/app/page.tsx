import { Story } from "@/components/Story";
import { SoundControls, SoundEntry, SoundtrackProvider } from "@/components/Soundtrack";

export default function Home() {
  return <SoundtrackProvider><Story /><SoundEntry /><SoundControls /></SoundtrackProvider>;
}
