/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../index.js";

/**
 * All possible payload filtering conditions
 */
export interface FieldCondition {
    /** Payload key */
    key: string;
    /** Check if point has field with a given value */
    match?: FieldCondition.Match;
    /** Check if points value lies in a given range */
    range?: AirweaveSDK.Range;
    /** Check if points geolocation lies in a given area */
    geo_bounding_box?: AirweaveSDK.GeoBoundingBox;
    /** Check if geo point is within a given radius */
    geo_radius?: AirweaveSDK.GeoRadius;
    /** Check if geo point is within a given polygon */
    geo_polygon?: AirweaveSDK.GeoPolygon;
    /** Check number of values of the field */
    values_count?: AirweaveSDK.ValuesCount;
    /** Check that the field is empty, alternative syntax for `is_empty: \&quot;field_name\&quot;` */
    is_empty?: boolean;
    /** Check that the field is null, alternative syntax for `is_null: \&quot;field_name\&quot;` */
    is_null?: boolean;
}

export namespace FieldCondition {
    /**
     * Check if point has field with a given value
     */
    export type Match = AirweaveSDK.MatchValue | AirweaveSDK.MatchText | AirweaveSDK.MatchAny | AirweaveSDK.MatchExcept;
}
