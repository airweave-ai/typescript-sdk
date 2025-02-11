/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as AirweaveSDK from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Sync {
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

export class Sync {
    constructor(protected readonly _options: Sync.Options = {}) {}

    /**
     * List all syncs for the current user.
     *
     * @param {AirweaveSDK.ListSyncsSyncGetRequest} request
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.listSyncs()
     */
    public async listSyncs(
        request: AirweaveSDK.ListSyncsSyncGetRequest = {},
        requestOptions?: Sync.RequestOptions,
    ): Promise<AirweaveSDK.ListSyncsSyncGetResponse> {
        const { skip, limit, withSourceConnection } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (skip != null) {
            _queryParams["skip"] = skip.toString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (withSourceConnection != null) {
            _queryParams["with_source_connection"] = withSourceConnection.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "sync/",
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return serializers.ListSyncsSyncGetResponse.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /sync/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new sync configuration.
     *
     * @param {AirweaveSDK.SyncCreate} request
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.createSync({
     *         name: "name",
     *         sourceConnectionId: "source_connection_id"
     *     })
     */
    public async createSync(
        request: AirweaveSDK.SyncCreate,
        requestOptions?: Sync.RequestOptions,
    ): Promise<AirweaveSDK.Sync> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "sync/",
            ),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SyncCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Sync.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling POST /sync/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a specific sync by ID.
     *
     * @param {string} syncId
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.getSync("sync_id")
     */
    public async getSync(syncId: string, requestOptions?: Sync.RequestOptions): Promise<AirweaveSDK.Sync> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `sync/${encodeURIComponent(syncId)}`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return serializers.Sync.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /sync/{sync_id}.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a sync configuration and optionally its associated data.
     *
     * @param {string} syncId
     * @param {AirweaveSDK.DeleteSyncSyncSyncIdDeleteRequest} request
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.deleteSync("sync_id")
     */
    public async deleteSync(
        syncId: string,
        request: AirweaveSDK.DeleteSyncSyncSyncIdDeleteRequest = {},
        requestOptions?: Sync.RequestOptions,
    ): Promise<AirweaveSDK.Sync> {
        const { deleteData } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (deleteData != null) {
            _queryParams["delete_data"] = deleteData.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `sync/${encodeURIComponent(syncId)}`,
            ),
            method: "DELETE",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return serializers.Sync.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling DELETE /sync/{sync_id}.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Trigger a sync run.
     *
     * @param {string} syncId
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.runSync("sync_id")
     */
    public async runSync(syncId: string, requestOptions?: Sync.RequestOptions): Promise<AirweaveSDK.SyncJob> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `sync/${encodeURIComponent(syncId)}/run`,
            ),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return serializers.SyncJob.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling POST /sync/{sync_id}/run.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List all jobs for a specific sync.
     *
     * @param {string} syncId
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.listSyncJobs("sync_id")
     */
    public async listSyncJobs(syncId: string, requestOptions?: Sync.RequestOptions): Promise<AirweaveSDK.SyncJob[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `sync/${encodeURIComponent(syncId)}/jobs`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return serializers.sync.listSyncJobs.Response.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /sync/{sync_id}/jobs.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get details of a specific sync job.
     *
     * @param {string} jobId
     * @param {AirweaveSDK.GetSyncJobSyncJobJobIdGetRequest} request
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.getSyncJob("job_id", {
     *         syncId: "sync_id"
     *     })
     */
    public async getSyncJob(
        jobId: string,
        request: AirweaveSDK.GetSyncJobSyncJobJobIdGetRequest,
        requestOptions?: Sync.RequestOptions,
    ): Promise<AirweaveSDK.SyncJob> {
        const { syncId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["sync_id"] = syncId;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `sync/job/${encodeURIComponent(jobId)}`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return serializers.SyncJob.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /sync/job/{job_id}.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Server-Sent Events (SSE) endpoint to subscribe to a sync job's progress.
     *
     * @param {string} jobId
     * @param {Sync.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.sync.subscribeSyncJob("job_id")
     */
    public async subscribeSyncJob(jobId: string, requestOptions?: Sync.RequestOptions): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `sync/job/${encodeURIComponent(jobId)}/subscribe`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.19",
                "User-Agent": "@airweave/sdk/0.1.19",
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
            return _response.body;
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
                    "Timeout exceeded when calling GET /sync/job/{job_id}/subscribe.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
