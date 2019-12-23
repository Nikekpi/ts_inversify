import { inject, injectable } from "inversify";
import { IUserSettings, UserSettings } from "./settings";

@injectable()
export class Service {
  protected depA: IUserSettings;

  constructor(@inject(UserSettings) UserSettings: IUserSettings) {
    this.depA = UserSettings;
  }

  public getAllSettings(): string {
    return this.depA.getSettings();
  }
}
