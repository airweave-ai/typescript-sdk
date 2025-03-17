/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         sourceConnectionId: "source_connection_id",
 *         destinationConnectionIds: ["destination_connection_ids"]
 *     }
 */
export interface SyncCreate {
    name: string;
    sourceConnectionId: string;
    embeddingModelConnectionId?: string;
    destinationConnectionIds: string[];
    description?: string;
    cronSchedule?: string;
    nextScheduledRun?: Date;
    whiteLabelId?: string;
    whiteLabelUserIdentifier?: string;
    syncMetadata?: Record<string, unknown>;
    status?: AirweaveSDK.SyncStatus;
    runImmediately?: boolean;
}
