/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Schema for APIKey.
 */
export interface ApiKey {
    id: string;
    keyPrefix: string;
    organization?: string;
    createdAt: Date;
    modifiedAt: Date;
    lastUsedDate?: Date;
    expirationDate: Date;
    createdByEmail: string;
    modifiedByEmail: string;
}
