(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resource"],{4042:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));a("d81d"),a("b64b"),a("498a");function r(e){return""===e||""===e.trim()||void 0===e||null===e}function o(e){return!r(e)}function i(e){var t={};for(var a in e)o(e[a])&&(t[a]=e[a]);return t}var s=function(){return{title:"",mode:"",visible:!1,formItemLayout:{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:19}}},confirmLoading:!1,form:{}}}},a31a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{attrs:{placeholder:"请输入资源名称"},model:{value:e.query.search_LIKE_name,callback:function(t){e.$set(e.query,"search_LIKE_name",t)},expression:"query.search_LIKE_name"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"编码"}},[a("a-input",{attrs:{placeholder:"请输入编码"},model:{value:e.query.search_LIKE_id,callback:function(t){e.$set(e.query,"search_LIKE_id",t)},expression:"query.search_LIKE_id"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.handleSearch}},[e._v(" 查询")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{directives:[{name:"action",rawName:"v-action:sysResource:add",arg:"sysResource:add"}],attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("a-table",{attrs:{bordered:!1,columns:e.columns,loading:e.loading,defaultExpandAllRows:!0,dataSource:e.data,pagination:e.pagination,rowKey:function(e){return e.id}},on:{change:e.handleChange},scopedSlots:e._u([{key:"type",fn:function(t){return["btn"===t?[e._v("按钮")]:[e._v("菜单")]]}},{key:"state",fn:function(e){return[a("a-badge","ON"===e?{attrs:{status:"success"}}:{attrs:{status:"error"}})]}},{key:"action",fn:function(t){return[a("div",{staticClass:"editable-row-operations"},[a("a-tooltip",{directives:[{name:"action",rawName:"v-action:sysResource:toggle",arg:"sysResource:toggle"}],attrs:{title:"ON"===t.state?"启用":"禁用"}},[a("a-switch",{attrs:{size:e.rowBtnSize,checked:"ON"===t.state},on:{change:function(a){return e.toggleState(t)}}})],1),"menu"===t.type?a("a-button",{directives:[{name:"action",rawName:"v-action:sysResource:add",arg:"sysResource:add"}],staticClass:"rowBtn",attrs:{type:"link",size:e.rowBtnSize},on:{click:function(a){return e.handleAddChildren(t)}}},[e._v("添加下级")]):e._e(),a("a-button",{directives:[{name:"action",rawName:"v-action:sysResource:update",arg:"sysResource:update"}],staticClass:"rowBtn",attrs:{type:"link",size:e.rowBtnSize},on:{click:function(a){return e.handleEdit(t)}}},[e._v("编辑")]),a("a-popconfirm",{directives:[{name:"action",rawName:"v-action:sysResource:remove",arg:"sysResource:remove"}],attrs:{placement:"top",title:"你确定要删除这条数据吗?",trigger:"hover",okText:"是",cancelText:"否"},on:{confirm:function(a){return e.handleRemove(t.id)}}},[a("a-button",{staticClass:"rowBtn",attrs:{type:"link",size:e.rowBtnSize}},[e._v("删除")])],1)],1)]}}])}),a("a-modal",{attrs:{visible:e.modal.visible,title:e.modal.title,confirmLoading:e.modal.confirmLoading},on:{cancel:e.handleModalCancel,ok:e.handleModalOk}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",e._b({attrs:{label:"类型"}},"a-form-item",e.modal.formItemLayout,!1),[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择资源类型!"}]}],expression:"['type',{ rules: [{ required: true, message: '请选择资源类型!' }]} ]"}],attrs:{disabled:"edit"===e.modal.mode}},[a("a-radio",{attrs:{value:"menu",disabled:"addChildren"===e.modal.mode}},[e._v("菜单")]),a("a-radio",{attrs:{value:"btn",disabled:"add"===e.modal.mode}},[e._v("按钮")])],1)],1),a("a-form-item",e._b({attrs:{label:"名称"}},"a-form-item",e.modal.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入资源名称!"}]}],expression:"['name',{ rules: [{ required: true, message: '请输入资源名称!' }]} ]"}]})],1),a("a-form-item",e._b({attrs:{label:"权限编码"}},"a-form-item",e.modal.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[{required:!0,message:"请输入资源权限编码!"}]}],expression:"['id',{ rules: [{ required: true, message: '请输入资源权限编码!' }]} ]"}],attrs:{disabled:"edit"===e.modal.mode}})],1),a("a-form-item",e._b({attrs:{label:"排序号"}},"a-form-item",e.modal.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{rules:[{required:!0,message:"请输入排序号!"}]}],expression:"['sort',{ rules: [{ required: true, message: '请输入排序号!' }]} ]"}],attrs:{min:0}})],1),a("a-form-item",e._b({attrs:{label:"状态"}},"a-form-item",e.modal.formItemLayout,!1),[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["state",{rules:[{required:!0,message:"请选择状态!"}]}],expression:"['state',{ rules: [{ required: true, message: '请选择状态!' }]} ]"}]},[a("a-radio",{attrs:{value:"ON"}},[e._v("启用")]),a("a-radio",{attrs:{value:"OFF"}},[e._v("禁用")])],1)],1),a("a-form-item",e._b({attrs:{label:"备注"}},"a-form-item",e.modal.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"['remark']"}],attrs:{type:"textarea"}})],1)],1)],1)],1)},o=[],i=(a("4de4"),a("4e82"),a("b0c0"),a("d3b7"),a("99af"),a("b775")),s={list:"/sys/resource/list",add:"/sys/resource/add",update:"/sys/resource/update",remove:"/sys/resource/remove",toggleState:"/sys/resource/toggle-state"};function n(e){return Object(i["b"])({url:s.list,method:"post",data:e})}function d(e){return Object(i["b"])({url:s.add,method:"post",data:e})}function l(e,t){return Object(i["b"])({url:"".concat(s.update,"/").concat(e),method:"post",data:t})}function c(e){return Object(i["b"])({url:"".concat(s.remove,"/").concat(e),method:"get"})}function u(e){return Object(i["b"])({url:"".concat(s.toggleState,"/").concat(e),method:"get"})}var m=a("4042"),h={name:"Resource",data:function(){return{form:this.$form.createForm(this),rowBtnSize:"small",loading:!1,columns:[{title:"资源名称",dataIndex:"name"},{title:"状态",dataIndex:"state",align:"center",scopedSlots:{customRender:"state"}},{title:"权限标识",dataIndex:"id"},{title:"类型",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"排序号",dataIndex:"sort"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],data:[],query:{search_LIKE_name:"",search_LIKE_id:""},pagination:{showSizeChanger:!0,total:0,current:1,pageSize:10},modal:Object(m["a"])()}},computed:{filter:function(){return Object(m["b"])(this.query)}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0;var t={filter:this.filter,orders:[{column:"sort",sort:"asc"},{column:"id",sort:"asc"}],current:this.pagination.current,pageSize:this.pagination.pageSize};n(t).then((function(t){e.data=t.data.records,e.pagination.current=t.data.current,e.pagination.total=t.data.total,e.pagination.pageSize=t.data.pageSize})).finally((function(){e.loading=!1}))},handleSearch:function(){this.pagination.current=1,this.pagination.total=0,this.loadData()},handleChange:function(e){this.pagination=e,this.loadData()},handleAdd:function(){var e=this;this.modal.title="新增资源",this.modal.mode="add",this.modal.visible=!0,this.$nextTick((function(){e.form.setFieldsValue({type:"menu",state:"ON",sort:1})}))},toggleState:function(e){var t=this;u(e.id).then((function(e){e.status<100&&t.loadData()}))},handleEdit:function(e){var t=this;this.modal.title="编辑资源",this.modal.mode="edit",this.modal.visible=!0,this.$nextTick((function(){t.form.setFieldsValue({id:e.id,type:e.type,name:e.name,state:e.state,sort:e.sort,remark:e.remark})}))},handleAddChildren:function(e){var t=this;this.modal.title="新增下级按钮",this.modal.mode="addChildren",this.modal.visible=!0,this.$nextTick((function(){t.form.setFieldsValue({id:e.id+":",type:"btn",state:"ON",sort:e.children?e.children[e.children.length-1].sort+1:0})}))},handleRemove:function(e){var t=this;c(e).then((function(e){e.status&&t.loadData()}))},handleModalOk:function(){var e=this;this.form.validateFields((function(t,a){t||(e.modal.confirmLoading=!0,"add"===e.modal.mode||"addChildren"===e.modal.mode?d(a).then(e.handleModalOkResult):"edit"===e.modal.mode&&l(a.id,a).then(e.handleModalOkResult))}))},handleModalOkResult:function(e){this.modal.confirmLoading=!1,e.status&&(this.modal.visible=!1,this.form.resetFields(),this.loadData())},handleModalCancel:function(){this.form.resetFields(),this.modal.visible=!1}}},f=h,p=a("2877"),v=Object(p["a"])(f,r,o,!1,null,null,null);t["default"]=v.exports}}]);