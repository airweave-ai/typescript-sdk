/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";

export const EntityDefinitionEntitySchema: core.serialization.Schema<
    serializers.EntityDefinitionEntitySchema.Raw,
    AirweaveSDK.EntityDefinitionEntitySchema
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(core.serialization.string()),
    core.serialization.record(core.serialization.string(), core.serialization.unknown()),
]);

export declare namespace EntityDefinitionEntitySchema {
    export type Raw = string[] | Record<string, unknown>;
}
