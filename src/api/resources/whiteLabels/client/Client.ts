/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as AirweaveSDK from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace WhiteLabels {
    export interface Options {
        environment: core.Supplier<string>;
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

export class WhiteLabels {
    constructor(protected readonly _options: WhiteLabels.Options) {}

    /**
     * List all white labels for the current user's organization.
     *
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.listWhiteLabels()
     */
    public async listWhiteLabels(requestOptions?: WhiteLabels.RequestOptions): Promise<AirweaveSDK.WhiteLabel[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "white_labels/list"),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
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
            return serializers.whiteLabels.listWhiteLabels.Response.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /white_labels/list.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create new white label integration.
     *
     * @param {AirweaveSDK.WhiteLabelCreate} request
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.createWhiteLabel({
     *         name: "name",
     *         sourceId: "source_id",
     *         redirectUrl: "redirect_url",
     *         clientId: "client_id",
     *         clientSecret: "client_secret"
     *     })
     */
    public async createWhiteLabel(
        request: AirweaveSDK.WhiteLabelCreate,
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<AirweaveSDK.WhiteLabel> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "white_labels/"),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.WhiteLabelCreate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WhiteLabel.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling POST /white_labels/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a specific white label integration.
     *
     * @param {string} whiteLabelId
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.getWhiteLabel("white_label_id")
     */
    public async getWhiteLabel(
        whiteLabelId: string,
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<AirweaveSDK.WhiteLabel> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `white_labels/${encodeURIComponent(whiteLabelId)}`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
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
            return serializers.WhiteLabel.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /white_labels/{white_label_id}.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update a white label integration.
     *
     * @param {string} whiteLabelId
     * @param {AirweaveSDK.WhiteLabelUpdate} request
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.updateWhiteLabel("white_label_id")
     */
    public async updateWhiteLabel(
        whiteLabelId: string,
        request: AirweaveSDK.WhiteLabelUpdate = {},
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<AirweaveSDK.WhiteLabel> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `white_labels/${encodeURIComponent(whiteLabelId)}`,
            ),
            method: "PUT",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.WhiteLabelUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.WhiteLabel.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling PUT /white_labels/{white_label_id}.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a white label integration.
     *
     * @param {string} whiteLabelId
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.deleteWhiteLabel("white_label_id")
     */
    public async deleteWhiteLabel(
        whiteLabelId: string,
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<AirweaveSDK.WhiteLabel> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `white_labels/${encodeURIComponent(whiteLabelId)}`,
            ),
            method: "DELETE",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
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
            return serializers.WhiteLabel.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling DELETE /white_labels/{white_label_id}.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Generate the OAuth2 authorization URL by delegating to oauth2_service.
     *
     * @param {string} whiteLabelId
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.getWhiteLabelOauth2AuthUrl("white_label_id")
     */
    public async getWhiteLabelOauth2AuthUrl(
        whiteLabelId: string,
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `white_labels/${encodeURIComponent(whiteLabelId)}/oauth2/auth_url`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
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
            return serializers.whiteLabels.getWhiteLabelOauth2AuthUrl.Response.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /white_labels/{white_label_id}/oauth2/auth_url.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Exchange OAuth2 code for tokens and create connection.
     *
     * @param {string} whiteLabelId
     * @param {string} request
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.exchangeWhiteLabelOauth2Code("white_label_id", "string")
     */
    public async exchangeWhiteLabelOauth2Code(
        whiteLabelId: string,
        request: string,
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<AirweaveSDK.Connection> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `white_labels/${encodeURIComponent(whiteLabelId)}/oauth2/code`,
            ),
            method: "POST",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.whiteLabels.exchangeWhiteLabelOauth2Code.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Connection.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /white_labels/{white_label_id}/oauth2/code.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * List all syncs for a specific white label.
     *
     * @param {string} whiteLabelId
     * @param {WhiteLabels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.whiteLabels.listWhiteLabelSyncs("white_label_id")
     */
    public async listWhiteLabelSyncs(
        whiteLabelId: string,
        requestOptions?: WhiteLabels.RequestOptions,
    ): Promise<AirweaveSDK.Sync[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `white_labels/${encodeURIComponent(whiteLabelId)}/syncs`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.4",
                "User-Agent": "@airweave/sdk/0.1.4",
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
            return serializers.whiteLabels.listWhiteLabelSyncs.Response.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /white_labels/{white_label_id}/syncs.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
