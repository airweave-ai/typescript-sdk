/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index";

/**
 * Schema for SyncJob.
 */
export interface SyncJob {
    syncId: string;
    status?: AirweaveSDK.SyncJobStatus;
    chunksDetected?: number;
    chunksInserted?: number;
    chunksDeleted?: number;
    chunksSkipped?: number;
    error?: string;
    id: string;
    organizationId: string;
    createdByEmail: string;
    modifiedByEmail: string;
    createdAt: Date;
    modifiedAt: Date;
    startedAt?: Date;
    completedAt?: Date;
    failedAt?: Date;
}
