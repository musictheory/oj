/*
    OJMethod.js
    Simple model class for a method on a class or protocol
    (c) 2013-2016 musictheory.net, LLC
    MIT license, http://www.opensource.org/licenses/mit-license.php
*/

"use strict";


module.exports = class OJMethod {


constructor(selectorName, selectorType, returnType, parameterTypes, variableNames, optional)
{
    this.selectorName   = selectorName;
    this.selectorType   = selectorType;
    this.returnType     = returnType;
    this.parameterTypes = parameterTypes || [ ];
    this.variableNames  = variableNames  || [ ];
    this.optional       = optional;
    this.synthesized    = false;
}


}
