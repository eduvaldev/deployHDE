(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[11],{500:function(e,a,t){"use strict";var n=t(12),r=t(13),o=t(15),s=t(14),c=t(0),i=t.n(c),l=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=l},502:function(e,a,t){},504:function(e,a,t){"use strict";var n=t(5),r=t(6),o=t(0),s=t.n(o),c=t(1),i=t.n(c),l=t(2),u=t.n(l),d=t(3),p={tag:d.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,i=e.inverse,l=e.outline,p=e.tag,f=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.m)(u()(a,"card",!!i&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),t);return s.a.createElement(p,Object(n.a)({},m,{className:h,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},505:function(e,a,t){"use strict";var n=t(5),r=t(6),o=t(0),s=t.n(o),c=t(1),i=t.n(c),l=t(2),u=t.n(l),d=t(3),p={tag:d.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.m)(u()(a,"card-body"),t);return s.a.createElement(c,Object(n.a)({},i,{className:l,ref:o}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},514:function(e,a,t){"use strict";var n=t(5),r=t(6),o=t(0),s=t.n(o),c=t(1),i=t.n(c),l=t(2),u=t.n(l),d=t(3),p={tag:d.q,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"card-header"),t);return s.a.createElement(o,Object(n.a)({},c,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},515:function(e,a,t){"use strict";var n=t(5),r=t(6),o=t(0),s=t.n(o),c=t(1),i=t.n(c),l=t(2),u=t.n(l),d=t(3),p={tag:d.q,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"card-title"),t);return s.a.createElement(o,Object(n.a)({},c,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},525:function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"f",(function(){return l})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return d})),t.d(a,"e",(function(){return p})),t.d(a,"a",(function(){return f}));var n=t(38),r=t.n(n),o=t(65),s=t(66),c=t(30),i=(t(20),t(11),function(e){return function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return null,a.next=3,s.a.get("inventory/all").then((function(a){var n=a,r=e.page,o=e.perPage,s=Math.ceil(n.data.length/o),c=[],i={};if(void 0!==r&&void 0!==o){var l=(r-1)*o,u=r*o;l>n.data.length?(s=Math.ceil(n.data.length/o),c=n.data.slice(0,o),i.page=0,i.perPage=o):(c=n.data.slice(l,u),i=e)}else s=Math.ceil(n.data.length/o),c=n.data.slice(0,o),i=e;0===c.length&&(i.page=0,i.perPage=o,c=n.data.slice(0,o)),t({type:"INVENTORY_ALL_DATA",data:n.data}),t({type:"SESSIONS_DATA",data:c,totalPages:s,newparams:i})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}),l=function(e){return function(){var a=Object(o.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:(n=new FormData).append("file",e),s.a.postFile("inventory/upload",n).then((function(e){if(e.data.status){c.b.success(e.data.msg);var a=e.data.data,n=Math.ceil(a.length/10);t({type:"INVENTORY_ALL_DATA",data:a}),t({type:"SESSIONS_DATA",data:a.slice(0,10),totalPages:n,page:0,perPage:10})}else c.b.error(e.data.msg)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(a){return a({type:"FILTER_SESSIONS_DATA",value:e})}},d=function(e){return function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return null,a.next=3,s.a.post("inventory/delete",e).then((function(e){e.data.status||c.b.error("Internal Server")}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e,a){return function(){var a=Object(o.a)(r.a.mark((function a(t,n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.post("inventory/update",e).then((function(e){e.data.status?c.b.success("Success!"):c.b.error("Internal Server Error!")}));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},f=function(e){return function(){var a=Object(o.a)(r.a.mark((function a(t,n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.post("inventory/add",e).then((function(e){e.data.status||c.b.error(e.data.msg)}));case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}},536:function(e,a,t){},537:function(e,a,t){},539:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={wrap:{background:"#E2E2E2",fontSize:14},"input.mobile":{color:"5f5f5f",padding:"0",border:0,display:"block",fontWeight:400,backgroundColor:"#f8f8f8",height:"26px"},"input:focus":{outline:"none"},arrowUp:{borderBottomColor:"#fff"},arrowDown:{borderTopColor:"#fff"},plus:{background:"white"},minus:{background:"white"},"btnUp.mobile":{background:"#7367F0",borderRadius:"5px",height:"22px",width:"22px",top:"2px",cursor:"pointer"},"btnDown.mobile":{background:"#7367F0",borderRadius:"5px",height:"22px",width:"22px",top:"2px",cursor:"pointer"}}},718:function(e,a,t){"use strict";t.r(a);var n=t(38),r=t.n(n),o=t(65),s=t(12),c=t(13),i=t(15),l=t(14),u=t(0),d=t.n(u),p=t(504),f=t(514),m=t(515),h=t(505),g=t(261),b=t(21),v=t(525),w=t(508),E=t(509),y=t(564),x=t.n(y),N=t(134),P=t(491),k=t(496),S=t(492),C=t(490),j=t(506),O=t.n(j),D=t(2),A=t.n(D),R=t(561),F=t.n(R),I=t(20),V=t(169),M=t(181),T=t(176),L=t(166),z=t(167),_=t(144),U=t(165),B=t(567),q=t.n(B),H=t(512),Y=t(520),J=t(513),W=t(137),G=t(53),K=t.n(G),Q=(t(507),t(502),t(11)),X=t(539),Z=(Q.a.role.admin,Q.a.role.admin,Q.a.role.stuff,Q.a.role.stuff,function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={_id:"",referencia:"",descripcion:"",cantidad:0},e.handleSubmit=function(){var a=Object(o.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.props.addNew){a.next=5;break}return a.next=3,e.props.updateData(t);case 3:a.next=8;break;case 5:return delete t._id,a.next=8,e.props.addData(t);case 8:n={page:1,perPage:10},e.props.handleSidebar(!1,!0),e.props.getInventories(n);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,a){this.props.addNew&&e!==this.props?this.setState({_id:"",referencia:"",descripcion:"",cantidad:0}):this.props.data&&e!==this.props&&this.setState({_id:this.props.data._id,referencia:this.props.data.referencia,descripcion:this.props.data.descripcion,cantidad:this.props.data.cantidad})}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,n=a.handleSidebar,r=a.data,o=this.state,s=o.referencia,c=o.descripcion,i=o.cantidad;return d.a.createElement("div",{className:A()("data-list-sidebar",{show:t})},d.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},d.a.createElement("h4",null,null!==r?"Actualizar Inventario":"Agregar al Inventario"),d.a.createElement(W.a,{size:20,onClick:function(){return n(!1,!0)}})),d.a.createElement(K.a,{className:"px-2 mt-1",options:{wheelPropagation:!1}},d.a.createElement(H.a,null,d.a.createElement(Y.a,{for:"referencia"},"Referencia"),d.a.createElement(J.a,{type:"text",id:"referencia",value:s,disabled:this.props.onlyView,onChange:function(a){return e.setState({referencia:a.target.value})}})),d.a.createElement(H.a,null,d.a.createElement(Y.a,{for:"descripcion"},"Descripcion"),d.a.createElement(J.a,{type:"text",id:"descripcion",value:c,disabled:this.props.onlyView,onChange:function(a){return e.setState({descripcion:a.target.value})}})),d.a.createElement(H.a,null,d.a.createElement(Y.a,{for:"password"},"Cantidad"),d.a.createElement(q.a,{min:0,max:999999999,value:i,disabled:this.props.onlyView,mobile:!0,style:X.a,onChange:function(a){return e.setState({cantidad:a})}})),this.props.onlyView?null:d.a.createElement("div",{className:"text-right mt-2"},d.a.createElement(g.a,{color:"primary",className:"mb-1",onClick:function(){return e.handleSubmit(e.state)}},null!==r?"Actualizar":"Agregar"),d.a.createElement(g.a,{className:"ml-1 mb-1",color:"danger",outline:!0,onClick:function(){return n(!1,!0)}},"Cancelar"))))}}]),t}(u.Component)),$=Object(b.b)((function(e){return{userNotes:e.users.user_notes}}),{})(Z),ee=t(500),ae=t(30),te=t(563),ne=t.n(te),re=(t(536),t(537),{rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}});var oe=function(e){return d.a.createElement("div",{className:"data-list-action"},d.a.createElement(V.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),d.a.createElement(M.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},se=function(e){return d.a.createElement("div",{className:"data-list-header justify-content-between flex-wrap d-flex"},d.a.createElement("div",{className:"actions-left d-flex flex-wrap"},d.a.createElement(g.a,{className:"add-new-btn",color:"primary",onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},d.a.createElement(T.a,{size:15}),d.a.createElement("span",{className:"align-middle"},"Agregar"))),d.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2 float-right"},d.a.createElement(P.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},d.a.createElement(k.a,{color:"",className:"sort-dropdown"},d.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]||0," - ").concat(e.index[1]||0," of ").concat(e.total)),d.a.createElement(L.a,{size:15})),d.a.createElement(S.a,{tag:"div",right:!0},d.a.createElement(C.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),d.a.createElement(C.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(25)}},"25"),d.a.createElement(C.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(50)}},"50"),d.a.createElement(C.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(75)}},"75")))))},ce=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Referencia",selector:"referencia",sortable:!0,minWidth:"200px"},{name:"Descripcion",selector:"descripcion",sortable:!0},{name:"Cantidad",selector:"cantidad",sortable:!0},{name:"Acciones",sortable:!0,cell:function(a){return d.a.createElement(oe,{row:a,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:10,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:"",defaultAlert:!1,confirmAlert:!1,cancelAlert:!1,onlyView:!1,row:null},e.thumbView=e.props.thumbView,e.handleFilter=function(a){e.setState({value:a.target.value}),e.props.filterData(a.target.value)},e.handleRowsPerPage=function(a){var t=e.props,n=t.parsedFilter,r=t.getInventories,o=void 0!==n.page?n.page:1;I.a.push("?page=".concat(o,"&perPage=").concat(a)),e.setState({rowsPerPage:a}),r({page:n.page,perPage:a})},e.handleAlert=function(a,t){e.setState(Object(N.a)({},a,t))},e.handleSidebar=function(a,t){e.setState({sidebar:a,onlyView:!1}),!0===t&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(a){a.role!=Q.a.role.superAdmin?e.setState({defaultAlert:!0,row:a}):ae.b.warning("Cannot delete super admin.")},e.deleteSession=function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.props.deleteData(t);case 2:e.props.getInventories({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleCurrentData=function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState({currentData:t,addNew:!1,onlyView:!1}),e.handleSidebar(!0);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleRowChange=function(a){e.setState({sidebar:!0,onlyView:!0,currentData:a,addNew:!1})},e.handlePagination=function(a){var t=e.props,n=t.parsedFilter,r=t.getInventories,o=void 0!==n.perPage?n.perPage:10,s=(e.props.thumbView,"");I.a.push("".concat(s,"?page=").concat(a.selected+1,"&perPage=").concat(o)),r({page:a.selected+1,perPage:o}),e.setState({currentPage:a.selected})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.parsedFilter;(0,e.getInventories)({page:a.page,perPage:10})}},{key:"render",value:function(){var e=this,a=this.state,t=a.columns,n=a.data,r=a.allData,o=a.totalPages,s=a.value,c=a.rowsPerPage,i=a.currentData,l=a.sidebar,u=a.totalRecords,p=a.sortIndex;return d.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},d.a.createElement(se,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:c,total:u,index:p}),d.a.createElement(O.a,{columns:t,data:s.length?r:n,pagination:!0,paginationServer:!0,noDataComponent:d.a.createElement("div",{style:{padding:"24px"}},"No se a actualizado el inventario"),paginationComponent:function(){return d.a.createElement(F.a,{previousLabel:d.a.createElement(z.a,{size:15}),nextLabel:d.a.createElement(_.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:o,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(a){return e.handlePagination(a)}})},noHeader:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(a){return e.setState({selected:a.selectedRows})},onRowClicked:function(a){return e.handleRowChange(a)},customStyles:re,sortIcon:d.a.createElement(L.a,null),selectableRowsComponent:ee.a,selectableRowsComponentProps:{color:"primary",icon:d.a.createElement(U.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),d.a.createElement($,{show:l,data:i,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,handleStopStreaming:this.props.stopStreaming,thumbView:this.props.thumbView,userinfo:this.props.userinfo,dataParams:this.props.parsedFilter,addNew:this.state.addNew,onlyView:this.state.onlyView}),d.a.createElement("div",{className:A()("data-list-overlay",{show:l}),onClick:function(){return e.handleSidebar(!1,!0)}}),d.a.createElement(ne.a,{title:"Esta seguro?",warning:!0,show:this.state.defaultAlert,showCancel:!0,reverseButtons:!0,cancelBtnBsStyle:"danger",confirmBtnText:"Si, De acuerdo!",cancelBtnText:"Cancelar",onConfirm:function(){e.handleAlert("basicAlert",!1),e.handleAlert("defaultAlert",!1),e.handleAlert("confirmAlert",!0),e.deleteSession(e.state.row)},onCancel:function(){e.handleAlert("basicAlert",!1),e.handleAlert("defaultAlert",!1)}},"De borrar el usuario no se podran desaser los cambios"))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.dataList.data&&e.dataList.data.length!==a.data.length||a.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),t}(u.Component),ie=Object(b.b)((function(e){return{dataList:e.inventory,userinfo:e.auth.userinfo}}),{getInventories:v.d,deleteData:v.b,updateData:v.e,addData:v.a,filterData:v.c})(ce),le=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleSubmit=function(){var a=Object(o.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),e.props.uploadInventory(e.state.file);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.state={file:null},e}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,a){e.newUrl!==this.props.newUrl&&this.setState({value:this.props.newUrl})}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,"Cargar inventario")),d.a.createElement(h.a,null,d.a.createElement("input",{type:"file",id:"upload-inventory",onChange:function(a){return e.setState({file:a.target.files[0]})}}),d.a.createElement(g.a.Ripple,{className:"mr-1",color:"primary",onClick:function(a){return e.handleSubmit(a)}},"Cargar"))),d.a.createElement(p.a,null,d.a.createElement(f.a,null,d.a.createElement(m.a,null,"Inventario")),d.a.createElement(h.a,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(w.a,null,d.a.createElement(E.a,{sm:"12"},d.a.createElement(ie,{parsedFilter:x.a.parse(this.props.location.search)})))))))}}]),t}(d.a.Component);a.default=Object(b.b)((function(e){return{}}),{uploadInventory:v.f})(le)}}]);
//# sourceMappingURL=11.eae6870b.chunk.js.map