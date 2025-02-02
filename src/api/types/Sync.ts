/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index";

/**
 * Schema for Sync.
 */
export interface Sync {
    name: string;
    description?: string;
    sourceConnectionId: string;
    destinationConnectionId?: string;
    embeddingModelConnectionId?: string;
    cronSchedule?: string;
    whiteLabelId?: string;
    whiteLabelUserIdentifier?: string;
    syncMetadata?: Record<string, unknown>;
    id: string;
    organizationId: string;
    createdAt: Date;
    modifiedAt: Date;
    createdByEmail: string;
    modifiedByEmail: string;
    status: AirweaveSDK.SyncStatus;
}
