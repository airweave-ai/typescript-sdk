/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as AirweaveSDK from "../../../../../api/index";
import * as core from "../../../../../core";

export const SyncCreate: core.serialization.Schema<serializers.SyncCreate.Raw, AirweaveSDK.SyncCreate> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        sourceConnectionId: core.serialization.property("source_connection_id", core.serialization.string()),
        destinationConnectionId: core.serialization.property(
            "destination_connection_id",
            core.serialization.string().optional(),
        ),
        embeddingModelConnectionId: core.serialization.property(
            "embedding_model_connection_id",
            core.serialization.string().optional(),
        ),
        cronSchedule: core.serialization.property("cron_schedule", core.serialization.string().optional()),
        whiteLabelId: core.serialization.property("white_label_id", core.serialization.string().optional()),
        whiteLabelUserIdentifier: core.serialization.property(
            "white_label_user_identifier",
            core.serialization.string().optional(),
        ),
        syncMetadata: core.serialization.property(
            "sync_metadata",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        ),
        runImmediately: core.serialization.property("run_immediately", core.serialization.boolean().optional()),
    });

export declare namespace SyncCreate {
    export interface Raw {
        name: string;
        description?: string | null;
        source_connection_id: string;
        destination_connection_id?: string | null;
        embedding_model_connection_id?: string | null;
        cron_schedule?: string | null;
        white_label_id?: string | null;
        white_label_user_identifier?: string | null;
        sync_metadata?: Record<string, unknown> | null;
        run_immediately?: boolean | null;
    }
}
