/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";
import { NodeType } from "./NodeType";

export const DagNode: core.serialization.ObjectSchema<serializers.DagNode.Raw, AirweaveSDK.DagNode> =
    core.serialization.object({
        type: NodeType,
        name: core.serialization.string(),
        config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        connectionId: core.serialization.property("connection_id", core.serialization.string().optional()),
        entityDefinitionId: core.serialization.property("entity_definition_id", core.serialization.string().optional()),
        transformerId: core.serialization.property("transformer_id", core.serialization.string().optional()),
        id: core.serialization.string(),
        dagId: core.serialization.property("dag_id", core.serialization.string()),
        organizationId: core.serialization.property("organization_id", core.serialization.string()),
        createdByEmail: core.serialization.property("created_by_email", core.serialization.string()),
        modifiedByEmail: core.serialization.property("modified_by_email", core.serialization.string()),
    });

export declare namespace DagNode {
    export interface Raw {
        type: NodeType.Raw;
        name: string;
        config?: Record<string, unknown> | null;
        connection_id?: string | null;
        entity_definition_id?: string | null;
        transformer_id?: string | null;
        id: string;
        dag_id: string;
        organization_id: string;
        created_by_email: string;
        modified_by_email: string;
    }
}
