/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jslint sub: true */
/**
 * @description A registry for HelperDefs.
 * @constructor
 */
function HelperDefRegistry(){
    this.helperDefs = {};
}

HelperDefRegistry.prototype.auraType = "HelperDefRegistry";

/**
 * Returns a HelperDef instance or config after adding to the registry.
 * Throws an error if componentDefDescriptor is not provided.
 * @param {Object} componentDefDescriptor Required. The descriptor for the componentDef object.
 * @param {Object} config Passes in a config, a HelperDef, or the name of a HelperDef.
 * @param {ComponentDef} componentDef If provided, resolves the HelperDefs in the component's hierarchy.
 * @param {Object} mapping of imports to library definitions.
 * @returns {HelperDef} HelperDef instance or config after adding to the registry
 */
HelperDefRegistry.prototype.getDef = function(componentDefDescriptor, componentDef, libraries){
    aura.assert(componentDefDescriptor, "ComponentDef Descriptor is required");
    var ret = this.helperDefs[componentDefDescriptor];
    if(!ret){
    	ret = new HelperDef(componentDef, libraries);
        this.helperDefs[componentDefDescriptor] = ret;
    }
    return ret;
};
