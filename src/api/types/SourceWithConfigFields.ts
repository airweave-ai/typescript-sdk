/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index";

/**
 * Schema for Source with auth config.
 */
export interface SourceWithConfigFields {
    name: string;
    description?: string;
    authType?: AirweaveSDK.AuthType;
    authConfigClass?: string;
    shortName: string;
    className: string;
    outputEntityDefinitionIds?: string[];
    organizationId?: string;
    configSchema?: Record<string, unknown>;
    labels?: string[];
    id: string;
    createdAt: Date;
    modifiedAt: Date;
    configFields?: AirweaveSDK.Fields;
}
