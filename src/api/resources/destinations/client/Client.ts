/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as AirweaveSDK from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Destinations {
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

export class Destinations {
    constructor(protected readonly _options: Destinations.Options = {}) {}

    /**
     * Get all available destinations.
     *
     * Args:
     * -----
     *     db: The database session
     *     user: The current user
     *
     * Returns:
     * --------
     *     List[schemas.Destination]: A list of destinations
     *
     * @param {Destinations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.destinations.listDestinations()
     */
    public async listDestinations(requestOptions?: Destinations.RequestOptions): Promise<AirweaveSDK.Destination[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                "destinations/list",
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.92",
                "User-Agent": "@airweave/sdk/0.0.92",
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
            return serializers.destinations.listDestinations.Response.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /destinations/list.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get destination by short name.
     *
     * Args:
     * -----
     *     db: The database session
     *     short_name: The short name of the destination
     *     user: The current user
     *
     * Returns:
     * --------
     *     destination (schemas.Destination): The destination
     *
     * @param {string} shortName
     * @param {Destinations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.destinations.readDestination("short_name")
     */
    public async readDestination(
        shortName: string,
        requestOptions?: Destinations.RequestOptions,
    ): Promise<AirweaveSDK.DestinationWithConfigFields> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirweaveSDKEnvironment.Production,
                `destinations/detail/${encodeURIComponent(shortName)}`,
            ),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.0.92",
                "User-Agent": "@airweave/sdk/0.0.92",
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
            return serializers.DestinationWithConfigFields.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /destinations/detail/{short_name}.",
                );
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
