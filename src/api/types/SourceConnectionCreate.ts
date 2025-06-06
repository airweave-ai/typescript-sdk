/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index";

/**
 * Schema for creating a source connection.
 *
 * Contains all fields that are required to create a source connection.
 * - Sync specific fields are included here.
 */
export interface SourceConnectionCreate {
    /** Name of the source connection */
    name: string;
    description?: string;
    configFields?: AirweaveSDK.ConfigValues;
    shortName: string;
    whiteLabelId?: string;
    collection?: string;
    cronSchedule?: string;
    authFields?: AirweaveSDK.ConfigValues;
    credentialId?: string;
    syncImmediately?: boolean;
}
