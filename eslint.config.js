// @ts-check
import * as js from "@chance/eslint";
import * as typescript from "@chance/eslint/typescript";

/** @type {import("eslint").Linter.Config[]} */
export default [{ ignores: ["dist"] }, js.config, typescript.config];
