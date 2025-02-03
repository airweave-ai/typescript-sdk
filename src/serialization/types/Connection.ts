/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";
import { IntegrationType } from "./IntegrationType";
import { ConnectionStatus } from "./ConnectionStatus";

export const Connection: core.serialization.ObjectSchema<serializers.Connection.Raw, AirweaveSDK.Connection> =
    core.serialization.object({
        name: core.serialization.string(),
        integrationType: core.serialization.property("integration_type", IntegrationType),
        integrationCredentialId: core.serialization.property(
            "integration_credential_id",
            core.serialization.string().optional(),
        ),
        status: ConnectionStatus,
        shortName: core.serialization.property("short_name", core.serialization.string()),
        id: core.serialization.string(),
        organizationId: core.serialization.property("organization_id", core.serialization.string()),
        createdByEmail: core.serialization.property("created_by_email", core.serialization.string()),
        modifiedByEmail: core.serialization.property("modified_by_email", core.serialization.string()),
    });

export declare namespace Connection {
    export interface Raw {
        name: string;
        integration_type: IntegrationType.Raw;
        integration_credential_id?: string | null;
        status: ConnectionStatus.Raw;
        short_name: string;
        id: string;
        organization_id: string;
        created_by_email: string;
        modified_by_email: string;
    }
}
