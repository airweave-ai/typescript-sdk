/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";
import { AuthType } from "./AuthType";
import { Fields } from "./Fields";

export const SourceWithConfigFields: core.serialization.ObjectSchema<
    serializers.SourceWithConfigFields.Raw,
    AirweaveSDK.SourceWithConfigFields
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    authType: core.serialization.property("auth_type", AuthType.optional()),
    authConfigClass: core.serialization.property("auth_config_class", core.serialization.string().optional()),
    shortName: core.serialization.property("short_name", core.serialization.string()),
    className: core.serialization.property("class_name", core.serialization.string()),
    id: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date()),
    configFields: core.serialization.property("config_fields", Fields.optional()),
});

export declare namespace SourceWithConfigFields {
    export interface Raw {
        name: string;
        description?: string | null;
        auth_type?: AuthType.Raw | null;
        auth_config_class?: string | null;
        short_name: string;
        class_name: string;
        id: string;
        created_at: string;
        modified_at: string;
        config_fields?: Fields.Raw | null;
    }
}
