/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index.js";

/**
 * Schema for SyncJob.
 */
export interface SyncJob {
    sync_id: string;
    status?: AirweaveSDK.SyncJobStatus;
    entities_inserted?: number;
    entities_updated?: number;
    entities_deleted?: number;
    entities_kept?: number;
    entities_skipped?: number;
    entities_encountered?: Record<string, number | undefined>;
    started_at?: string;
    completed_at?: string;
    failed_at?: string;
    error?: string;
    access_token?: string;
    id: string;
    organization_id: string;
    created_by_email?: string;
    modified_by_email?: string;
    created_at?: string;
    modified_at?: string;
    /** Name of the sync, populated from join query */
    sync_name?: string;
}
