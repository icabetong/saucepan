(this.webpackJsonpsaucepan=this.webpackJsonpsaucepan||[]).push([[0],{137:function(e,n,t){},138:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1),o=t.n(i),r=t(11),s=t.n(r),c=t(142),d=t(12),u=t(13),p=t(15),l=t(14),b=t(34),j=t(6),f=function(e){var n="uppercase text-sm";return n+=e.marginY||" my-1 ",n+=e.hintColor||" text-gray-200 ",n+=e.fontWeight||" font-semibold",Object(a.jsx)("div",{className:n,children:e.hint})},m=function(e){var n="rounded-md outline-none ring-2 ";return n+=e.marginY||"my-2",n+=e.paddingX||" px-2 ",n+=e.paddingY||" py-1 ",n+=e.background||" bg-gray-800 ",n+=e.ringColor||" ring-gray-500 ",n+=e.ringColorFocus||" focus:ring-indigo-500 ",n+=e.textColor||" text-white ",Object(a.jsx)("input",{className:n,type:e.type,id:e.id,name:e.name,value:e.value,onChange:e.onChange})},h=function(e){return Object(a.jsx)("button",{className:"w-max mr-2 p-2 rounded-md bg-transparent hover:bg-red-500 text-white",type:e.type,id:e.id,name:e.name,onClick:e.onClick,children:Object(a.jsx)("span",{className:"flex items-center h-4",children:Object(a.jsx)(j.IconX,{})})})},x=function(e){var n="w-max box-border rounded-md font-medium";return n+=e.paddingX||" px-2.5 ",n+=e.paddingY||" py-2 ",n+=e.marginX||" my-4 ",n+=e.marginY||" ",n+=e.background||" bg-indigo-500 ",n+=e.backgroundHover||" bg-indigo-700 ",n+=e.textColor||" text-white ",Object(a.jsx)("button",{className:n,type:e.type,id:e.id,name:e.name,onClick:e.onClick,children:e.icon})},g=function(e){var n="w-full box-border rounded-md font-medium ";return n+=e.paddingX||" px-2",n+=e.paddingY||" py-2",n+=e.marginY||" my-4",n+=e.background||" bg-indigo-500",n+=e.backgroundHover||" hover:bg-indigo-700",n+=e.textColor||" text-white",Object(a.jsx)("button",{className:n,type:e.type,id:e.id,name:e.name,onClick:e.onClick,children:e.text})},v=function(e){return Object(a.jsx)("button",{className:"w-full mt-2 p-2 rounded-md text-left bg-indigo-500 bg-opacity-20 text-indigo-500 hover:bg-indigo-700 hover:text-white",id:e.id,name:e.name,text:e.header,onClick:e.onClick,children:e.header})},O=t(33),S=t(49),C=t(50);O.a.use(S.a).init({resources:{en:{translations:C}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}}).then();var w=O.a,_="_insert_id",k="_insert_question",y="_insert_answer",I="_update_id",E="_update_question",M="_update_answer",N=function(e){return Object(a.jsxs)("div",{className:"mb-8 flex flex-row items-center",children:[Object(a.jsx)(h,{onClick:function(){return e.onDismiss()}}),Object(a.jsx)("span",{className:"my-1 font-semibold text-white text-2xl",children:w.t(e.header)})]})},H=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n="p-4 bg-gray-800 ";return n+=(this.props.isShown,NaN),Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)(N,{header:"header_create_sauce",onDismiss:function(){return e.props.onDismiss()}}),Object(a.jsxs)("form",{onSubmit:function(n){return e.props.onSubmit(e.props.saucepanId,n)},children:[Object(a.jsx)("input",{type:"hidden",id:_,name:_}),Object(a.jsx)(f,{hint:w.t("input_question")}),Object(a.jsx)(m,{background:"bg-gray-700",type:"text",id:k,name:k}),Object(a.jsx)(f,{hint:w.t("input_answer")}),Object(a.jsx)(m,{background:"bg-gray-700",type:"text",id:y,name:y}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{type:"submit",text:w.t("button_save")})]})]})}}]),t}(i.Component),R=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(e){var a;return Object(d.a)(this,t),(a=n.call(this,e)).onInputChanged=function(e){switch(e.target.id){case I:a.setState({id:e.target.value});break;case E:a.setState({question:e.target.value});break;case M:a.setState({answer:e.target.value})}},a.state={id:a.props.id,question:a.props.question,answer:a.props.answer},a}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n="p-4 bg-gray-800 ";return n+=(this.props.isShown,NaN),Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)(N,{header:"header_edit_sauce",onDismiss:function(){return e.props.onDismiss()}}),Object(a.jsxs)("form",{onSubmit:function(n){return e.props.onSubmit(e.props.saucepanId,e.props.id,n)},children:[Object(a.jsx)("input",{type:"hidden",id:I,name:I,value:this.state.id,onChange:function(n){return e.onInputChanged(n)}}),Object(a.jsx)(f,{hint:w.t("input_question")}),Object(a.jsx)(m,{background:"bg-gray-700",type:"text",id:E,name:E,value:this.state.question,onChange:function(n){return e.onInputChanged(n)}}),Object(a.jsx)(f,{hint:w.t("input_answer")}),Object(a.jsx)(m,{background:"bg-gray-700",type:"text",id:M,name:M,value:this.state.answer,onChange:function(n){return e.onInputChanged(n)}}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{type:"submit",text:w.t("button_save")})]})]})}}]),t}(i.Component),T=t(32),q=t.n(T),D=(t(48),function(e){return Object(a.jsxs)("div",{className:"my-4 grid gap-2 grid-cols-auto-sauce grid-rows-auto-sauce",children:[Object(a.jsx)("button",{className:"bg-gray-800 border border-dashed rounded-md border-gray-500 hover:bg-gray-600 hover:shadow-md transition text-white",onClick:function(){return e.onCreate()},children:Object(a.jsx)(j.IconPlus,{className:"mx-auto"})}),e.sauces.map((function(n){return function(n){return Object(a.jsx)(P,{sauce:n,saucepanId:e.saucepanId,autoRenderToMarkdown:e.autoRenderToMarkdown,onEdit:e.onEdit,onRemove:e.onRemove,onCopy:e.onCopy},n.id)}(n)}))]})}),P=function(e){var n=e.sauce,t="**".concat(n.question).concat("**"),i="```".concat(n.answer).concat("```"),o=t.concat("  ").concat(i);return Object(a.jsxs)("div",{className:"flex flex-col justify-center p-4 border border-gray-600 rounded-md text-white",onClick:function(){return e.onCopy(o)},children:[Object(a.jsx)("div",{className:"text-lg",children:e.autoRenderToMarkdown?Object(a.jsx)(q.a,{children:t}):Object(a.jsx)("span",{children:t})}),Object(a.jsx)("div",{className:"text-md",children:e.autoRenderToMarkdown?Object(a.jsx)(q.a,{children:i}):Object(a.jsx)("span",{children:i})}),Object(a.jsxs)("div",{className:"mt-4 space-x-2",children:[Object(a.jsx)(x,{icon:Object(a.jsx)(j.IconPencil,{}),onClick:function(t){return e.onEdit(n,t)}}),Object(a.jsx)(x,{icon:Object(a.jsx)(j.IconTrash,{}),onClick:function(t){return e.onRemove(e.saucepanId,n,t)}})]})]})},Y="input_name",A=function(e){return Object(a.jsxs)(i.Fragment,{children:[Object(a.jsx)(X,{id:e.data.id,header:e.data.name,isInHeaderEditMode:e.isInHeaderEditMode,onHeaderEdit:e.onHeaderEdit,onHeaderChanged:e.onHeaderChanged}),Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(D,{saucepanId:e.data.id,sauces:e.data.sauces,autoRenderToMarkdown:e.autoRenderToMarkdown,onCreate:e.onCreate,onEdit:e.onEdit,onRemove:e.onRemove,onCopy:e.onCopy})})]})},X=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(e){var a;return Object(d.a)(this,t),(a=n.call(this,e)).onInputChanged=function(e){a.setState({header:e.target.value})},a.state={header:null!==a.props.header?a.props.header:w.t("saucepan_name_fallback")},a}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"p-1",children:[e.props.isInHeaderEditMode?Object(a.jsxs)("form",{onSubmit:function(n){return e.props.onHeaderChanged(n)},children:[Object(a.jsx)("input",{type:"hidden",id:"input_id",name:Y,value:e.props.id}),Object(a.jsx)(m,{type:"text",id:Y,name:Y,value:e.state.header,onChange:function(n){return e.onInputChanged(n)}}),Object(a.jsx)("input",{className:"hidden",type:"submit",id:"input_submit"})]}):Object(a.jsx)("span",{className:"font-bold text-3xl text-white",onClick:function(){return e.props.onHeaderEdit(!0)},children:e.state.header}),function(){if(!e.props.isInHeaderEditMode)return Object(a.jsx)("button",{className:"text-xs text-transparent hover:text-white",onClick:function(){return e.props.onHeaderEdit(!0)},children:Object(a.jsx)(j.IconPencil,{})})}()]})}}]),t}(i.Component),F=(t(136),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(e){var a;Object(d.a)(this,t),(a=n.call(this,e)).onSaucepanAdded=function(){a.setState({saucepans:a.state.saucepans.concat({id:Date.now(),name:null,sauces:[]})}),a.onShowToastNotification("feedback_saucepan_added")},a.onSaucepanModified=function(e){var n=a.state.saucepans,t=n.findIndex((function(n){return e.id===n.id}));t>-1&&(n[t]=e,a.setState({saucepans:n}))},a.onSaucepanSwitched=function(e){a.setState({currentSaucepanId:e.id})},a.onSaucepanHeaderEdit=function(e){a.setState({isInHeaderEditMode:e})},a.onSaucepanHeaderChanged=function(e){e.preventDefault();var n=+e.target[0].value,t=e.target[1].value;if(null!==n&&null!==t){var i=a.state.saucepans.find((function(e){return e.id===n}));i&&(i.name=t,a.onSaucepanHeaderEdit(!1),a.onSaucepanModified(i))}},a.onSauceInsert=function(e,n){n.preventDefault();var t=n.target[1].value,i=n.target[2].value;if(""!==t&&""!==i){var o={id:Date.now(),question:t,answer:i},r=a.state.saucepans.find((function(n){return e===n.id}));r&&(r.sauces=r.sauces.concat(o),a.onSaucepanModified(r),a.onShowToastNotification("feedback_sauce_added"),a.onExitCreateMode())}},a.onSauceRemove=function(e,n,t){t.stopPropagation();var i=a.state.saucepans.find((function(n){return n.id===e}));i&&(i.sauces=i.sauces.filter((function(e){return e.id!==n.id})),a.onSaucepanModified(i),a.onShowToastNotification("feedback_sauce_removed"))},a.onSauceEdit=function(e,n){n.stopPropagation(),a.setState({isInEditMode:!0,currentSauce:e})},a.onSauceUpdate=function(e,n,t){t.preventDefault();var i=t.target[1].value,o=t.target[2].value;if(""!==i&&""!==o){var r=a.state.saucepans.find((function(n){return n.id===e}));if(r){var s=r.sauces.findIndex((function(e){return e.id===n}));if(s>-1){var c=r.sauces[s];c.question=i,c.answer=o,r.sauces[s]=c,a.onSaucepanModified(r),a.onShowToastNotification("feedback_sauce_updated"),a.onExitEditMode()}}}},a.onSauceCopied=function(e){navigator.clipboard.writeText(e).then((function(){a.onShowToastNotification("feedback_sauce_copied")}))},a.onShowToastNotification=function(e){b.b.dark(w.t(e),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},a.onEnterCreateMode=function(){a.setState({isInCreateMode:!0,isInEditMode:!1})},a.onExitCreateMode=function(){a.setState({isInCreateMode:!1,currentSauce:null})},a.onEnterEditMode=function(){a.setState({isInEditMode:!0})},a.onExitEditMode=function(){a.setState({isInCreateMode:!1,isInEditMode:!1,currentSauce:null})};var i={id:Date.now(),name:null,sauces:[]};return a.state={saucepans:[i],currentSaucepanId:i.id,isSauceRenderedInMarkdown:!0,isInCreateMode:!1,isInEditMode:!1,isInHeaderEditMode:!1,currentSauce:null},a}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=function(e){return null!==e.name?Object(a.jsx)("span",{children:e.name}):Object(a.jsx)("span",{children:w.t("saucepan_name_fallback")})};return Object(a.jsxs)("div",{className:"min-w-screen min-h-screen bg-gray-900",children:[Object(a.jsxs)("div",{className:"min-w-screen min-h-screen flex flex-row",children:[Object(a.jsx)("div",{className:"p-2 border-r-2 border-gray-700 flex-shrink-0 flex-grow-0 flex-navigation",children:Object(a.jsxs)("div",{className:"p-1",children:[Object(a.jsx)("div",{className:"my-4 font-medium text-2xl text-indigo-100",children:w.t("app_name")}),Object(a.jsx)(x,{icon:Object(a.jsx)(j.IconPlus,{}),onClick:this.onSaucepanAdded}),Object(a.jsx)(i.Fragment,{children:e.state.saucepans.map((function(t){var i=!1;return t.id===e.state.currentSaucepanId&&(i=!0),Object(a.jsx)(v,{header:n(t),isActive:i,onClick:function(){return e.onSaucepanSwitched(t)}},t.id)}))})]})}),Object(a.jsx)("div",{className:"p-4 flex-content",children:function(){var n=e.state.saucepans.findIndex((function(n){return n.id===e.state.currentSaucepanId}));if(n>-1){var t=e.state.saucepans[n];return Object(a.jsx)(A,{data:t,autoRenderToMarkdown:e.state.isSauceRenderedInMarkdown,isInHeaderEditMode:e.state.isInHeaderEditMode,onRemove:e.onSauceRemove,onEdit:e.onSauceEdit,onCreate:e.onEnterCreateMode,onCopy:e.onSauceCopied,onHeaderEdit:e.onSaucepanHeaderEdit,onHeaderChanged:e.onSaucepanHeaderChanged})}}()}),function(){if(null!==e.state.currentSauce&&e.state.isInEditMode){var n=e.state.currentSauce;return Object(a.jsx)(R,{id:n.id,question:n.question,answer:n.answer,saucepanId:e.state.currentSaucepanId,isShown:e.state.isInEditMode,onSubmit:e.onSauceUpdate,onDismiss:e.onExitEditMode})}if(e.state.isInCreateMode)return Object(a.jsx)(H,{saucepanId:e.state.currentSaucepanId,isShown:e.state.isInCreateMode,onSubmit:e.onSauceInsert,onDismiss:e.onExitCreateMode})}()]}),Object(a.jsx)(b.a,{})]})}}]),t}(i.Component));t(137);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(c.a,{i18n:w,children:Object(a.jsx)(F,{})})}),document.getElementById("root"))},48:function(e,n,t){},50:function(e){e.exports=JSON.parse('{"app_name":"Saucepan","button_add":"Add","button_new":"New","button_save":"Save","button_copy":"Copy","button_edit":"Edit","button_remove":"Remove","button_cancel":"Cancel","input_question":"Question","input_answer":"Answer","feedback_saucepan_added":"Saucepan added","feedback_sauce_added":"Sauce added","feedback_sauce_removed":"Sauce removed","feedback_sauce_updated":"Sauce updated","feedback_sauce_copied":"Sauce copied","header_create_sauce":"Create Sauce","header_edit_sauce":"Edit Sauce","saucepan_name_fallback":"Unnamed Saucepan "}')}},[[138,1,2]]]);
//# sourceMappingURL=main.bf45c477.chunk.js.map