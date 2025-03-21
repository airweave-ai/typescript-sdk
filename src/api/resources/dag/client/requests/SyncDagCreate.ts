/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         syncDagCreateSyncId: "sync_id",
 *         nodes: [{
 *                 type: "source",
 *                 name: "name"
 *             }],
 *         edges: [{
 *                 fromNodeId: "from_node_id",
 *                 toNodeId: "to_node_id"
 *             }]
 *     }
 */
export interface SyncDagCreate {
    name: string;
    description?: string;
    syncDagCreateSyncId: string;
    nodes: AirweaveSDK.DagNodeCreate[];
    edges: AirweaveSDK.DagEdgeCreate[];
}
