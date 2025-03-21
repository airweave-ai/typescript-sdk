/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as AirweaveSDK from "../../../../api/index";
import * as core from "../../../../core";
import { SyncJob } from "../../../types/SyncJob";

export const Response: core.serialization.Schema<serializers.sync.listAllJobs.Response.Raw, AirweaveSDK.SyncJob[]> =
    core.serialization.list(SyncJob);

export declare namespace Response {
    export type Raw = SyncJob.Raw[];
}
