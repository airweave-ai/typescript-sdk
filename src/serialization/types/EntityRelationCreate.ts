/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";

export const EntityRelationCreate: core.serialization.ObjectSchema<
    serializers.EntityRelationCreate.Raw,
    AirweaveSDK.EntityRelationCreate
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    fromEntityId: core.serialization.property("from_entity_id", core.serialization.string()),
    toEntityId: core.serialization.property("to_entity_id", core.serialization.string()),
});

export declare namespace EntityRelationCreate {
    export interface Raw {
        name: string;
        description?: string | null;
        from_entity_id: string;
        to_entity_id: string;
    }
}
