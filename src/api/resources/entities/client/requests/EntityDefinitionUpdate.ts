/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as AirweaveSDK from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         type: "file",
 *         entitySchema: ["entity_schema"],
 *         moduleName: "module_name",
 *         className: "class_name"
 *     }
 */
export interface EntityDefinitionUpdate {
    name: string;
    description?: string;
    type: AirweaveSDK.EntityType;
    entitySchema: AirweaveSDK.EntityDefinitionUpdateEntitySchema;
    parentId?: string;
    moduleName: string;
    className: string;
}
