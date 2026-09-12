import { SceneOne } from "./SceneOne";
import { SceneTwo } from "./SceneTwo";
import { SceneThree } from "./SceneThree";
import { SceneFour } from "./SceneFour";
import { SceneFive } from "./SceneFive";
import { FinalScene } from "./FinalScene";

export function Story() {
  return (
    <main>
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <SceneFour />
      <SceneFive />
      <FinalScene />
    </main>
  );
}
