(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[12],{500:function(e,t,n){"use strict";var a=n(12),r=n(13),o=n(15),c=n(14),i=n(0),l=n.n(i),s=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),n}(l.a.Component);t.a=s},502:function(e,t,n){},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(533),r=n.n(a),o=n(534),c=n.n(o)()(r.a),i=function(e,t){return c.fire({title:e,text:t,icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},l=function(e,t){return c.fire({title:e,text:t,icon:"warning",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})}},510:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(38),r=n.n(a),o=n(65),c=n(66),i=n(30),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=Object(o.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.post("order/all",{user:e,picker:t}).then((function(e){a({type:"ORDER_ALL_DATA",data:e.data})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},s=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("order/client",{user:e}).then((function(e){console.log(e.data),n({type:"ORDER_CLIENT_DATA",data:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("order/delete",e).then((function(e){e.data.status||i.b.error("Internal Server")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("order/update",e).then((function(e){e.data.status||i.b.error("Internal Server Error!")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("order/add",e).then((function(e){e.data.status||i.b.error(e.data.msg)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},511:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),r=n.n(a),o=n(508),c=n(509),i=n(708),l=n(512),s=n(520),u=n(513),d=n(165),f=n(500),p=n(521),m=n.n(p),h=(n(519),function(e){var t=e.item,n=e.children;return r.a.createElement(o.a,{className:"mt-1"},r.a.createElement(c.a,{sm:"6"},r.a.createElement(i.a,{responsive:!0,borderless:!0,className:"text-center"},r.a.createElement("thead",null,r.a.createElement("tr",{key:"header"},r.a.createElement("th",{key:"referencia"},"Referencia"),r.a.createElement("th",{key:"descripcion"},"Descripcion"),r.a.createElement("th",{key:"qty"},"Cantidad"))),r.a.createElement("tbody",null,t.implants.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.referencia),r.a.createElement("td",{style:{minWidth:"230px"}},e.Descripcion),r.a.createElement("td",null,e.qty))}))))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(o.a,null,r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(s.a,{for:"pickup-date"},"Fecha de entrega deseada"),r.a.createElement(m.a,{selected:new Date(t.comment.deliveryDate),disabled:!0}))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(s.a,{for:"pickup-date"},"Fecha de recogida deseada"),r.a.createElement(m.a,{selected:new Date(t.comment.pickupDate),disabled:!0}))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(s.a,{for:"payment-date"},"Fecha de pago deseada"),r.a.createElement(m.a,{selected:new Date(t.comment.paymentDate),disabled:!0}))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(f.a,{color:"primary",disabled:!0,icon:r.a.createElement(d.a,{className:"vx-icon",size:16}),checked:t.comment.motor,label:"Requiere motor?"}))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(f.a,{disabled:!0,color:"primary",icon:r.a.createElement(d.a,{className:"vx-icon",size:16}),checked:t.comment.kos,label:"Requiere caja KOS?"}))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(f.a,{disabled:!0,color:"primary",icon:r.a.createElement(d.a,{className:"vx-icon",size:16}),checked:t.comment.bcs,label:"Requiere caja BCS?"}))),r.a.createElement(c.a,{sm:"6"},r.a.createElement(l.a,null,r.a.createElement(f.a,{disabled:!0,color:"primary",icon:r.a.createElement(d.a,{className:"vx-icon",size:16}),checked:t.comment.hexa,label:"Requiere caja HEXA?"}))),r.a.createElement(c.a,{sm:"12"},r.a.createElement(l.a,null,r.a.createElement(f.a,{disabled:!0,color:"primary",icon:r.a.createElement(d.a,{className:"vx-icon",size:16}),checked:t.comment.mangos,label:"Requiere caja de mangos?"}))),r.a.createElement(c.a,{sm:"12"},r.a.createElement(l.a,null,r.a.createElement(s.a,{for:"patient"},"Commentarios"),r.a.createElement(u.a,{disabled:!0,type:"text",placeholder:"Commentarios",value:t.comment.comment}))))),r.a.createElement(c.a,{sm:"12"},n||null))})},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},c=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":a(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},l=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},s=t.jsons2arrays=function(e,t){var n=t=t||l(e),a=t;c(t)&&(n=t.map((function(e){return e.label})),a=t.map((function(e){return e.key})));var o=e.map((function(e){return a.map((function(t){return u(t,e)}))}));return[n].concat(r(o))},u=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,a){if(void 0!==e[t])return e[t];a.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},d=t.elementOrEmpty=function(e){return e||0===e?e:""},f=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return d(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,n,a){return f(t?[t].concat(r(e)):e,n,a)},m=t.jsons2csv=function(e,t,n,a){return f(s(e,t),n,a)},h=t.string2csv=function(e,t,n,a){return t?t.join(n)+"\n"+e:e},b=t.toCSV=function(e,t,n,a){if(c(e))return m(e,t,n,a);if(i(e))return p(e,t,n,a);if("string"===typeof e)return h(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,a,r){var c=b(e,n,a,r),i=o()?"application/csv":"text/csv",l=new Blob([t?"\ufeff":"",c],{type:i}),s="data:"+i+";charset=utf-8,"+(t?"\ufeff":"")+c,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?s:u.createObjectURL(l)}},560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var a,r=n(0),o=((a=r)&&a.__esModule,n(1));t.propTypes={data:(0,o.oneOfType)([o.string,o.array]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},665:function(e,t,n){e.exports=n(666)},666:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var a=o(n(667)),r=o(n(668));function o(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=a.default,t.CSVLink=r.default},667:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=(a=o)&&a.__esModule?a:{default:a},i=n(559),l=n(560);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,a=e.separator,r=e.enclosingCharacter,o=e.uFEFF,c=e.target,i=e.specs,l=e.replace;this.state.page=window.open(this.buildURI(t,o,n,a,r),c,i,l)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(c.default.Component);s.defaultProps=Object.assign(l.defaultProps,{target:"_blank"}),s.propTypes=l.propTypes,t.default=s},668:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),i=(a=c)&&a.__esModule?a:{default:a},l=n(559),s=n(560);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n.state={href:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,a=e.separator,r=e.uFEFF,o=e.enclosingCharacter;this.setState({href:this.buildURI(t,r,n,a,o)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,n=t.data,a=t.headers,r=t.separator,o=t.uFEFF;this.setState({href:this.buildURI(n,o,a,r)})}}},{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,n=t.data,a=t.headers,r=t.separator,o=t.filename,c=t.enclosingCharacter,i=t.uFEFF,s=new Blob([i?"\ufeff":"",(0,l.toCSV)(n,a,r,c)]);return window.navigator.msSaveBlob(s,o),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.data,t.headers,t.separator,t.filename),a=(t.uFEFF,t.children),o=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return i.default.createElement("a",r({download:n},o,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),a)}}]),t}(i.default.Component);u.defaultProps=s.defaultProps,u.propTypes=s.propTypes,t.default=u},716:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(504),c=n(514),i=n(515),l=n(505),s=n(132),u=n(21),d=n(178),f=n(181),p=n(166),m=n(506),h=n.n(m),b=n(513),v=n(543),y=n.n(v),E=(n(507),n(502),n(511)),w=n(510),C=n(503),g=n(11),O=n(665),k=function(e){return r.a.createElement(O.CSVLink,{data:e.csvData,filename:e.filename,className:"btn btn-success d-flex align-items-center"},"Exportar a CSV")},j=function(e){var t=e.data;return console.log("Data: ",t),r.a.createElement(E.a,{item:t})},x=function(e){return r.a.createElement("div",{className:"d-flex justify-content-between w-100 mt-1"},r.a.createElement("div",{className:"position-relative has-icon-left mb-1"},r.a.createElement(b.a,{value:e.value,onChange:function(t){return e.handleFilter(t)},placeholder:"Buscar..."}),r.a.createElement("div",{className:"form-control-position"},r.a.createElement(d.a,{size:"15"}))),r.a.createElement(k,{csvData:e.csvData,filename:"OrderReport-".concat(Date.now(),".csv")}))},L=function(e){return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(f.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},_=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],l=(t[1],Object(a.useState)(new Date)),d=Object(s.a)(l,2),f=d[0],m=d[1],b=Object(a.useState)([]),v=Object(s.a)(b,2),E=v[0],O=v[1],k=Object(a.useState)(""),_=Object(s.a)(k,2),D=_[0],R=_[1],S=Object(u.c)(),F=Object(u.d)((function(e){return e.auth.userinfo}));Object(a.useEffect)((function(){S(Object(w.d)(F,f.getTime()))}),[F,f]);var P=Object(u.d)((function(e){return e.order.allData}))||[];if(F.role==g.a.role.client)return null;var A=[];A.push(["Doctores","Correo Electr\xf3nico","Paciente","Documento","Fecha"]);var N=P.map((function(e,t){var n={};return n.client=e.client.username,n.email=e.client.email,n.patient_name=e.patient.name,n.document=e.patient.document,n.createdAt=e.createdAt,n.comment=e.comment,n.patient=e.patient,n.implants=e.implants,n._id=e._id,n.id=t,A.push([n.client,n.email,n.patient_name,n.document,n.createdAt]),n})),W=function(e){return C.a.fire({title:"Esta Seguro?",text:"Si acepta no puede remover cambios",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(t){t.value&&(S(Object(w.c)({_id:e._id})),C.a.fire({icon:"Confirmada",title:"Removido!",text:"El usuario ha sido removido.",customClass:{confirmButton:"btn btn-success"}}),S(Object(w.d)(F)))}))},T=[{name:"Doctores",selector:"client",sortable:!0,minWidth:"250px"},{name:"Correo Electr\xf3nico",selector:"email",sortable:!0,minWidth:"250px"},{name:"Paciente",selector:"patient_name",sortable:!0,minWidth:"200px"},{name:"Documento",selector:"document",sortable:!0,minWidth:"100px"},{name:"Fecha",selector:"createdAt",sortable:!0,minWidth:"150px"},{name:"Acciones",allowOverflow:!0,cell:function(e){return r.a.createElement(L,{row:e,deleteRow:W})}}];return r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{tag:"h4"},"\xd3rdenes creadas"),r.a.createElement("div",{className:"d-flex"},r.a.createElement(y.a,{className:"form-control",value:f,onChange:function(e){return m(e[0])},id:"default-picker"}))),r.a.createElement(h.a,{noHeader:!0,subHeader:!0,subHeaderComponent:r.a.createElement(x,{value:D,handleFilter:function(e){var t=e.target.value;R(t);var n=[];t.length&&(n=N.filter((function(e){var n=e.client.toLowerCase().startsWith(t.toLowerCase())||e.email.toLowerCase().startsWith(t.toLowerCase())||e.patient_name.toLowerCase().startsWith(t.toLowerCase())||e.document.toLowerCase().startsWith(t.toLowerCase())||e.createdAt.toLowerCase().startsWith(t.toLowerCase()),a=e.client.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())||e.patient_name.toLowerCase().includes(t.toLowerCase())||e.document.toLowerCase().includes(t.toLowerCase())||e.createdAt.toLowerCase().includes(t.toLowerCase());return n||(!n&&a?a:null)})),O(n))},picker:f,setPicker:m,csvData:A}),pagination:!0,data:D?E:N,expandableRows:!0,columns:T,expandOnRowClicked:!0,className:"react-dataTable",sortIcon:r.a.createElement(p.a,{size:10}),paginationDefaultPage:n+1,expandableRowsComponent:r.a.createElement(j,null),paginationRowsPerPageOptions:[10,25,50,100]}))},D=n(487),R=[{color:"success",text:"Origen"},{color:"warning",text:"aceptado"},{color:"danger",text:"rechazado"}],S=function(e){return r.a.createElement("div",{className:"d-flex justify-content-between w-100 mt-1"},r.a.createElement("div",{className:"position-relative has-icon-left mb-1 "},r.a.createElement(b.a,{value:e.value,onChange:function(t){return e.handleFilter(t)},placeholder:"Buscar en el inventario..."}),r.a.createElement("div",{className:"form-control-position"},r.a.createElement(d.a,{size:"15"}))),r.a.createElement(k,{csvData:e.csvData,filename:"InventoryRotation-".concat(Date.now(),".csv")}))},F=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],l=(t[1],Object(a.useState)(new Date)),d=Object(s.a)(l,2),f=d[0],m=d[1],b=Object(a.useState)([]),v=Object(s.a)(b,2),y=v[0],E=v[1],w=Object(a.useState)(""),C=Object(s.a)(w,2),O=C[0],k=C[1],j=(Object(u.c)(),Object(u.d)((function(e){return e.auth.userinfo}))),x=Object(u.d)((function(e){return e.order.allData}))||[];if(j.role==g.a.role.client)return null;var L=[],_=[];_.push(["Doctor","Correo Electr\xf3nico","Referencia","Descripcion","Qty","Remaining","Status"]);var F=Date.now();x.map((function(e,t){var n=e.implants.map((function(t){var n,a={};return a.client=e.client.username,a.email=e.client.email,a.referencia=t.referencia,a.descripcion=t.Descripcion,a.qty=null===t||void 0===t?void 0:t.qty,a.cantidad=null===(n=t.implant)||void 0===n?void 0:n.cantidad,a.status=(null===t||void 0===t?void 0:t.isReplacement)?1:0,a.isRejected=!1,a.id=F++,_.push([a.client,a.email,a.referencia,a.descripcion,a.qty,a.cantidad,R[a.status].text]),a})),a=e.rejectedImplants.map((function(t){var n={};return n.client=e.client.username,n.email=e.client.email,n.referencia=t.referencia,n.descripcion=t.descripcion,n.qty="-",n.cantidad=t.implant.cantidad,n.status=2,n.id=F++,_.push([n.client,n.email,n.referencia,n.descripcion,n.qty,n.cantidad,R[n.status].text]),n}));L=L.concat(n,a)}));var P=[{name:"Doctor",selector:"client",sortable:!0,minWidth:"100px"},{name:"Correo Electr\xf3nico",selector:"email",sortable:!0,minWidth:"120px"},{name:"Referencia",selector:"referencia",sortable:!0,minWidth:"100px"},{name:"Descripcion",selector:"descripcion",sortable:!0,minWidth:"200px"},{name:"Cantidad",selector:"qty",sortable:!0,minWidth:"50px"},{name:"Sobrantes",selector:"cantidad",sortable:!0,minWidth:"50px"},{name:"Estado",selector:"status",sortable:!0,minWidth:"150px",cell:function(e){return r.a.createElement(D.a,{color:R[e.status].color,pill:!0},R[e.status].text)}}];return r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{tag:"h4"},"Rotacion del Inventario")),r.a.createElement(h.a,{noHeader:!0,subHeader:!0,subHeaderComponent:r.a.createElement(S,{value:O,handleFilter:function(e){var t=e.target.value;k(t);var n=[];t.length&&(n=L.filter((function(e){var n=e.client.toLowerCase().startsWith(t.toLowerCase())||e.email.toLowerCase().startsWith(t.toLowerCase())||e.referencia.toLowerCase().startsWith(t.toLowerCase())||e.descripcion.toLowerCase().startsWith(t.toLowerCase())||R[e.status].text.startsWith(t.toLowerCase()),a=e.client.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())||e.referencia.toLowerCase().includes(t.toLowerCase())||e.descripcion.toLowerCase().includes(t.toLowerCase())||R[e.status].text.toLowerCase().includes(t.toLowerCase());return n||(!n&&a?a:null)})),E(n))},picker:f,setPicker:m,csvData:_}),pagination:!0,data:O?y:L,columns:P,className:"react-dataTable",sortIcon:r.a.createElement(p.a,{size:10}),paginationDefaultPage:n+1,paginationRowsPerPageOptions:[10,25,50,100]}))},P=n(20);t.default=function(){return Object(u.d)((function(e){return e.auth.userinfo})).role===g.a.role.client?(P.a.push("/order"),null):r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Reportes")),r.a.createElement(l.a,null,r.a.createElement(_,null),r.a.createElement(F,null)))}}}]);
//# sourceMappingURL=12.5d430804.chunk.js.map