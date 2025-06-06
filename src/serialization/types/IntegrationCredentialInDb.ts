/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as AirweaveSDK from "../../api/index";
import * as core from "../../core";
import { IntegrationType } from "./IntegrationType";
import { AuthType } from "./AuthType";

export const IntegrationCredentialInDb: core.serialization.ObjectSchema<
    serializers.IntegrationCredentialInDb.Raw,
    AirweaveSDK.IntegrationCredentialInDb
> = core.serialization.object({
    name: core.serialization.string(),
    integrationShortName: core.serialization.property("integration_short_name", core.serialization.string()),
    description: core.serialization.string().optional(),
    integrationType: core.serialization.property("integration_type", IntegrationType),
    authType: core.serialization.property("auth_type", AuthType),
    authConfigClass: core.serialization.property("auth_config_class", core.serialization.string().optional()),
    id: core.serialization.string(),
    organizationId: core.serialization.property("organization_id", core.serialization.string()),
    encryptedCredentials: core.serialization.property("encrypted_credentials", core.serialization.string()),
});

export declare namespace IntegrationCredentialInDb {
    export interface Raw {
        name: string;
        integration_short_name: string;
        description?: string | null;
        integration_type: IntegrationType.Raw;
        auth_type: AuthType.Raw;
        auth_config_class?: string | null;
        id: string;
        organization_id: string;
        encrypted_credentials: string;
    }
}
