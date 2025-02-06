/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const AirweaveSDKEnvironment = {
    Production: "https://api.airweave.ai",
    Local: "http://localhost:8001",
} as const;

export type AirweaveSDKEnvironment = typeof AirweaveSDKEnvironment.Production | typeof AirweaveSDKEnvironment.Local;
