/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";

export const EntityCount: core.serialization.ObjectSchema<serializers.EntityCount.Raw, AirweaveSDK.EntityCount> =
    core.serialization.object({
        count: core.serialization.number(),
    });

export declare namespace EntityCount {
    export interface Raw {
        count: number;
    }
}
