/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as AirweaveSDK from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Entities {
    export interface Options {
        environment?: core.Supplier<environments.AirweaveSDKEnvironment | string>;
        /** Override the x-api-key header */
        apiKey?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-api-key header */
        apiKey?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Entities {
    constructor(protected readonly _options: Entities.Options = {}) {}

    /**
     * List all entity definitions for the current user's organization.
     *
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.listEntityDefinitions()
     */
    public async listEntityDefinitions(
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityDefinition[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "entities/definitions/",
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.entities.listEntityDefinitions.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /entities/definitions/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new entity definition.
     *
     * @param {AirweaveSDK.EntityDefinitionCreate} request
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.createEntityDefinition({
     *         name: "name",
     *         type: "file",
     *         entitySchema: ["entity_schema"],
     *         moduleName: "module_name",
     *         className: "class_name"
     *     })
     */
    public async createEntityDefinition(
        request: AirweaveSDK.EntityDefinitionCreate,
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityDefinition> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "entities/definitions/",
            ),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.EntityDefinitionCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EntityDefinition.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling POST /entities/definitions/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an entity definition.
     *
     * @param {string} definitionId
     * @param {AirweaveSDK.EntityDefinitionUpdate} request
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.updateEntityDefinition("definition_id", {
     *         name: "name",
     *         type: "file",
     *         entitySchema: ["entity_schema"],
     *         moduleName: "module_name",
     *         className: "class_name"
     *     })
     */
    public async updateEntityDefinition(
        definitionId: string,
        request: AirweaveSDK.EntityDefinitionUpdate,
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityDefinition> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `entities/definitions/${encodeURIComponent(definitionId)}`,
            ),
            method: "PUT",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.EntityDefinitionUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EntityDefinition.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError(
                    "Timeout exceeded when calling PUT /entities/definitions/{definition_id}.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List all entity relations for the current user's organization.
     *
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.listEntityRelations()
     */
    public async listEntityRelations(requestOptions?: Entities.RequestOptions): Promise<AirweaveSDK.EntityRelation[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "entities/relations/",
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.entities.listEntityRelations.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /entities/relations/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new entity relation.
     *
     * @param {AirweaveSDK.EntityRelationCreate} request
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.createEntityRelation({
     *         name: "name",
     *         fromEntityId: "from_entity_id",
     *         toEntityId: "to_entity_id"
     *     })
     */
    public async createEntityRelation(
        request: AirweaveSDK.EntityRelationCreate,
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityRelation> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "entities/relations/",
            ),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.EntityRelationCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EntityRelation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling POST /entities/relations/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an entity relation.
     *
     * @param {string} relationId
     * @param {AirweaveSDK.EntityRelationUpdate} request
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.updateEntityRelation("relation_id", {
     *         name: "name",
     *         fromEntityId: "from_entity_id",
     *         toEntityId: "to_entity_id"
     *     })
     */
    public async updateEntityRelation(
        relationId: string,
        request: AirweaveSDK.EntityRelationUpdate,
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityRelation> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `entities/relations/${encodeURIComponent(relationId)}`,
            ),
            method: "PUT",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.EntityRelationUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EntityRelation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError(
                    "Timeout exceeded when calling PUT /entities/relations/{relation_id}.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get multiple entity definitions by their IDs.
     *
     * Args:
     *     ids: List of entity definition IDs to fetch
     *     db: Database session
     *     current_user: Current authenticated user
     *
     * Returns:
     *     List of entity definitions matching the provided IDs
     *
     * @param {string[]} request
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.getEntityDefinitionsByIds(["string"])
     */
    public async getEntityDefinitionsByIds(
        request: string[],
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityDefinition[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "entities/definitions/by-ids/",
            ),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.entities.getEntityDefinitionsByIds.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.entities.getEntityDefinitionsByIds.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError(
                    "Timeout exceeded when calling POST /entities/definitions/by-ids/.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get all entity definitions for a given source.
     *
     * @param {AirweaveSDK.GetEntityDefinitionsBySourceShortNameEntitiesDefinitionsBySourceGetRequest} request
     * @param {Entities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.entities.getEntityDefinitionsBySourceShortName({
     *         sourceShortName: "source_short_name"
     *     })
     */
    public async getEntityDefinitionsBySourceShortName(
        request: AirweaveSDK.GetEntityDefinitionsBySourceShortNameEntitiesDefinitionsBySourceGetRequest,
        requestOptions?: Entities.RequestOptions,
    ): Promise<AirweaveSDK.EntityDefinition[]> {
        const { sourceShortName } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["source_short_name"] = sourceShortName;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "entities/definitions/by-source/",
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.90",
                "User-Agent": "@airweave/sdk/0.0.90",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.entities.getEntityDefinitionsBySourceShortName.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new AirweaveSDK.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.AirweaveSDKError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirweaveSDKError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirweaveSDKTimeoutError(
                    "Timeout exceeded when calling GET /entities/definitions/by-source/.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
