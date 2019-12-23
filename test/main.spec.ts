import "reflect-metadata";
import DIContainer from "./../src/di-container";
import { Service } from "../src/service";

const service: Service = DIContainer.resolve<Service>(Service);

describe("injecting dependencies with inversify", () => {
  it("getAllSettings()", () => {
    const names = service.getAllSettings();
    console.log(names);
    expect(names).toEqual("Window with = 200, heigh = 300, color = red");
  });
});
