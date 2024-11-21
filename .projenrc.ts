import { awscdk, javascript } from "projen";

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.170.0",
  defaultReleaseBranch: "main",
  depsUpgradeOptions: { workflow: false },
  eslint: true,
  minNodeVersion: "22.11.0",
  name: "cdk-aws-otel-lambda-auto-nodejs",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "9",
  prettier: true,
  projenrcTs: true,

  deps: ["zod"],
});

project.synth();
