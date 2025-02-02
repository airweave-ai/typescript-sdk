/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";
import { AuthType } from "./AuthType";

export const Destination: core.serialization.ObjectSchema<serializers.Destination.Raw, AirweaveSDK.Destination> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        shortName: core.serialization.property("short_name", core.serialization.string()),
        className: core.serialization.property("class_name", core.serialization.string()),
        authType: core.serialization.property("auth_type", AuthType.optional()),
        authConfigClass: core.serialization.property("auth_config_class", core.serialization.string().optional()),
        id: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date()),
    });

export declare namespace Destination {
    export interface Raw {
        name: string;
        description?: string | null;
        short_name: string;
        class_name: string;
        auth_type?: AuthType.Raw | null;
        auth_config_class?: string | null;
        id: string;
        created_at: string;
        modified_at: string;
    }
}
