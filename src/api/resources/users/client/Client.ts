/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as AirweaveSDK from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Users {
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

export class Users {
    constructor(protected readonly _options: Users.Options) {}

    /**
     * Get current user.
     *
     * Args:
     * ----
     *     current_user (User): The current user.
     *
     * Returns:
     * -------
     *     schemas.User: The user object.
     *
     * @param {Users.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link AirweaveSDK.UnprocessableEntityError}
     *
     * @example
     *     await client.users.readUser()
     */
    public async readUser(requestOptions?: Users.RequestOptions): Promise<AirweaveSDK.User> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "users/"),
            method: "GET",
            headers: {
                "x-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airweave/sdk",
                "X-Fern-SDK-Version": "0.1.9",
                "User-Agent": "@airweave/sdk/0.1.9",
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
            return serializers.User.parseOrThrow(_response.body, {
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
                throw new errors.AirweaveSDKTimeoutError("Timeout exceeded when calling GET /users/.");
            case "unknown":
                throw new errors.AirweaveSDKError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
