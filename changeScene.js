import * as dotenv from "dotenv"; // https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import obsSwitchScenes from "@b3nelly/change-obs-scene"; // https://github.com/web3nelly/change-obs-scene
https: dotenv.config();

const obsSkipScenes = ["Scene 1"];
const intervalInSeconds = process.env.OBS_SCENE_INT_SECS ?? 45;
const obsWebSocketServerURL = process.env.OBS_WS ?? "ws://localhost:4455";
const obsWebSocketServerPassword = process.env.OBS_WS_PASS ?? undefined;

obsSwitchScenes(
  intervalInSeconds,
  obsWebSocketServerURL,
  obsWebSocketServerPassword,
  obsSkipScenes
);
