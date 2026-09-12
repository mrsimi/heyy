import { SceneOne } from "./SceneOne";
import { SceneTwo } from "./SceneTwo";
import { SceneThree } from "./SceneThree";
import { SceneBenin } from "./SceneBenin";
import { SceneFour } from "./SceneFour";
import { SceneFive } from "./SceneFive";
import { FinalScene } from "./FinalScene";

export function Story() {
  return (
    <main>
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <SceneBenin />
      <SceneFour />
      <SceneFive />
      <FinalScene />
    </main>
  );
}
