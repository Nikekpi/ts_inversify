import { Container } from "inversify";
import { UserSettings } from "./settings";

var DIContainer = new Container();
DIContainer.bind<UserSettings>(UserSettings).toSelf();

export default DIContainer;
