(window["webpackJsonpcalculadora-react"]=window["webpackJsonpcalculadora-react"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(7),s=a.n(r),i=(a(13),a(1)),c=a(2),l=a(4),p=a(3),u=a(5),d=(a(14),a(15),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"display"},o.a.createElement("span",{className:"clean",onClick:this.props.onClickClean},"x"),this.props.displayText)}}]),e}(o.a.Component)),b=(a(16),a(17),a(18),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=["defaultButton"];return e.push(this.props.className),o.a.createElement("button",{type:"button",className:e.join(" "),onClick:function(e){return t.props.onClick(e,t.props.label)}},this.props.label)}}]),e}(o.a.Component)),h=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).createButtonsElements=function(){for(var t=[],e=0;e<a.state.buttons.length;e++)t.push(o.a.createElement(b,{key:"button"+[e],label:a.state.buttons[e],onClick:a.props.onClick}));return t},a.state={buttons:["1","2","3","4","5","6","7","8","9","0","."]},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"numbers"},this.createButtonsElements(),o.a.createElement(b,{label:"=",onClick:this.props.onClickTotal,className:"greenBtn"}))}}]),e}(o.a.Component),k=(a(19),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).createButtonsElements=function(){for(var t=[],e=0;e<a.state.buttons.length;e++)t.push(o.a.createElement(b,{key:"button"+[e],label:a.state.buttons[e],onClick:a.props.onClick}));return t},a.state={buttons:["+","-","/","x","%","x2","V"]},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"operations"},this.createButtonsElements())}}]),e}(o.a.Component)),f=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"inputs"},o.a.createElement(h,{onClick:this.props.onClickOperando,onClickTotal:this.props.onClickOperador}),o.a.createElement(k,{onClick:this.props.onClickOperador}))}}]),e}(o.a.Component),O=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(p.a)(e).call(this,t))).onClickOperando=function(t,e){var n;"0"===a.state.display||isNaN(a.state.display)||a.state.resultDisplayed?(n=e,a.setState({resultDisplayed:!1})):n=a.state.display+e,a.setState({display:n})},a.onClickOperador=function(t,e){a.state.operador.length>0?(a.calculate(),"="===e?a.setState({resultDisplayed:!0,operador:""}):a.setState({resultDisplayed:!0,operador:e})):a.setState({operando:a.state.display,operador:e,display:e})},a.onClickClean=function(){a.setState({operando:"",operador:"",display:"0",resultDisplayed:!1})},a.calculate=function(){var t;switch(a.state.operador){case"+":t=parseFloat(a.state.operando)+parseFloat(a.state.display);break;case"-":t=parseFloat(a.state.operando)-parseFloat(a.state.display);break;case"/":t=parseFloat(a.state.operando)/parseFloat(a.state.display);break;case"x":t=parseFloat(a.state.operando)*parseFloat(a.state.display);break;case"%":t=parseFloat(a.state.operando)*parseFloat(a.state.display)/100;break;case"x2":t=parseFloat(a.state.operando)*parseFloat(a.state.operando);break;case"V":t=Math.sqrt(parseFloat(a.state.operando));break;default:t="Digite algo"}a.setState({operando:t,display:t})},a.state={operando:"",operador:"",display:"0",resultDisplayed:!1},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{id:"container"},o.a.createElement(d,{displayText:this.state.display,onClickClean:this.onClickClean}),o.a.createElement(f,{onClickOperando:this.onClickOperando,onClickOperador:this.onClickOperador}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.eef12a83.chunk.js.map