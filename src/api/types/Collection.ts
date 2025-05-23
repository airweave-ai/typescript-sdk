/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index";

/**
 * Schema for complete collection representation.
 */
export interface Collection {
    /** Display name for the collection */
    name: string;
    readableId: string;
    id: string;
    createdAt: Date;
    modifiedAt: Date;
    organizationId: string;
    createdByEmail: string;
    modifiedByEmail: string;
    status?: AirweaveSDK.CollectionStatus;
}
