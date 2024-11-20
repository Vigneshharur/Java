import { JasmineAllureReporter } from "allure-jasmine";
import { JasmineAllureInterface } from "allure-jasmine/dist/src/JasmineAllureReporter";

const reporter = new JasmineAllureReporter({ resultsDir: "allure-results" });
jasmine.getEnv().addReporter(reporter);
// @ts-expect-error
global.allure = reporter.getInterface();

declare global {
  const allure: JasmineAllureInterface;
}