/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index";

/**
 * Schema for a DAG node.
 */
export interface DagNode {
    type: AirweaveSDK.NodeType;
    name: string;
    config?: Record<string, unknown>;
    connectionId?: string;
    entityDefinitionId?: string;
    transformerId?: string;
    id: string;
    dagId: string;
    organizationId: string;
    createdByEmail: string;
    modifiedByEmail: string;
}
