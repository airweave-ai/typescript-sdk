/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../../../../index.js";

/**
 * @example
 *     {
 *         query: "customer payment issues",
 *         filter: {
 *             must: {
 *                 key: "key"
 *             }
 *         },
 *         limit: 50,
 *         score_threshold: 0.7,
 *         response_type: "completion"
 *     }
 */
export interface SearchRequest {
    /** The search query text */
    query: string;
    /** Qdrant native filter for metadata-based filtering */
    filter?: AirweaveSDK.Filter;
    /** Number of results to skip */
    offset?: number;
    /** Maximum number of results to return */
    limit?: number;
    /** Minimum similarity score threshold */
    score_threshold?: number;
    /** Whether to summarize results */
    summarize?: boolean;
    /** Type of response (raw or completion) */
    response_type?: AirweaveSDK.ResponseType;
    /** Query expansion strategy. Enhances recall by expanding the query with synonyms, related terms, and other variations, but increases latency. */
    expansion_strategy?: AirweaveSDK.QueryExpansionStrategy;
}
