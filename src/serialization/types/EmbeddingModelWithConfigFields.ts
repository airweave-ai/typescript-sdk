/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";
import { AuthType } from "./AuthType";
import { Fields } from "./Fields";

export const EmbeddingModelWithConfigFields: core.serialization.ObjectSchema<
    serializers.EmbeddingModelWithConfigFields.Raw,
    AirweaveSDK.EmbeddingModelWithConfigFields
> = core.serialization.object({
    name: core.serialization.string(),
    shortName: core.serialization.property("short_name", core.serialization.string()),
    description: core.serialization.string().optional(),
    provider: core.serialization.string(),
    modelName: core.serialization.property("model_name", core.serialization.string().optional()),
    modelVersion: core.serialization.property("model_version", core.serialization.string().optional()),
    authType: core.serialization.property("auth_type", AuthType.optional()),
    authConfigClass: core.serialization.property("auth_config_class", core.serialization.string().optional()),
    id: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date()),
    configFields: core.serialization.property("config_fields", Fields.optional()),
});

export declare namespace EmbeddingModelWithConfigFields {
    export interface Raw {
        name: string;
        short_name: string;
        description?: string | null;
        provider: string;
        model_name?: string | null;
        model_version?: string | null;
        auth_type?: AuthType.Raw | null;
        auth_config_class?: string | null;
        id: string;
        created_at: string;
        modified_at: string;
        config_fields?: Fields.Raw | null;
    }
}
