/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as AirweaveSDK from "../../../../../api/index";
import * as core from "../../../../../core";

export const WhiteLabelCreate: core.serialization.Schema<
    serializers.WhiteLabelCreate.Raw,
    AirweaveSDK.WhiteLabelCreate
> = core.serialization.object({
    name: core.serialization.string(),
    sourceId: core.serialization.property("source_id", core.serialization.string()),
    redirectUrl: core.serialization.property("redirect_url", core.serialization.string()),
    clientId: core.serialization.property("client_id", core.serialization.string()),
    clientSecret: core.serialization.property("client_secret", core.serialization.string()),
});

export declare namespace WhiteLabelCreate {
    export interface Raw {
        name: string;
        source_id: string;
        redirect_url: string;
        client_id: string;
        client_secret: string;
    }
}
