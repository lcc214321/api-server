(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pwdReset"],{"30a5":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-item",e._b({attrs:{label:!!e.showLabel&&e.inputName}},"a-form-item",!!e.showLabel&&e.formLayout,!1),[a("a-popover",{attrs:{placement:e.placement,trigger:["focus"]},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:[e.inputId,{rules:[{required:!0,message:"输入新密码!"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"],validateFirst:!0}],expression:"[inputId,{ rules: [{ required: true, message: '输入新密码!' },{ validator: this.handlePasswordLevel }],\n                              validateTrigger: ['change', 'blur'], validateFirst: true}]"}],attrs:{size:e.inputSize,autocomplete:"false",placeholder:"请输入"+e.inputName},on:{click:e.handlePasswordInputClick}},[e.inputPrefixIcon?a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:e.inputPrefixIcon},slot:"prefix"}):e._e()],1)],2)],1)},s=[],o=a("ac0d"),n={0:"低",1:"低",2:"中",3:"强"},i={0:"error",1:"error",2:"warning",3:"success"},l={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"PasswordLevel",mixins:[o["c"]],props:{inputId:{type:String,default:"password"},inputName:{type:String,default:"密码"},inputSize:{type:String,default:"default"},inputPrefixIcon:{type:String,default:""},showLabel:{type:Boolean,default:!0},formLayout:{type:Object,default:function(){return{}}}},data:function(){return{state:{passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},placement:"rightTop"}},computed:{passwordLevelClass:function(){return i[this.state.passwordLevel]},passwordLevelName:function(){return n[this.state.passwordLevel]},passwordLevelColor:function(){return l[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,a){var r=0;t.length<6?a(new Error("密码不能少于6个字符")):t.length>20?a(new Error("密码不能多于20个字符")):(/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够"))))},handlePasswordInputClick:function(){this.isMobile()&&(this.placement="bottom"),this.state.passwordLevelChecked=!0}}},u=d,c=a("2877"),p=Object(c["a"])(u,r,s,!1,null,"42b2bf7d",null);t["a"]=p.exports},"9ad2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-settings-info-view"},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{md:20}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",e._b({attrs:{label:"原密码"}},"a-form-item",e.formLayout,!1),[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["oldPwd",{rules:[{required:!0,message:"请输入姓名!"}]}],expression:"['oldPwd',{ rules: [{ required: true, message: '请输入姓名!' }]}]"}],attrs:{placeholder:"输入原密码"}})],1),a("password",{attrs:{inputId:"newPwd",formLayout:e.formLayout}}),a("a-form-item",e._b({attrs:{label:"确认密码"}},"a-form-item",e.formLayout,!1),[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmNewPwd",{rules:[{required:!0,message:"输入确认密码!"},{validator:e.handleConfirmNewPwd}],validateTrigger:["change","blur"],validateFirst:!0}],expression:"['confirmNewPwd',{ rules: [{ required: true, message: '输入确认密码!' },\n                                                    {validator: handleConfirmNewPwd}], validateTrigger: ['change', 'blur'], validateFirst: true}]"}],attrs:{name:"confirmNewPwd",placeholder:"输入确认密码"}})],1),a("a-form-item",[a("a-row",[a("a-col",{attrs:{xs:24,sm:4}}),a("a-col",{attrs:{xs:24,sm:19}},[a("a-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.handleBtnClick}},[e._v("保存")])],1)],1)],1)],1)],1)],1)],1)},s=[],o=(a("d3b7"),a("5723")),n=a("30a5"),i={name:"Pwd",components:{Password:n["a"]},data:function(){return{form:this.$form.createForm(this),formLayout:{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:15}}},btnLoading:!1}},methods:{handleConfirmNewPwd:function(e,t,a){var r=this.form.getFieldValue("newPwd");r&&r!==t?a(new Error("确认密码和新密码输入不一致")):a()},handleBtnClick:function(){var e=this;this.form.validateFields((function(t,a){t||(e.btnLoading=!0,Object(o["a"])({newPwd:a.newPwd,oldPwd:a.oldPwd}).then((function(t){t.status&&setTimeout((function(){e.form.resetFields()}),1e3)})).finally((function(){e.btnLoading=!1})))}))}}},l=i,d=a("2877"),u=Object(d["a"])(l,r,s,!1,null,null,null);t["default"]=u.exports}}]);