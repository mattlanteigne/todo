(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),l=n.n(s),i=n(4),c=n.n(i),o=(n(15),n(16),n(17),n(7)),d=n(5),r=n(6),u=n(1),m=n(9),h=n(8),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=a.state.item;""!==t&&a.setState({list:[].concat(Object(o.a)(a.state.list),[t])}),a.setState({item:""})},a.handleChange=function(e){a.setState({item:e.target.value})},a.handleComplete=function(e){e.preventDefault();var t=e.target.value;a.state.completed.push(t);var n=a.state.list;n.splice(a.state.list.indexOf(t),1),a.setState({list:n})},a.handleRemoveTodo=function(e){e.preventDefault();var t=e.target.value,n=a.state.list;n.splice(a.state.list.indexOf(t),1),a.setState({list:n})},a.handleReverse=function(e){e.preventDefault();var t=e.target.value;a.state.list.push(t);var n=a.state.completed;n.splice(a.state.completed.indexOf(t),1),a.setState({completed:n})},a.handleRemoveCompleted=function(e){e.preventDefault();var t=e.target.value,n=a.state.completed;n.splice(a.state.completed.indexOf(t),1),a.setState({completed:n})},a.state={item:"",list:[],completed:[]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleComplete=a.handleComplete.bind(Object(u.a)(a)),a.handleRemoveTodo=a.handleRemoveTodo.bind(Object(u.a)(a)),a.handleReverse=a.handleReverse.bind(Object(u.a)(a)),a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"intro",children:"Welcome to my Todo List! To start, enter an item below."}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",value:this.state.item,onChange:this.handleChange,className:"inputField"}),Object(a.jsx)("input",{type:"submit",className:"submitButton btn btn-outline-primary"})]}),Object(a.jsxs)("div",{className:"todoList",children:[Object(a.jsx)("h3",{children:"Todo"}),this.state.list.map((function(t){return Object(a.jsxs)("div",{className:"listItem",children:[Object(a.jsx)("div",{className:"item",children:t}),Object(a.jsx)("button",{value:t,onClick:e.handleComplete,className:"completeButton btn btn-outline-success",children:"Complete"}),Object(a.jsx)("button",{value:t,onClick:e.handleRemoveTodo,className:"removeButton btn btn-outline-danger",children:"Remove"})]})}))]}),Object(a.jsxs)("div",{className:"completedList",children:[Object(a.jsx)("h3",{children:"Completed"}),this.state.completed.map((function(t){return Object(a.jsxs)("div",{className:"completeItem",children:[Object(a.jsx)("div",{className:"item",children:t}),Object(a.jsx)("button",{value:t,onClick:e.handleReverse,className:"reverseButton btn btn-outline-secondary",children:"Reverse"}),Object(a.jsx)("button",{value:t,onClick:e.handleRemoveCompleted,className:"removeButton btn btn-outline-danger",children:"Remove"})]})}))]})]})}}]),n}(l.a.Component);var j=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"TODO"}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(b,{})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),l(e),i(e)}))};c.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.7cebd207.chunk.js.map