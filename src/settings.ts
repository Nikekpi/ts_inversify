import { injectable } from "inversify";

export interface IUserSettings {
  readonly settings: string;

  getSettings(): string;

  setSettings(settings: string): void;
}

@injectable()
export class UserSettings implements IUserSettings {
  settings: string = "Window with = 200, heigh = 300, color = red";

  setSettings(settings: string): void {
    this.settings = settings;
  }

  getSettings(): string {
    return this.settings;
  }
}
