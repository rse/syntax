/*
**  Syntax -- Unobtrusive Syntax Highlighting
**  Copyright (c) 2015-2016 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Syntax = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":11}],2:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":12}],3:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":13}],4:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":14}],5:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":15}],6:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":16}],7:[function(_dereq_,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],8:[function(_dereq_,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = _dereq_("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":3}],9:[function(_dereq_,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = _dereq_("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = _dereq_("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":1,"../core-js/is-iterable":2}],10:[function(_dereq_,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = _dereq_("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = _dereq_("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":5,"../core-js/symbol/iterator":6}],11:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.get-iterator');
},{"../modules/core.get-iterator":76,"../modules/es6.string.iterator":82,"../modules/web.dom.iterable":86}],12:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.is-iterable');
},{"../modules/core.is-iterable":77,"../modules/es6.string.iterator":82,"../modules/web.dom.iterable":86}],13:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.define-property');
var $Object = _dereq_('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":23,"../../modules/es6.object.define-property":79}],14:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.keys');
module.exports = _dereq_('../../modules/_core').Object.keys;
},{"../../modules/_core":23,"../../modules/es6.object.keys":80}],15:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.symbol');
_dereq_('../../modules/es6.object.to-string');
_dereq_('../../modules/es7.symbol.async-iterator');
_dereq_('../../modules/es7.symbol.observable');
module.exports = _dereq_('../../modules/_core').Symbol;
},{"../../modules/_core":23,"../../modules/es6.object.to-string":81,"../../modules/es6.symbol":83,"../../modules/es7.symbol.async-iterator":84,"../../modules/es7.symbol.observable":85}],16:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.string.iterator');
_dereq_('../../modules/web.dom.iterable');
module.exports = _dereq_('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":73,"../../modules/es6.string.iterator":82,"../../modules/web.dom.iterable":86}],17:[function(_dereq_,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],18:[function(_dereq_,module,exports){
module.exports = function(){ /* empty */ };
},{}],19:[function(_dereq_,module,exports){
var isObject = _dereq_('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":39}],20:[function(_dereq_,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _dereq_('./_to-iobject')
  , toLength  = _dereq_('./_to-length')
  , toIndex   = _dereq_('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":65,"./_to-iobject":67,"./_to-length":68}],21:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_('./_cof')
  , TAG = _dereq_('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":22,"./_wks":74}],22:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],23:[function(_dereq_,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],24:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":17}],25:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],26:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":31}],27:[function(_dereq_,module,exports){
var isObject = _dereq_('./_is-object')
  , document = _dereq_('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":32,"./_is-object":39}],28:[function(_dereq_,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],29:[function(_dereq_,module,exports){
// all enumerable object keys, includes symbols
var getKeys = _dereq_('./_object-keys')
  , gOPS    = _dereq_('./_object-gops')
  , pIE     = _dereq_('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":53,"./_object-keys":56,"./_object-pie":57}],30:[function(_dereq_,module,exports){
var global    = _dereq_('./_global')
  , core      = _dereq_('./_core')
  , ctx       = _dereq_('./_ctx')
  , hide      = _dereq_('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":23,"./_ctx":24,"./_global":32,"./_hide":34}],31:[function(_dereq_,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],32:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],33:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],34:[function(_dereq_,module,exports){
var dP         = _dereq_('./_object-dp')
  , createDesc = _dereq_('./_property-desc');
module.exports = _dereq_('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":26,"./_object-dp":48,"./_property-desc":59}],35:[function(_dereq_,module,exports){
module.exports = _dereq_('./_global').document && document.documentElement;
},{"./_global":32}],36:[function(_dereq_,module,exports){
module.exports = !_dereq_('./_descriptors') && !_dereq_('./_fails')(function(){
  return Object.defineProperty(_dereq_('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":26,"./_dom-create":27,"./_fails":31}],37:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":22}],38:[function(_dereq_,module,exports){
// 7.2.2 IsArray(argument)
var cof = _dereq_('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":22}],39:[function(_dereq_,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],40:[function(_dereq_,module,exports){
'use strict';
var create         = _dereq_('./_object-create')
  , descriptor     = _dereq_('./_property-desc')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_('./_hide')(IteratorPrototype, _dereq_('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":34,"./_object-create":47,"./_property-desc":59,"./_set-to-string-tag":61,"./_wks":74}],41:[function(_dereq_,module,exports){
'use strict';
var LIBRARY        = _dereq_('./_library')
  , $export        = _dereq_('./_export')
  , redefine       = _dereq_('./_redefine')
  , hide           = _dereq_('./_hide')
  , has            = _dereq_('./_has')
  , Iterators      = _dereq_('./_iterators')
  , $iterCreate    = _dereq_('./_iter-create')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , getPrototypeOf = _dereq_('./_object-gpo')
  , ITERATOR       = _dereq_('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":30,"./_has":33,"./_hide":34,"./_iter-create":40,"./_iterators":43,"./_library":45,"./_object-gpo":54,"./_redefine":60,"./_set-to-string-tag":61,"./_wks":74}],42:[function(_dereq_,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],43:[function(_dereq_,module,exports){
module.exports = {};
},{}],44:[function(_dereq_,module,exports){
var getKeys   = _dereq_('./_object-keys')
  , toIObject = _dereq_('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":56,"./_to-iobject":67}],45:[function(_dereq_,module,exports){
module.exports = true;
},{}],46:[function(_dereq_,module,exports){
var META     = _dereq_('./_uid')('meta')
  , isObject = _dereq_('./_is-object')
  , has      = _dereq_('./_has')
  , setDesc  = _dereq_('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !_dereq_('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":31,"./_has":33,"./_is-object":39,"./_object-dp":48,"./_uid":71}],47:[function(_dereq_,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = _dereq_('./_an-object')
  , dPs         = _dereq_('./_object-dps')
  , enumBugKeys = _dereq_('./_enum-bug-keys')
  , IE_PROTO    = _dereq_('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _dereq_('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _dereq_('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":19,"./_dom-create":27,"./_enum-bug-keys":28,"./_html":35,"./_object-dps":49,"./_shared-key":62}],48:[function(_dereq_,module,exports){
var anObject       = _dereq_('./_an-object')
  , IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define')
  , toPrimitive    = _dereq_('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = _dereq_('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":19,"./_descriptors":26,"./_ie8-dom-define":36,"./_to-primitive":70}],49:[function(_dereq_,module,exports){
var dP       = _dereq_('./_object-dp')
  , anObject = _dereq_('./_an-object')
  , getKeys  = _dereq_('./_object-keys');

module.exports = _dereq_('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":19,"./_descriptors":26,"./_object-dp":48,"./_object-keys":56}],50:[function(_dereq_,module,exports){
var pIE            = _dereq_('./_object-pie')
  , createDesc     = _dereq_('./_property-desc')
  , toIObject      = _dereq_('./_to-iobject')
  , toPrimitive    = _dereq_('./_to-primitive')
  , has            = _dereq_('./_has')
  , IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = _dereq_('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":26,"./_has":33,"./_ie8-dom-define":36,"./_object-pie":57,"./_property-desc":59,"./_to-iobject":67,"./_to-primitive":70}],51:[function(_dereq_,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = _dereq_('./_to-iobject')
  , gOPN      = _dereq_('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":52,"./_to-iobject":67}],52:[function(_dereq_,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = _dereq_('./_object-keys-internal')
  , hiddenKeys = _dereq_('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":28,"./_object-keys-internal":55}],53:[function(_dereq_,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],54:[function(_dereq_,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = _dereq_('./_has')
  , toObject    = _dereq_('./_to-object')
  , IE_PROTO    = _dereq_('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":33,"./_shared-key":62,"./_to-object":69}],55:[function(_dereq_,module,exports){
var has          = _dereq_('./_has')
  , toIObject    = _dereq_('./_to-iobject')
  , arrayIndexOf = _dereq_('./_array-includes')(false)
  , IE_PROTO     = _dereq_('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":20,"./_has":33,"./_shared-key":62,"./_to-iobject":67}],56:[function(_dereq_,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _dereq_('./_object-keys-internal')
  , enumBugKeys = _dereq_('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":28,"./_object-keys-internal":55}],57:[function(_dereq_,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],58:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_('./_export')
  , core    = _dereq_('./_core')
  , fails   = _dereq_('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":23,"./_export":30,"./_fails":31}],59:[function(_dereq_,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],60:[function(_dereq_,module,exports){
module.exports = _dereq_('./_hide');
},{"./_hide":34}],61:[function(_dereq_,module,exports){
var def = _dereq_('./_object-dp').f
  , has = _dereq_('./_has')
  , TAG = _dereq_('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":33,"./_object-dp":48,"./_wks":74}],62:[function(_dereq_,module,exports){
var shared = _dereq_('./_shared')('keys')
  , uid    = _dereq_('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":63,"./_uid":71}],63:[function(_dereq_,module,exports){
var global = _dereq_('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":32}],64:[function(_dereq_,module,exports){
var toInteger = _dereq_('./_to-integer')
  , defined   = _dereq_('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":25,"./_to-integer":66}],65:[function(_dereq_,module,exports){
var toInteger = _dereq_('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":66}],66:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],67:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_('./_iobject')
  , defined = _dereq_('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":25,"./_iobject":37}],68:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":66}],69:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":25}],70:[function(_dereq_,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = _dereq_('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":39}],71:[function(_dereq_,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],72:[function(_dereq_,module,exports){
var global         = _dereq_('./_global')
  , core           = _dereq_('./_core')
  , LIBRARY        = _dereq_('./_library')
  , wksExt         = _dereq_('./_wks-ext')
  , defineProperty = _dereq_('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":23,"./_global":32,"./_library":45,"./_object-dp":48,"./_wks-ext":73}],73:[function(_dereq_,module,exports){
exports.f = _dereq_('./_wks');
},{"./_wks":74}],74:[function(_dereq_,module,exports){
var store      = _dereq_('./_shared')('wks')
  , uid        = _dereq_('./_uid')
  , Symbol     = _dereq_('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":32,"./_shared":63,"./_uid":71}],75:[function(_dereq_,module,exports){
var classof   = _dereq_('./_classof')
  , ITERATOR  = _dereq_('./_wks')('iterator')
  , Iterators = _dereq_('./_iterators');
module.exports = _dereq_('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":21,"./_core":23,"./_iterators":43,"./_wks":74}],76:[function(_dereq_,module,exports){
var anObject = _dereq_('./_an-object')
  , get      = _dereq_('./core.get-iterator-method');
module.exports = _dereq_('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":19,"./_core":23,"./core.get-iterator-method":75}],77:[function(_dereq_,module,exports){
var classof   = _dereq_('./_classof')
  , ITERATOR  = _dereq_('./_wks')('iterator')
  , Iterators = _dereq_('./_iterators');
module.exports = _dereq_('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":21,"./_core":23,"./_iterators":43,"./_wks":74}],78:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_('./_add-to-unscopables')
  , step             = _dereq_('./_iter-step')
  , Iterators        = _dereq_('./_iterators')
  , toIObject        = _dereq_('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":18,"./_iter-define":41,"./_iter-step":42,"./_iterators":43,"./_to-iobject":67}],79:[function(_dereq_,module,exports){
var $export = _dereq_('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !_dereq_('./_descriptors'), 'Object', {defineProperty: _dereq_('./_object-dp').f});
},{"./_descriptors":26,"./_export":30,"./_object-dp":48}],80:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_('./_to-object')
  , $keys    = _dereq_('./_object-keys');

_dereq_('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":56,"./_object-sap":58,"./_to-object":69}],81:[function(_dereq_,module,exports){

},{}],82:[function(_dereq_,module,exports){
'use strict';
var $at  = _dereq_('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":41,"./_string-at":64}],83:[function(_dereq_,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = _dereq_('./_global')
  , has            = _dereq_('./_has')
  , DESCRIPTORS    = _dereq_('./_descriptors')
  , $export        = _dereq_('./_export')
  , redefine       = _dereq_('./_redefine')
  , META           = _dereq_('./_meta').KEY
  , $fails         = _dereq_('./_fails')
  , shared         = _dereq_('./_shared')
  , setToStringTag = _dereq_('./_set-to-string-tag')
  , uid            = _dereq_('./_uid')
  , wks            = _dereq_('./_wks')
  , wksExt         = _dereq_('./_wks-ext')
  , wksDefine      = _dereq_('./_wks-define')
  , keyOf          = _dereq_('./_keyof')
  , enumKeys       = _dereq_('./_enum-keys')
  , isArray        = _dereq_('./_is-array')
  , anObject       = _dereq_('./_an-object')
  , toIObject      = _dereq_('./_to-iobject')
  , toPrimitive    = _dereq_('./_to-primitive')
  , createDesc     = _dereq_('./_property-desc')
  , _create        = _dereq_('./_object-create')
  , gOPNExt        = _dereq_('./_object-gopn-ext')
  , $GOPD          = _dereq_('./_object-gopd')
  , $DP            = _dereq_('./_object-dp')
  , $keys          = _dereq_('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  _dereq_('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  _dereq_('./_object-pie').f  = $propertyIsEnumerable;
  _dereq_('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !_dereq_('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":19,"./_descriptors":26,"./_enum-keys":29,"./_export":30,"./_fails":31,"./_global":32,"./_has":33,"./_hide":34,"./_is-array":38,"./_keyof":44,"./_library":45,"./_meta":46,"./_object-create":47,"./_object-dp":48,"./_object-gopd":50,"./_object-gopn":52,"./_object-gopn-ext":51,"./_object-gops":53,"./_object-keys":56,"./_object-pie":57,"./_property-desc":59,"./_redefine":60,"./_set-to-string-tag":61,"./_shared":63,"./_to-iobject":67,"./_to-primitive":70,"./_uid":71,"./_wks":74,"./_wks-define":72,"./_wks-ext":73}],84:[function(_dereq_,module,exports){
_dereq_('./_wks-define')('asyncIterator');
},{"./_wks-define":72}],85:[function(_dereq_,module,exports){
_dereq_('./_wks-define')('observable');
},{"./_wks-define":72}],86:[function(_dereq_,module,exports){
_dereq_('./es6.array.iterator');
var global        = _dereq_('./_global')
  , hide          = _dereq_('./_hide')
  , Iterators     = _dereq_('./_iterators')
  , TO_STRING_TAG = _dereq_('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":32,"./_hide":34,"./_iterators":43,"./_wks":74,"./es6.array.iterator":78}],87:[function(_dereq_,module,exports){
(function (global){
"use strict";

var _slicedToArray2 = _dereq_("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = _dereq_("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = _dereq_("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = _dereq_("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = _dereq_("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = _dereq_("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _tokenizr = _dereq_("tokenizr");

var _tokenizr2 = _interopRequireDefault(_tokenizr);

var _highlight2 = _dereq_("highlight.js/lib/highlight");

var _highlight3 = _interopRequireDefault(_highlight2);

var _sax = _dereq_("sax");

var _sax2 = _interopRequireDefault(_sax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  load language support (Web)  */
_highlight3.default.registerLanguage("xml", _dereq_("highlight.js/lib/languages/xml")); /*
                                                                                        **  Syntax -- Unobtrusive Syntax Highlighting
                                                                                        **  Copyright (c) 2015-2016 Ralf S. Engelschall <rse@engelschall.com>
                                                                                        **
                                                                                        **  Permission is hereby granted, free of charge, to any person obtaining
                                                                                        **  a copy of this software and associated documentation files (the
                                                                                        **  "Software"), to deal in the Software without restriction, including
                                                                                        **  without limitation the rights to use, copy, modify, merge, publish,
                                                                                        **  distribute, sublicense, and/or sell copies of the Software, and to
                                                                                        **  permit persons to whom the Software is furnished to do so, subject to
                                                                                        **  the following conditions:
                                                                                        **
                                                                                        **  The above copyright notice and this permission notice shall be included
                                                                                        **  in all copies or substantial portions of the Software.
                                                                                        **
                                                                                        **  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                                                                                        **  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                                                                                        **  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                                                                                        **  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
                                                                                        **  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
                                                                                        **  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                                                                                        **  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                                                                                        */

/*  external requirements  */

_highlight3.default.registerLanguage("css", _dereq_("highlight.js/lib/languages/css"));
_highlight3.default.registerLanguage("less", _dereq_("highlight.js/lib/languages/less"));
_highlight3.default.registerLanguage("http", _dereq_("highlight.js/lib/languages/http"));
_highlight3.default.registerLanguage("json", _dereq_("highlight.js/lib/languages/json"));
_highlight3.default.registerLanguage("ini", _dereq_("highlight.js/lib/languages/ini"));
_highlight3.default.registerLanguage("markdown", _dereq_("highlight.js/lib/languages/markdown"));
_highlight3.default.registerLanguage("sql", _dereq_("highlight.js/lib/languages/sql"));

/*  load language support (Major Languages)  */
_highlight3.default.registerLanguage("cpp", _dereq_("highlight.js/lib/languages/cpp"));
_highlight3.default.registerLanguage("objectivec", _dereq_("highlight.js/lib/languages/objectivec"));
_highlight3.default.registerLanguage("swift", _dereq_("highlight.js/lib/languages/swift"));
_highlight3.default.registerLanguage("cs", _dereq_("highlight.js/lib/languages/cs"));
_highlight3.default.registerLanguage("fsharp", _dereq_("highlight.js/lib/languages/fsharp"));
_highlight3.default.registerLanguage("go", _dereq_("highlight.js/lib/languages/go"));
_highlight3.default.registerLanguage("java", _dereq_("highlight.js/lib/languages/java"));
_highlight3.default.registerLanguage("groovy", _dereq_("highlight.js/lib/languages/groovy"));
_highlight3.default.registerLanguage("scala", _dereq_("highlight.js/lib/languages/scala"));
_highlight3.default.registerLanguage("javascript", _dereq_("highlight.js/lib/languages/javascript"));
_highlight3.default.registerLanguage("typescript", _dereq_("highlight.js/lib/languages/typescript"));
_highlight3.default.registerLanguage("php", _dereq_("highlight.js/lib/languages/php"));
_highlight3.default.registerLanguage("perl", _dereq_("highlight.js/lib/languages/perl"));
_highlight3.default.registerLanguage("python", _dereq_("highlight.js/lib/languages/python"));
_highlight3.default.registerLanguage("ruby", _dereq_("highlight.js/lib/languages/ruby"));

/*  load language support (Shell)  */
_highlight3.default.registerLanguage("bash", _dereq_("highlight.js/lib/languages/bash"));
_highlight3.default.registerLanguage("powershell", _dereq_("highlight.js/lib/languages/powershell"));

/*  internal API symbols  */
var CONFIG = (0, _symbol2.default)("CONFIG");
var RICHTEXT = (0, _symbol2.default)("RICHTEXT");
var PLAINTEXT = (0, _symbol2.default)("PLAINTEXT");
var MARKUP = (0, _symbol2.default)("MARKUP");
var SEQUENCE = (0, _symbol2.default)("SEQUENCE");

/*  exported API class  */

var Syntax = function () {
    (0, _createClass3.default)(Syntax, null, [{
        key: "version",

        /*  return the library version  */
        value: function version() {
            /* global 1: false */
            /* global 3: false */
            /* global 4: false */
            /* global 20161120:  false */
            return {
                major: 1,
                minor: 3,
                micro: 4,
                date: 20161120
            };
        }

        /*  construct the PAI class  */

    }]);

    function Syntax() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, Syntax);

        /*  predefine valid options  */
        this[CONFIG] = {
            language: "auto",
            cssPrefix: "syntax-",
            tabReplace: "    ",
            newlineReplace: "\n",
            regexAnchorOpen: "=\\(",
            regexAnchorClose: "\\)=",
            regexMarkerOpen: "=\\{",
            regexMarkerClose: "\\}="
        };

        /*  initialize us  */
        this.config(config);
        this._reset();
    }

    /*  INTERNAL: reset the internals  */


    (0, _createClass3.default)(Syntax, [{
        key: "_reset",
        value: function _reset() {
            this[RICHTEXT] = "";
            this[PLAINTEXT] = "";
            this[MARKUP] = {
                anchor: {},
                marker: [],
                comment: [],
                keyword: [],
                literal: []
            };
            this[SEQUENCE] = [];
        }

        /*  set configuration options  */

    }, {
        key: "config",
        value: function config() {
            var _this = this;

            var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            /*  sanity check usage  */
            if (arguments.length !== 1) throw new Error("invalid number of arguments (1 expected)");
            if ((typeof _config === "undefined" ? "undefined" : (0, _typeof3.default)(_config)) !== "object") throw new Error("invalid configuration argument (object expected)");

            /*  remember old language  */
            var languageOld = this[CONFIG].language;

            /*  iterate over all configuration options  */
            (0, _keys2.default)(_config).forEach(function (option) {
                /*  sanity check their validity  */
                if (_this[CONFIG][option] === undefined) throw new Error("invalid configuration option \"" + option + "\"");

                /*  override default value  */
                _this[CONFIG][option] = _config[option];
            });

            /*  try to auto-load new language  */
            var language = this[CONFIG].language;
            if (language !== languageOld && language.match(/^(?:auto|none)$/) === null) {
                var found = _highlight3.default.getLanguage(language);
                if (!found) {
                    /* global global: true */
                    if ((0, _typeof3.default)(global.window) === "object") throw new Error("cannot auto-load new languages in browser environment");
                    var obj = void 0;
                    try {
                        obj = _dereq_("highlight.js/lib/languages/" + language);
                    } catch (ex) {}
                    if (!obj) throw new Error("failed to load language \"" + language + "\"");
                    _highlight3.default.registerLanguage(language, obj);
                }
            }

            return this;
        }

        /*  set rich text  */

    }, {
        key: "richtext",
        value: function richtext(text) {
            /*  sanity check usage  */
            if (arguments.length !== 1) throw new Error("invalid number of arguments (1 expected)");
            if (typeof text !== "string") throw new Error("invalid rich text argument (string expected)");

            /*  reset internals  */
            this._reset();

            /*  parse rich text  */
            this[RICHTEXT] = text;
            this._extract();
            this._highlight();
            return this;
        }

        /*  INTERNAL: split rich text into plain text plus anchors/markers  */

    }, {
        key: "_extract",
        value: function _extract() {
            var _this2 = this;

            /*  extract explicit language-unspecific anchor/marker
                (beforehand to make text valid language syntax again)  */
            var lexer = new _tokenizr2.default();
            var regexAnchor = new RegExp(this[CONFIG].regexAnchorOpen + "(\\d+)" + this[CONFIG].regexAnchorClose);
            var regexMarker = new RegExp(this[CONFIG].regexMarkerOpen + "(.+?)" + this[CONFIG].regexMarkerClose);
            var regexTextNonGreedy = new RegExp("(?:.|\\r?\\n)+?(?=" + this[CONFIG].regexAnchorOpen + "|" + this[CONFIG].regexMarkerOpen + ")");
            var regexTextGreedy = new RegExp("(?:.|\\r?\\n)+");
            lexer.rule(regexAnchor, function (ctx, m) {
                ctx.accept("anchor", m[1]);
            });
            lexer.rule(regexMarker, function (ctx, m) {
                ctx.accept("marker", m[1]);
            });
            lexer.rule(regexTextNonGreedy, function (ctx, m) {
                ctx.accept("text", m[0]);
            });
            lexer.rule(regexTextGreedy, function (ctx, m) {
                ctx.accept("text", m[0]);
            });
            lexer.input(this[RICHTEXT]);
            this[PLAINTEXT] = "";
            var pos = 0;
            lexer.tokens().forEach(function (token) {
                if (token.isA("anchor")) _this2[MARKUP].anchor[token.value] = pos;else if (token.isA("marker")) {
                    _this2[MARKUP].marker.push([pos, pos + token.value.length]);
                    _this2[PLAINTEXT] += token.value;
                    pos += token.value.length;
                } else if (token.isA("text")) {
                    _this2[PLAINTEXT] += token.value;
                    pos += token.value.length;
                }
            });
        }

        /*  INTERNAL: find language-specific syntactical elements of text  */

    }, {
        key: "_highlight",
        value: function _highlight() {
            var _this3 = this;

            /*  pass 1: apply the highlighting engine onto plain text and get XML/HTML  */
            if (this[CONFIG].language === "none") return;
            var result = void 0;
            _highlight3.default.configure({ tabReplace: this[CONFIG].tabReplace, classPrefix: "highlight-redux-" });
            if (this[CONFIG].language === "auto") result = _highlight3.default.highlightAuto(this[PLAINTEXT]);else if (this[CONFIG].language instanceof Array) result = _highlight3.default.highlightAuto(this[PLAINTEXT], this[CONFIG].language);else result = _highlight3.default.highlight(this[CONFIG].language, this[PLAINTEXT], true);

            /*  pass 2: parse XML/HTML to determine highlighting positions  */
            var pos = 0;
            var stack = [];
            var parser = _sax2.default.parser(true, {});
            parser.onerror = function (err) {
                throw new Error("internal XML/HTML parsing error: " + err + "?!");
            };
            parser.onopentag = function (node) {
                var type = node.attributes.class;
                if (typeof type === "string" && type.match(/^highlight-redux-(?:regexp|string|number)$/) !== null) type = "highlight-redux-literal";
                if (typeof type === "string" && type.match(/^highlight-redux-(?:keyword|literal|comment)$/) !== null) {
                    type = type.replace(/^highlight-redux-/, "");
                    stack.push({ type: type, tag: node.name, pos: pos, take: true });
                } else stack.push({ take: false, tag: node.name });
            };
            parser.ontext = function (text) {
                pos += text.length;
            };
            parser.onclosetag = function (name) {
                var info = stack.pop();
                if (info.tag !== name) throw new Error("internal XML/HTML parsing error: " + ("open tag <" + info.tag + "> does not match close tag </" + name + ">?!"));
                if (info.take) _this3[MARKUP][info.type].push([info.pos, pos]);
            };
            parser.write("<root>" + result.value + "</root>").close();
            return this;
        }

        /*  retrieve plain text  */

    }, {
        key: "plaintext",
        value: function plaintext(_plaintext) {
            if (arguments.length > 1) throw new Error("invalid number of arguments (0 or 1 expected)");
            if (arguments.length === 1) {
                if (typeof _plaintext !== "string") throw new Error("invalid plain text argument (string expected)");
                this[PLAINTEXT] = _plaintext;
                return this;
            } else return this[PLAINTEXT];
        }

        /*  set/get markup information  */

    }, {
        key: "markup",
        value: function markup(_markup) {
            if (arguments.length > 1) throw new Error("invalid number of arguments (0 or 1 expected)");
            if (arguments.length === 1) {
                if ((typeof _markup === "undefined" ? "undefined" : (0, _typeof3.default)(_markup)) !== "object") throw new Error("invalid markup argument (object expected)");
                this[MARKUP] = _markup;
                return this;
            } else return this[MARKUP];
        }

        /*  INTERNAL: merge and sequence the markup information  */

    }, {
        key: "_sequence",
        value: function _sequence() {
            var _this4 = this;

            /*  insert all highlighting results
                (potentially strictly nested, but never overlapping)  */
            var list = [];
            var insert = function insert(type) {
                var items = _this4[MARKUP][type];
                items.forEach(function (item) {
                    list.push([item[0], "S", type]);
                    list.push([item[1], "E", type]);
                });
            };
            insert("comment");
            insert("keyword");
            insert("literal");

            /*  make list sorted according to position  */
            list = list.sort(function (a, b) {
                return a[0] - b[0];
            });

            /*  iterate over all markers...  */
            this[MARKUP].marker.forEach(function (marker) {
                var _marker = (0, _slicedToArray3.default)(marker, 2),
                    S = _marker[0],
                    E = _marker[1];

                /*  find position for marker start  */


                var i = void 0;
                for (i = 0; i < list.length; i++) {
                    if (list[i][0] >= S) break;
                } /*  skip start tags at marker start position
                      (to avoid inserting zero-length markers)  */
                for (; i < list.length; i++) {
                    if (!(list[i][0] === S && list[i][1] === "S")) break;
                } /*  insert marker start  */
                list.splice(i, 0, [S, "S", "marker"]);
                i += 1;

                /*  skip over all intermediate items  */
                for (; i < list.length; i++) {
                    if (list[i][0] >= E) break;
                    /*  stop marker before, start again after  */
                    list.splice(i, 0, [list[i][0], "E", "marker"]);
                    list.splice(i + 2, 0, [list[i][0], "S", "marker"]);
                    i += 2;
                }

                /*  insert marker end  */
                list.splice(i, 0, [E, "E", "marker"]);
            });

            /*  iterate over all anchors...  */
            (0, _keys2.default)(this[MARKUP].anchor).forEach(function (anchor) {
                var pos = _this4[MARKUP].anchor[anchor];

                /*  find position for anchor start  */
                var i = void 0;
                for (i = 0; i < list.length; i++) {
                    if (list[i][0] >= pos) break;
                } /*  insert anchor  */
                list.splice(i, 0, [pos, "X", "anchor", anchor]);
            });

            /*  iterate over all markers  */
            this[SEQUENCE] = list;
        }

        /*  convert into HTML  */

    }, {
        key: "html",
        value: function html() {
            var _this5 = this;

            /*  sanity check usage  */
            if (arguments.length !== 0) throw new Error("invalid number of arguments (0 expected)");

            /*  merge and sequence the markup information  */
            this._sequence();

            /*  helper function for escaping characters with special meaning in HTML  */
            var renderText = function renderText(text) {
                return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, _this5[CONFIG].newlineReplace);
            };

            /*  spice HTML markup into the plain text  */
            var text = this[PLAINTEXT];
            var markup = "";
            var posLast = 0;
            this[SEQUENCE].forEach(function (item) {
                var _item = (0, _slicedToArray3.default)(item, 4),
                    pos = _item[0],
                    kind = _item[1],
                    type = _item[2],
                    val = _item[3];

                var tag = void 0;
                if (type === "anchor") tag = "<span class=\"" + _this5[CONFIG].cssPrefix + type + " " + ("" + _this5[CONFIG].cssPrefix + type + "-" + val + "\"></span>");else if (kind === "S") tag = "<span class=\"" + _this5[CONFIG].cssPrefix + type + "\">";else tag = "</span>";
                markup += renderText(text.substring(posLast, pos)) + tag;
                posLast = pos;
            });
            markup += renderText(text.substring(posLast));

            return markup;
        }
    }]);
    return Syntax;
}();

/*  export the traditional way for interoperability reasons
    (as Babel would export an object with a 'default' field)  */


module.exports = Syntax;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/symbol":5,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/createClass":8,"babel-runtime/helpers/slicedToArray":9,"babel-runtime/helpers/typeof":10,"highlight.js/lib/highlight":"highlight.js/lib/highlight","highlight.js/lib/languages/bash":"highlight.js/lib/languages/bash","highlight.js/lib/languages/cpp":"highlight.js/lib/languages/cpp","highlight.js/lib/languages/cs":"highlight.js/lib/languages/cs","highlight.js/lib/languages/css":"highlight.js/lib/languages/css","highlight.js/lib/languages/fsharp":"highlight.js/lib/languages/fsharp","highlight.js/lib/languages/go":"highlight.js/lib/languages/go","highlight.js/lib/languages/groovy":"highlight.js/lib/languages/groovy","highlight.js/lib/languages/http":"highlight.js/lib/languages/http","highlight.js/lib/languages/ini":"highlight.js/lib/languages/ini","highlight.js/lib/languages/java":"highlight.js/lib/languages/java","highlight.js/lib/languages/javascript":"highlight.js/lib/languages/javascript","highlight.js/lib/languages/json":"highlight.js/lib/languages/json","highlight.js/lib/languages/less":"highlight.js/lib/languages/less","highlight.js/lib/languages/markdown":"highlight.js/lib/languages/markdown","highlight.js/lib/languages/objectivec":"highlight.js/lib/languages/objectivec","highlight.js/lib/languages/perl":"highlight.js/lib/languages/perl","highlight.js/lib/languages/php":"highlight.js/lib/languages/php","highlight.js/lib/languages/powershell":"highlight.js/lib/languages/powershell","highlight.js/lib/languages/python":"highlight.js/lib/languages/python","highlight.js/lib/languages/ruby":"highlight.js/lib/languages/ruby","highlight.js/lib/languages/scala":"highlight.js/lib/languages/scala","highlight.js/lib/languages/sql":"highlight.js/lib/languages/sql","highlight.js/lib/languages/swift":"highlight.js/lib/languages/swift","highlight.js/lib/languages/typescript":"highlight.js/lib/languages/typescript","highlight.js/lib/languages/xml":"highlight.js/lib/languages/xml","sax":"sax","tokenizr":"tokenizr"}]},{},[87])(87)
});