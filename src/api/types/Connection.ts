/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index.js";

/**
 * Schema for connection with config fields.
 */
export interface Connection {
    name: string;
    integration_type: AirweaveSDK.IntegrationType;
    integration_credential_id?: string;
    status: AirweaveSDK.ConnectionStatus;
    short_name: string;
    id: string;
    organization_id?: string;
    created_by_email?: string;
    modified_by_email?: string;
}
