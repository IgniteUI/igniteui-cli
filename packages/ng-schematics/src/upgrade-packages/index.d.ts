import { Rule } from "@angular-devkit/schematics";
interface UpgradeOptions {
    skipInstall?: boolean;
}
export default function (options: UpgradeOptions): Rule;
export {};
