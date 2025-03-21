/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as AirweaveSDK from "../../../../../api/index";
import * as core from "../../../../../core";
import { DagNodeCreate } from "../../../../types/DagNodeCreate";
import { DagEdgeCreate } from "../../../../types/DagEdgeCreate";

export const SyncDagCreate: core.serialization.Schema<serializers.SyncDagCreate.Raw, AirweaveSDK.SyncDagCreate> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        syncDagCreateSyncId: core.serialization.property("sync_id", core.serialization.string()),
        nodes: core.serialization.list(DagNodeCreate),
        edges: core.serialization.list(DagEdgeCreate),
    });

export declare namespace SyncDagCreate {
    export interface Raw {
        name: string;
        description?: string | null;
        sync_id: string;
        nodes: DagNodeCreate.Raw[];
        edges: DagEdgeCreate.Raw[];
    }
}
