/*
    OJType.js
    Model class for an @type or internal alias
    (c) 2017-2018 musictheory.net, LLC
    MIT license, http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const OJError     = require("../Errors").OJError;
const Utils       = require("../Utils");
const _           = require("lodash");


class OJType {

constructor(name, kind, parameterNames, parameterTypes, parameterOptional, returnType)
{
    this.name = name;
    this.kind = kind;
    this.parameterNames = parameterNames;
    this.parameterTypes = parameterTypes;
    this.parameterOptional = parameterOptional;
    this.returnType = returnType;

    // Is this type in the current compilation unit?
    this.local = true;
}


loadState(state)
{
    this.name              = state.name;
    this.kind              = state.kind;
    this.parameterNames    = state.parameterNames;
    this.parameterTypes    = state.parameterTypes;
    this.parameterOptional = state.parameterOptional;
    this.returnType        = state.returnType;
}


saveState()
{
    return {
        name:              this.name,
        kind:              this.kind,
        parameterNames:    this.parameterNames,
        parameterTypes:    this.parameterTypes,
        parameterOptional: this.parameterOptional,
        returnType:        this.returnType
    };
}

}

OJType.KindPrimitive = "primitive";
OJType.KindAlias     = "alias";
OJType.KindFunction  = "function";
OJType.KindTuple     = "tuple";
OJType.KindObject    = "object";

OJType.makePrimitive = function(name)
{
    return new OJType(name, OJType.KindPrimitive, null, null, null, null);
}


OJType.makeAlias = function(name, original)
{
    return new OJType(name, OJType.KindAlias, null, null, null, original);
}


module.exports = OJType;
