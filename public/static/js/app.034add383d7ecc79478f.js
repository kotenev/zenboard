webpackJsonp([0],{"+Y6S":function(t,e,n){"use strict";var o=n("IN6T"),a={inserted:function(t){t.focus()}};e.a={name:"draft-card",props:["rowId","colId","numCards"],directives:{focus:a},data:function(){return{title:""}},methods:{onInput:function(t){this.title=t.target.innerText},onCancel:function(t){var e=this.rowId,n=this.colId,a={rowId:e,colId:n};console.log("draft-card:draft-card-cancel",this.rowId,this.colId),o.a.$emit("draft-card-cancel",a)},onSave:function(t){if(this.title){var e={title:this.title,rowId:this.rowId,colId:this.colId,position:this.numCards+1};console.log("draft-card:draft-card-save"),o.a.$emit("draft-card-save",e)}else this.onCancel()}},mounted:function(){var t=this;o.a.$on("global-cancel",function(e){console.log("draft-card:global-cancel"),t.onCancel()})}}},"5lw2":function(t,e,n){"use strict";function o(t){n("hs/C")}var a=n("+Y6S"),r=n("rKHT"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},"60jW":function(t,e,n){"use strict";function o(t){n("en0m")}var a=n("OFfM"),r=n("gK9F"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},"6uMO":function(t,e){},"8Wsr":function(t,e,n){"use strict";var o=n("DAYN"),a=n.n(o),r=n("rhdv"),i=n("5lw2");e.a={name:"cell",props:["cell","rowId","hasDraftCard"],components:{draggable:a.a,card:r.a,draftCard:i.a},computed:{dragOptions:function(){return{group:"cards",ghostClass:"zca-ghost",disabled:this.contentEditable}}},methods:{onEnd:function(t){console.log("onEnd (drag)"),this.$emit("card-drag-end",{id:t.clone.dataset.cardId,rowId:t.to.dataset.rowId,colId:t.to.dataset.colId,position:t.newIndex+1})},onSort:function(){return!0}}}},"8a40":function(t,e,n){"use strict";var o=n("Sz/U"),a=n("RsYj"),r=n("VU/8"),i=r(o.a,a.a,!1,null,null,null);e.a=i.exports},"93UE":function(t,e,n){"use strict";function o(t){n("iXeW")}var a=n("mpyD"),r=n("nCjP"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},B1Az:function(t,e,n){"use strict";var o=n("8Wsr"),a=n("m/ZL"),r=n("VU/8"),i=r(o.a,a.a,!1,null,null,null);e.a=i.exports},E8Ei:function(t,e,n){"use strict";var o=n("IN6T");e.a={name:"masthead",props:["hasRows"],methods:{onAddCard:function(){o.a.$emit("masthead-add-card",!0)},onAddRow:function(){o.a.$emit("row-edit-details","new-row")}}}},IN6T:function(t,e,n){"use strict";var o=n("7+uW"),a=new o.a;e.a=a},K545:function(t,e,n){"use strict";var o=n("93UE");e.a={name:"archive",props:["archivedRows"],components:{row:o.a}}},KjxJ:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("board"),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"zen-footer"},[n("a",{attrs:{href:"https://github.com/matthumphreys/zenboard"}},[n("span",{staticClass:"zfo-logo-dark"},[t._v("Zen")]),n("span",{staticClass:"zfo-logo-light"},[t._v("board")])]),n("span",{staticClass:"zfo-version"},[t._v("v0.1")])])}],r={render:o,staticRenderFns:a};e.a=r},Kz3E:function(t,e,n){"use strict";function o(t){n("6uMO")}var a=n("E8Ei"),r=n("otQO"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},KzVM:function(t,e){},LYzt:function(t,e,n){"use strict";var o=n("7+uW"),a=n("Kz3E"),r=n("93UE"),i=n("8a40"),s=n("60jW"),c=n("ZUx0"),l=n("IN6T"),d=n("hMcO"),u=n.n(d),v=window.location.origin;o.a.use(u.a,v),e.a={name:"board",components:{masthead:a.a,row:r.a,cardEditor:i.a,RowEditor:s.a,Archive:c.a},props:["disableFetch"],data:function(){return{rows:[],archivedRows:[]}},sockets:{connect:function(){console.log("socket connected")},boardRefresh:function(t){console.log("boardRefresh",t),this.rows=t}},watch:{rows:function(t){console.log(t)},archivedRows:function(t){console.log("watched",t)}},created:function(){var t=this;this.disableFetch||fetch("/api/rows/deep").then(function(e){if(!e.ok)throw new Error(e.statusText);e.json().then(function(e){t.rows=e,t.initArchive()})}).catch(function(t){console.error(t),alert("Sorry, something went wrong\n\n"+t)})},methods:{cardDragEnd:function(t){console.log("board:card-drag-end",t),this.$socket.emit("card:move",t)},onCancel:function(t){console.log("board:onCancel"),l.a.$emit("global-cancel",!0)},onSave:function(t){},initArchive:function(){var t=this;fetch("/api/archive/rows/deep").then(function(e){if(200!==e.status)throw Error(e.statusText);e.json().then(function(e){t.archivedRows=e,console.log("Archive",e)})}).catch(function(t){console.error(t),alert("Couldn't load archive\n\n"+t)})}},mounted:function(){var t=this;l.a.$on("rows-refreshed",function(e){console.log("board:rows-refreshed"),t.rows=e}),l.a.$on("draft-card-save",function(t){console.log("draft-card-save",t),this.$socket.emit("card:create",t)})}}},M93x:function(t,e,n){"use strict";function o(t){n("TBrK")}var a=n("xJD8"),r=n("KjxJ"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("M93x");o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:a.a}})},NU23:function(t,e,n){"use strict";var o=n("IN6T");e.a={name:"card",props:["card"],methods:{editDetails:function(){console.log("card:editDetails"),o.a.$emit("card-edit-details",this.card.id)}},computed:{isUrgent:function(){return this.card.title.indexOf("!!")>0},filteredTitle:function(){return this.card.title}}}},OFfM:function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),r=n("IN6T"),i={inserted:function(t){t.focus()}};e.a={name:"row-editor",directives:{focus:i},data:function(){return{row:!1,allRows:[]}},mounted:function(){var t=this;r.a.$on("row-edit-details",function(e){console.log("Edit row",e),"new-row"===e?t.row={isNew:!0,position:1,isArchived:!1}:fetch("/api/rows/"+e).then(function(e){if(!e.ok)throw new Error(e.statusText);e.json().then(function(e){t.row=e,e.isArchived=e.is_archived,console.log(e),t.row.originalPosition=e.position})}).catch(function(t){console.error(t),alert("Sorry, something went wrong\n\n"+t)}),fetch("/api/rows/").then(function(e){e.json().then(function(e){t.allRows=e})}).catch(function(t){console.error(t),alert("Sorry, something went wrong\n\n"+t)})}),r.a.$on("global-cancel",function(){t.onCancel()}),r.a.$on("global-save-row",function(){t.onSave()})},methods:{showOption:function(t){return!!this.row.isNew||t!==this.row.position},positionLabel:function(t){return console.log(this.row.position,t),this.row.isNew?t+1:t>this.row.position?t:t+1},onCancel:function(){this.row=!1},onCancelIfClickOutside:function(t){t.srcElement.classList.contains("template-modal")&&r.a.$emit("global-cancel",t)},onSave:function(){console.log("About to save row...");var t=this;console.log("api url",""),fetch("/api/rows/save",{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:a()(this.row)}).then(function(e){if(!e.ok)throw Error(e.statusText);console.log("Card saved"),t.row=!1}).catch(function(t){return alert("Sorry, something went wrong\n\n"+t)})},handleCmdEnter:function(t){console.log(t),(t.metaKey||t.ctrlKey)&&t.keyCode}}}},RMBZ:function(t,e){},RsYj:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.card?n("div",{staticClass:"zen-modal zen-card-editor",on:{click:t.onCancelIfClickOutside}},[n("div",{staticClass:"zmo-content",on:{keyup:[function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key))&&e.ctrlKey?void t.onSave(e):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.onCancel(e)}]}},[n("div",{staticClass:"zfo-title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.card.title,expression:"card.title"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",name:"title"},domProps:{value:t.card.title},on:{input:function(e){e.target.composing||t.$set(t.card,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"zfo-description"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.card.description,expression:"card.description"}],attrs:{name:"description"},domProps:{value:t.card.description},on:{input:function(e){e.target.composing||t.$set(t.card,"description",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"zfo-buttons"},[n("input",{staticClass:"zfo-button zfo-cancel",attrs:{type:"button",value:"Cancel",title:"[Esc]"},on:{click:t.onCancel}}),t._v(" "),n("span",{staticClass:"zfo-archive"},[t._v("Archive "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.card.isArchived,expression:"card.isArchived"}],attrs:{type:"checkbox",name:"archive"},domProps:{checked:Array.isArray(t.card.isArchived)?t._i(t.card.isArchived,null)>-1:t.card.isArchived},on:{change:function(e){var n=t.card.isArchived,o=e.target,a=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.card.isArchived=n.concat([null])):r>-1&&(t.card.isArchived=n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.card,"isArchived",a)}}})]),t._v(" "),n("input",{staticClass:"zfo-button zfo-save",attrs:{type:"button",value:"Save",title:"[CMD + Enter]"},on:{click:t.onSave}})])])]):t._e()},a=[],r={render:o,staticRenderFns:a};e.a=r},"Sz/U":function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),r=n("IN6T"),i={inserted:function(t){t.focus()}};e.a={name:"cardEditor",directives:{focus:i},data:function(){return{card:!1}},mounted:function(){var t=this;r.a.$on("card-edit-details",function(e){console.log("Edit card",e),fetch("/api/cards/"+e).then(function(e){e.json().then(function(e){t.card=e})}).catch(function(t){console.error(t),alert("Sorry, something went wrong\n\n"+t)})}),r.a.$on("global-cancel",function(){t.onCancel()}),r.a.$on("global-save-card",function(){t.onSave()})},methods:{onCancel:function(){this.card=!1},onCancelIfClickOutside:function(t){t.srcElement.classList.contains("template-modal")&&r.a.$emit("global-cancel",t)},onSave:function(){if(console.log("About to save card...",this.card),!1===this.card)console.log("Card modal has no card to save");else{this.card.timestamp=(new Date).getTime();var t=this;fetch("/api/cards/save",{method:"post",headers:new Headers({"Content-Type":"application/json"}),body:a()(this.card)}).then(function(e){if(!e.ok)throw Error(e.statusText);console.log("Card saved"),t.card=!1}).catch(function(t){return alert("Sorry, something went wrong\n\n"+t)})}},handleCmdEnter:function(t){console.log(t),(t.metaKey||t.ctrlKey)&&13===t.keyCode&&this.onSave()}}}},TBrK:function(t,e){},TUcH:function(t,e,n){"use strict";function o(t){n("KzVM")}var a=n("LYzt"),r=n("hNHg"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},ZUx0:function(t,e,n){"use strict";function o(t){n("RMBZ")}var a=n("K545"),r=n("q+sS"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,"data-v-fa1d85d0",null);e.a=c.exports},dKBk:function(t,e){},en0m:function(t,e){},gK9F:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.row?n("div",{staticClass:"zen-modal zen-row-editor",on:{click:t.onCancelIfClickOutside}},[n("div",{staticClass:"zmo-content",on:{keyup:[function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key))&&e.ctrlKey?void t.onSave(e):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.onCancel(e)}]}},[n("div",{staticClass:"zfo-title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.title,expression:"row.title"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",name:"label",placeholder:t.row.isNew?"New row":"Title"},domProps:{value:t.row.title},on:{input:function(e){e.target.composing||t.$set(t.row,"title",e.target.value)}}})]),t._v(" "),t.allRows.length?n("div",{staticClass:"zre-position"},[t._v("\n      Position "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.row.position,expression:"row.position"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.row,"position",e.target.multiple?n:n[0])}}},[n("option",{domProps:{value:1}},[t._v("1 (top)")]),t._v(" "),t._l(t.allRows,function(e){return t.showOption(e.position)?n("option",{domProps:{value:t.positionLabel(e.position)}},[t._v(t._s(t.positionLabel(e.position))+" (after "+t._s(e.title)+")")]):t._e()})],2)]):t._e(),t._v(" "),n("div",{staticClass:"zfo-description"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.row.description,expression:"row.description"}],attrs:{name:"description"},domProps:{value:t.row.description},on:{input:function(e){e.target.composing||t.$set(t.row,"description",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"zfo-buttons"},[n("input",{staticClass:"zfo-button zfo-cancel",attrs:{type:"button",value:"Cancel",title:"[Esc]"},on:{click:t.onCancel}}),t._v(" "),n("span",{staticClass:"zfo-archive"},[t._v("Archive "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.row.isArchived,expression:"row.isArchived"}],staticClass:"tdc-archive form-archive",attrs:{type:"checkbox",name:"archive"},domProps:{checked:Array.isArray(t.row.isArchived)?t._i(t.row.isArchived,null)>-1:t.row.isArchived},on:{change:function(e){var n=t.row.isArchived,o=e.target,a=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.row.isArchived=n.concat([null])):r>-1&&(t.row.isArchived=n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.row,"isArchived",a)}}})]),t._v(" "),n("input",{staticClass:"zfo-button zfo-save",attrs:{type:"button",value:"Save",title:"[CMD + Enter]"},on:{click:t.onSave}})])])]):t._e()},a=[],r={render:o,staticRenderFns:a};e.a=r},hNHg:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zbr-container"},[n("masthead",{attrs:{hasRows:t.rows.length}}),t._v(" "),n("table",{staticClass:"zbr-main",on:{keyup:[function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key))&&e.ctrlKey?void t.onSave(e):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.onCancel(e)}]}},[t._m(0),t._v(" "),t._l(t.rows,function(e){return n("row",{key:"row.id",attrs:{row:e},on:{"card-drag-end":t.cardDragEnd}})}),t._v(" "),0===t.rows.length?n("tr",[t._m(1)]):t._e()],2),t._v(" "),n("cardEditor"),t._v(" "),n("row-editor")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"zbr-col-empty"}),t._v(" "),n("th",{staticClass:"zbr-col-heading zbr-todo"},[t._v("To do\n      ")]),t._v(" "),n("th",{staticClass:"zbr-col-heading zbr-blocked"},[t._v("Blocked")]),t._v(" "),n("th",{staticClass:"zbr-col-heading zbr-inprogress"},[t._v("In progress\n      ")]),t._v(" "),n("th",{staticClass:"zbr-col-heading zbr-done"},[t._v("Done "),n("span",{staticClass:"fa fa-check-circle"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"zbr-table-bg",attrs:{colspan:"5"}},[n("div",{staticClass:"zbr-no-rows"},[t._v('To create a row, click the "+ Add row" button')])])}],r={render:o,staticRenderFns:a};e.a=r},"hs/C":function(t,e){},iXeW:function(t,e){},"m/ZL":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",{staticClass:"drag-area",attrs:{element:"td",list:t.cell.cards,options:t.dragOptions,"data-col-id":t.cell.colId,"data-row-id":t.rowId},on:{end:t.onEnd,sort:t.onSort}},[t._l(t.cell.cards,function(t){return n("card",{key:"card.id",attrs:{card:t}})}),t._v(" "),t.hasDraftCard?n("draft-card",{attrs:{rowId:t.rowId,colId:t.cell.colId,numCards:t.cell.cards.length}}):t._e()],2)},a=[],r={render:o,staticRenderFns:a};e.a=r},mpyD:function(t,e,n){"use strict";var o=n("B1Az"),a=n("IN6T");e.a={name:"row",components:{cell:o.a},props:["row"],data:function(){return{hasDraftCard:!1,hover:!1}},methods:{cardDragEnd:function(t){console.log("row:card-drag-end"),this.$emit("card-drag-end",t)},addDraftCard:function(t){this.hasDraftCard=!0},removeDraftCards:function(t){this.hasDraftCard=!1},onClick:function(){console.log("onClick"),a.a.$emit("row-edit-details",this.row.id)}},mounted:function(){var t=this;a.a.$on("draft-card-cancel",function(e){e.rowId.toString()===t.row.id.toString()&&t.removeDraftCards(e)}),a.a.$on("draft-card-save",function(e){e.rowId===t.row.id&&(t.hasDraftCard=!1)}),a.a.$on("masthead-add-card",function(){console.log("masthead-add-card"),1===t.row.position&&(t.hasDraftCard=!0)})}}},nCjP:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"zbr-row zbr-table-bg",on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[n("th",[n("div",{staticClass:"zro-title",attrs:{"data-is-test-data":"0F65u28Rc66ORYII"===t.row.title},on:{click:t.onClick}},[t._v(t._s(t.row.title))]),t._v(" "),n("transition",{attrs:{name:"zro-fade"}},[t.hover?n("div",{staticClass:"zro-button",attrs:{disabled:"hasDraftCard"},on:{click:t.addDraftCard}},[t._v("+ Add card")]):t._e()])],1),t._v(" "),t._l(t.row.cells,function(e,o){return n("cell",{key:t.row.id+","+o,attrs:{cell:e,rowId:t.row.id,hasDraftCard:t.hasDraftCard&&1===e.colId},on:{"card-drag-end":t.cardDragEnd}})})],2)},a=[],r={render:o,staticRenderFns:a};e.a=r},nq6e:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:{"zbr-card":!0,"zca-urgent":t.isUrgent},attrs:{"data-card-id":t.card.id,title:"id: "+t.card.id},on:{click:t.editDetails}},[t._v(t._s(t.card.title))])},a=[],r={render:o,staticRenderFns:a};e.a=r},otQO:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{staticClass:"zbr-heading"},[t._v("\n    Acme Dev Team\n  ")]),t._v(" "),n("nav",{staticClass:"zbr-nav"},[n("ul",[n("li",{staticClass:"zbr-nav-item",on:{click:t.onAddRow}},[t._v("+ Add row")]),t._v(" "),t.hasRows?n("li",{staticClass:"zbr-nav-item",on:{click:t.onAddCard}},[t._v("+ Add card")]):t._e()])])])},a=[],r={render:o,staticRenderFns:a};e.a=r},"q+sS":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history-container"},[n("h3",{staticClass:"section-heading"},[t._v("Archived rows")]),t._v(" "),n("table",{staticClass:"history"},[t._m(0),t._v(" "),t._l(t.archivedRows,function(t){return n("row",{key:"row.id",attrs:{row:t}})})],2)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"cell-0"}),t._v(" "),n("th",{staticClass:"history-col"},[t._v("To do\n      ")]),t._v(" "),n("th",{staticClass:"history-col"},[t._v("Blocked")]),t._v(" "),n("th",{staticClass:"history-col"},[t._v("In progress\n      ")]),t._v(" "),n("th",{staticClass:"history-col"},[t._v("Done")])])}],r={render:o,staticRenderFns:a};e.a=r},rKHT:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zen-draft-card",on:{keyup:function(e){return("button"in e||!t._k(e.keyCode,"enter",13,e.key))&&e.ctrlKey?void t.onSave(e):null}}},[n("div",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"zdc-title",attrs:{contenteditable:!0},on:{input:t.onInput}}),t._v(" "),n("div",{staticClass:"zdc-button-container"},[n("span",{staticClass:"zdc-button zdc-cancel",attrs:{title:"[Esc]","data-row-id":t.rowId,"data-col-id":t.colId},on:{click:t.onCancel}},[t._v("Cancel")]),t._v(" "),n("span",{staticClass:"zdc-button zdc-save",attrs:{title:"[CTRL + Enter]"},on:{click:t.onSave}},[t._v("Save")])])])},a=[],r={render:o,staticRenderFns:a};e.a=r},rhdv:function(t,e,n){"use strict";function o(t){n("dKBk")}var a=n("NU23"),r=n("nq6e"),i=n("VU/8"),s=o,c=i(a.a,r.a,!1,s,null,null);e.a=c.exports},xJD8:function(t,e,n){"use strict";var o=n("TUcH");e.a={name:"app",components:{board:o.a}}}},["NHnr"]);
//# sourceMappingURL=app.034add383d7ecc79478f.js.map