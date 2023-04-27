/*! For license information please see components-Button-stories-Button-index-stories.2f6b9f58.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwords_game_front=self.webpackChunkwords_game_front||[]).push([[586],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./src/components/Button/stories/Button/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:function(){return Button},__namedExportsOrder:function(){return __namedExportsOrder}});var _Button$parameters,_Button$parameters2,_Button$parameters2$d,E_work_words_game_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),src_components_Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/index.tsx"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=function Button(props){var color=props.color,isClickable=props.isClickable,onClick=props.onClick;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.z,{style:{width:100,height:100},color:color,isActive:isClickable,onClick:onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(src_components_Icon__WEBPACK_IMPORTED_MODULE_0__.J,{type:"bulb"})})})};Button.args={color:"#000000",isClickable:!0},Button.argTypes={onClick:{action:"clicked"}},__webpack_exports__.default={title:"Button",parameters:{backgrounds:{default:"dark"}}},Button.parameters=(0,E_work_words_game_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,E_work_words_game_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},Button.parameters),{},{docs:(0,E_work_words_game_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,E_work_words_game_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_Button$parameters=Button.parameters)||void 0===_Button$parameters?void 0:_Button$parameters.docs),{},{source:(0,E_work_words_game_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"props => {\n  const {\n    color,\n    isClickable,\n    onClick\n  } = props;\n  return <div style={{\n    position: 'absolute',\n    left: 0,\n    top: 0,\n    width: '100%',\n    height: '100%',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center'\n  }}>\r\n      <ButtonComp style={{\n      width: 100,\n      height: 100\n    }} color={color} isActive={isClickable} onClick={onClick}>\r\n        <Icon type=\"bulb\" />\r\n      </ButtonComp>\r\n    </div>;\n}"},null===(_Button$parameters2=Button.parameters)||void 0===_Button$parameters2||null===(_Button$parameters2$d=_Button$parameters2.docs)||void 0===_Button$parameters2$d?void 0:_Button$parameters2$d.source)})});var __namedExportsOrder=["Button"]},"./src/components/Button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useStyles=(0,__webpack_require__("./node_modules/react-jss/dist/react-jss.esm.js").QM)({main:{borderRadius:"100px",backgroundColor:"#FFFFFF",color:"var(--color)",boxShadow:"0 3px 0 var(--color)",display:"inline-flex",justifyContent:"center",alignItems:"center","&_isClickable":{cursor:"pointer"},"&_isHoverable":{"@media (hover)":{transition:"transform 200ms","&:hover":{transform:"scale(1.05)"}}}}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["style","className","color","isActive","isHoverable","onClick"],Button=react.forwardRef((function Button(props,ref){var style=props.style,className=props.className,_props$color=props.color,color=void 0===_props$color?"#000000":_props$color,_props$isActive=props.isActive,isActive=void 0===_props$isActive||_props$isActive,_props$isHoverable=props.isHoverable,isHoverable=void 0===_props$isHoverable||_props$isHoverable,onClick=props.onClick,otherProps=(0,objectWithoutProperties.Z)(props,_excluded),styles=useStyles();return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},otherProps),{},{ref:ref,style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{"--color":color}),className:classnames_default()(styles.main,isActive&&"".concat(styles.main,"_isClickable"),isHoverable&&"".concat(styles.main,"_isHoverable"),className),onClick:function handleClick(e){isActive&&(null==onClick||onClick(e))}}))}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},isHoverable:{defaultValue:null,description:"",name:"isHoverable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return Icon}});var _path,_path2,_path3,_path4,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgBulb(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M24 47.8125C37.2548 47.8125 48 37.1093 48 23.9062C48 10.7032 37.2548 0 24 0C10.7452 0 0 10.7032 0 23.9062C0 37.1093 10.7452 47.8125 24 47.8125Z"})),_path2||(_path2=react.createElement("path",{d:"M29.4209 36.0259H19.3721C18.9964 36.0259 18.636 35.8772 18.3703 35.6125C18.1046 35.3479 17.9553 34.9889 17.9553 34.6146C17.9553 34.2404 18.1046 33.8814 18.3703 33.6167C18.636 33.3521 18.9964 33.2034 19.3721 33.2034H29.4209C29.7967 33.2034 30.157 33.3521 30.4227 33.6167C30.6884 33.8814 30.8377 34.2404 30.8377 34.6146C30.8377 34.9889 30.6884 35.3479 30.4227 35.6125C30.157 35.8772 29.7967 36.0259 29.4209 36.0259Z"})),_path3||(_path3=react.createElement("path",{d:"M28.8026 35.166C28.8026 36.339 28.3348 37.4639 27.5022 38.2933C26.6695 39.1227 25.5402 39.5887 24.3626 39.5887C23.185 39.5887 22.0557 39.1227 21.223 38.2933C20.3904 37.4639 19.9226 36.339 19.9226 35.166H28.8026Z",fill:"currentColor"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.1152 13.3174C34.9734 14.9178 35.4208 16.7049 35.4174 18.5194C35.419 19.9574 35.1358 21.3817 34.584 22.7106C34.0321 24.0394 33.2225 25.2468 32.2014 26.2634C30.8262 27.6372 29.9798 28.9576 29.9798 30.8972C29.9798 30.9903 29.9427 31.0796 29.8767 31.1454C29.8107 31.2113 29.7212 31.2484 29.6278 31.2486H19.1326C19.0391 31.2484 18.9495 31.2113 18.8833 31.1455C18.8172 31.0796 18.78 30.9904 18.7798 30.8972V30.8909C18.7762 30.0276 18.5846 29.1754 18.2182 28.3932C17.8517 27.6109 17.3192 26.9171 16.6574 26.3598C15.3552 25.091 14.3885 23.521 13.8434 21.7897C13.2982 20.0584 13.1916 18.2197 13.5331 16.4374C13.8745 14.6551 14.6534 12.9847 15.8003 11.575C16.9471 10.1653 18.4263 9.06025 20.106 8.35824C21.7857 7.65624 23.6137 7.37914 25.427 7.55165C27.2404 7.72416 28.9826 8.34092 30.4986 9.34694C32.0145 10.353 33.257 11.717 34.1152 13.3174ZM29.715 18.0499C29.9933 18.2613 30.3336 18.376 30.6836 18.3764C30.8258 18.3752 30.9672 18.3557 31.1044 18.3182C31.3072 18.2629 31.4971 18.1683 31.6632 18.0398C31.8293 17.9113 31.9684 17.7514 32.0724 17.5694C32.1764 17.3873 32.2434 17.1866 32.2694 16.9787C32.2955 16.7708 32.2802 16.5599 32.2244 16.3579C31.8253 14.9462 31.0457 13.6704 29.9702 12.6687C28.8947 11.6671 27.5644 10.978 26.1236 10.6762C25.7125 10.6028 25.2888 10.6925 24.9432 10.926C24.5975 11.1596 24.3572 11.5185 24.2737 11.9261C24.1901 12.3337 24.2699 12.7578 24.4959 13.1076C24.722 13.4574 25.0765 13.7053 25.4836 13.7984C26.3476 13.9795 27.1455 14.3928 27.7905 14.9935C28.4355 15.5941 28.9032 16.3592 29.1428 17.2058C29.2357 17.5419 29.4367 17.8384 29.715 18.0499Z",fill:"currentColor"})))}var leftCaret_path,ForwardRef=react.forwardRef(SvgBulb),leftCaret_excluded=(__webpack_require__.p,["title","titleId"]);function leftCaret_extends(){return leftCaret_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},leftCaret_extends.apply(this,arguments)}function leftCaret_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function leftCaret_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgLeftCaret(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=leftCaret_objectWithoutProperties(_ref,leftCaret_excluded);return react.createElement("svg",leftCaret_extends({width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,leftCaret_path||(leftCaret_path=react.createElement("path",{d:"M26.8295 35.8339L14.4056 23.7447C14.2581 23.6008 14.1534 23.4449 14.0915 23.277C14.0295 23.1091 13.999 22.9292 14 22.7373C14 22.5454 14.031 22.3655 14.0929 22.1976C14.1549 22.0297 14.2591 21.8737 14.4056 21.7298L26.8295 9.60465C27.1736 9.26885 27.6037 9.10095 28.1198 9.10095C28.6359 9.10095 29.0783 9.28085 29.447 9.64055C29.8157 10.0004 30 10.4202 30 10.8999C30 11.3797 29.8157 11.7994 29.447 12.1592L18.6083 22.7373L29.447 33.3153C29.7911 33.6511 29.9631 34.0651 29.9631 34.5573C29.9631 35.0495 29.7788 35.475 29.4101 35.8339C29.0415 36.1937 28.6114 36.3736 28.1198 36.3736C27.6283 36.3736 27.1982 36.1937 26.8295 35.8339Z",fill:"black"})))}var rightCaret_path,leftCaret_ForwardRef=react.forwardRef(SvgLeftCaret),rightCaret_excluded=(__webpack_require__.p,["title","titleId"]);function rightCaret_extends(){return rightCaret_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},rightCaret_extends.apply(this,arguments)}function rightCaret_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function rightCaret_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgRightCaret(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=rightCaret_objectWithoutProperties(_ref,rightCaret_excluded);return react.createElement("svg",rightCaret_extends({width:93,height:93,viewBox:"0 0 93 93",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,rightCaret_path||(rightCaret_path=react.createElement("path",{d:"M42.749 70.7866L66.7047 47.5539C66.9891 47.2773 67.191 46.9777 67.3104 46.655C67.4298 46.3323 67.4886 45.9866 67.4867 45.6178C67.4867 45.2491 67.427 44.9033 67.3075 44.5807C67.1881 44.258 66.9872 43.9584 66.7047 43.6818L42.749 20.3799C42.0855 19.7345 41.2562 19.4118 40.261 19.4118C39.2658 19.4118 38.4128 19.7576 37.7019 20.449C36.9911 21.1405 36.6357 21.9472 36.6357 22.8691C36.6357 23.791 36.9911 24.5977 37.7019 25.2892L58.601 45.6178L37.7019 65.9465C37.0385 66.5918 36.7067 67.3875 36.7067 68.3334C36.7067 69.2793 37.0622 70.097 37.773 70.7866C38.4839 71.4781 39.3132 71.8238 40.261 71.8238C41.2088 71.8238 42.0381 71.4781 42.749 70.7866Z",fill:"currentColor"})))}var rightCaret_ForwardRef=react.forwardRef(SvgRightCaret),sprites=(__webpack_require__.p,{leftCaret:leftCaret_ForwardRef,rightCaret:rightCaret_ForwardRef,bulb:ForwardRef}),useStyles=(0,__webpack_require__("./node_modules/react-jss/dist/react-jss.esm.js").QM)({main:{width:"100%",height:"100%","& svg":{width:"100%",height:"100%"}}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon_excluded=["className","type"],Icon=react.forwardRef((function Icon(props,ref){var className=props.className,type=props.type,otherProps=(0,objectWithoutProperties.Z)(props,Icon_excluded),styles=useStyles(),Sprite=sprites[type];return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},otherProps),{},{ref:ref,className:classnames_default()(styles.main,className),children:(0,jsx_runtime.jsx)(Sprite,{})}))}));try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"leftCaret"'},{value:'"rightCaret"'},{value:'"bulb"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);