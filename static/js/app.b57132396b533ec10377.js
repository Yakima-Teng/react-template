webpackJsonp([2,0],{0:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=a(193);a(188);var v=a(162),_=a(340),x=l(_),j=a(342),E=l(j),N=a(341),y=l(N),k=a(344),I=l(k),b=a(345),w=l(b),M=a(346),S=l(M),P=a(343),C=l(P),X=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"render",value:function(){return p["default"].createElement("div",{className:"app-wrapper"},p["default"].createElement(x["default"],null),p["default"].createElement("div",{className:"app-content"},this.props.children),p["default"].createElement(E["default"],null),p["default"].createElement(y["default"],null))}}]),e}(p["default"].Component),Y=p["default"].createElement(v.Route,{path:"/",component:X},p["default"].createElement(v.IndexRoute,{component:I["default"]}),p["default"].createElement(v.Route,{path:"/slider-2d-js",component:I["default"]}),p["default"].createElement(v.Route,{path:"/slider-3d-css",component:w["default"]}),p["default"].createElement(v.Route,{path:"/slider-3d-js",component:S["default"]}),p["default"].createElement(v.Route,{path:"/note",component:C["default"]}),p["default"].createElement(v.Route,{path:"*",component:I["default"]}));(0,h.render)(p["default"].createElement(v.Router,{history:v.hashHistory},Y),document.getElementById("app"))},168:function(t,e){t.exports=window.$},171:function(t,e,a){t.exports=a.p+"static/img/magic.aee5162.jpg"},188:function(t,e){},340:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=a(162),v=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={menus:[{title:"2d幻灯-JS",url:"slider-2d-js"},{title:"3d幻灯-CSS",url:"slider-3d-css"},{title:"3d幻灯-JS",url:"slider-3d-js"},{title:"说明及其他",url:"note"}]},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"render",value:function(){var t=this.state.menus.map(function(t){return p["default"].createElement("li",{className:"li",key:t.url},p["default"].createElement(h.Link,{className:"title",to:"/"+t.url},t.title))});return p["default"].createElement("header",{className:"app-header"},p["default"].createElement("nav",{className:"nav"},p["default"].createElement("ul",{className:"ul"},t)))}}]),e}(p["default"].Component);e["default"]=v},341:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=a(168),v=l(h),_=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={isLoading:!0},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"componentDidMount",value:function(){function t(){17===++l&&setTimeout(function(){e.setState({isLoading:!1})},300)}var e=this,l=0,r=new Image;r.src=a(171),r.onload=function(){(0,v["default"])("body").css({"background-color":"#000","background-image":'url("'+r.src+'")'}),t()};for(var n=1;n<17;n++){var i=new Image;i.src="./static/img/near_1200x800/"+(n>9?n:"0"+n)+".jpg",i.onload=t}}},{key:"render",value:function(){return p["default"].createElement("div",{className:"app-loading"+(this.state.isLoading?"":" fade-out")},p["default"].createElement("div",{className:"inner"},p["default"].createElement("i",{className:"fa fa-spinner fa-pulse fa-5x"})))}}]),e}(p["default"].Component);e["default"]=_},342:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={snowsNumber:100},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"render",value:function(){var t=this.generateSnows().map(function(t){var e={animationDelay:100*-t+"ms",left:100*Math.random()+"%"};return p["default"].createElement("div",{className:"snow",key:t,style:e})});return p["default"].createElement("div",{className:"app-snows"},t)}},{key:"generateSnows",value:function(){for(var t=[],e=0;e<this.state.snowsNumber;e++)t.push(e);return t}}]),e}(p["default"].Component);e["default"]=h},343:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=a(54),v=l(h),_=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={note:{title:"Note",details:["这是一个简单的进阶教程：","1、“2D幻灯-JS”是一个很常规的JS代码；","2、“3D幻灯-CSS”在CSS3 animation的基础上，使用了CSS3 transform 3D变换；","3、“3D幻灯-JS”中改为由JS控制六面体的3D变换（根据鼠标位置相应地转动）；","4、该SPA所有图片均来自网络，版权归原作者所有。","5、为获得较好的视觉体验，请使用新版Chrome浏览器查看该SPA。"]}},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"render",value:function(){var t=this.state.note.details.map(function(t){return p["default"].createElement("li",{className:"li",key:v["default"].v4()},t)});return p["default"].createElement("div",{className:"note"},p["default"].createElement("div",{className:"inner"},p["default"].createElement("section",{className:"section"},p["default"].createElement("h3",{className:"title"},this.state.note.title),p["default"].createElement("ul",{className:"ul"},t))))}}]),e}(p["default"].Component);e["default"]=_},344:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=a(54),v=l(h),_=a(265),x=l(_),j=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.showPic=function(t){console.log(t),a.setState({curIndex:t})},a.state={timer:null,curIndex:0,images16:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""}]},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){var t=this,e=this.state.images16.map(function(e){return p["default"].createElement("li",{className:"photo",key:v["default"].v4(),style:{display:t.isCurIndexPicture(e.url)?"block":"none"}},p["default"].createElement("img",{className:"photo-img",src:e.url,alt:e.title}))}),a=this.state.images16.map(function(e,a){return p["default"].createElement("div",{key:v["default"].v4(),className:(0,x["default"])({point:!0,scale:t.isCurIndexPicture(e.url)}),style:{backgroundImage:"url("+e.url+")"},onMouseEnter:function(){return t.showPic(a)}})});return p["default"].createElement("div",{className:"slider-2d-js"},p["default"].createElement("section",{onMouseEnter:this.stopInterval.bind(this),onMouseLeave:this.startInterval.bind(this),className:"gallery"},p["default"].createElement("ul",{className:"photos"},e),p["default"].createElement("aside",{onClick:this.showPrevPic.bind(this),className:"arr arr-left"},p["default"].createElement("i",{className:"fa fa-chevron-left"})),p["default"].createElement("aside",{onClick:this.showNextPic.bind(this),className:"arr arr-right"},p["default"].createElement("i",{className:"fa fa-chevron-right"})),p["default"].createElement("footer",{className:"points"},a)))}},{key:"isCurIndexPicture",value:function(t){var e=t.match(/\/(\d*)\.jpg/)[0].replace(/\/(\d*)\.jpg/,"$1");return parseInt(e)===parseInt(this.state.curIndex)+1}},{key:"startInterval",value:function(){var t=this;this.setState({timer:setInterval(function(){t.showNextPic()},2e3)})}},{key:"stopInterval",value:function(){this.state.timer&&clearInterval(this.state.timer)}},{key:"showPrevPic",value:function(){0===this.state.curIndex?this.setState({curIndex:this.state.images16.length-1}):this.setState({curIndex:this.state.curIndex-1})}},{key:"showNextPic",value:function(){this.state.curIndex===this.state.images16.length-1?this.setState({curIndex:0}):this.setState({curIndex:this.state.curIndex+1})}}]),e}(p["default"].Component);e["default"]=j},345:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(24),n=l(r),i=a(25),s=l(i),u=a(26),c=l(u),o=a(28),d=l(o),m=a(27),f=l(m),g=a(4),p=l(g),h=a(54),v=l(h),_=function(t){function e(t){(0,s["default"])(this,e);var a=(0,d["default"])(this,(e.__proto__||(0,n["default"])(e)).call(this,t));return a.state={images24:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""},{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""}]},a}return(0,f["default"])(e,t),(0,c["default"])(e,[{key:"render",value:function(){for(var t=[],e=0;e<6;e++)t.push([this.state.images24[4*e],this.state.images24[4*e+1],this.state.images24[4*e+2],this.state.images24[4*e+3]]);var a=t.map(function(t){return p["default"].createElement("li",{className:"stage-cover",key:v["default"].v4()},p["default"].createElement("ul",{className:"container-cover"},t.map(function(t){return p["default"].createElement("li",{className:"stage-pic",key:v["default"].v4()},p["default"].createElement("div",{className:"container-pic"},p["default"].createElement("img",{src:t.url,alt:t.title,className:"img"})))})))});return p["default"].createElement("div",{className:"slider-3d-css"},"// stage for 六面体整体",p["default"].createElement("div",{className:"stage-whole"},p["default"].createElement("ul",{className:"container-whole"},a)))}}]),e}(p["default"].Component);e["default"]=_},346:function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(339),n=l(r),i=a(24),s=l(i),u=a(25),c=l(u),o=a(26),d=l(o),m=a(28),f=l(m),g=a(27),p=l(g),h=a(4),v=l(h),_=a(54),x=l(_),j=a(168),E=l(j),N=function(t){function e(t){(0,c["default"])(this,e);var a=(0,f["default"])(this,(e.__proto__||(0,s["default"])(e)).call(this,t));return a.getMousePosition=function(t){return{x:t.pageX||t.clientX+document.body.scrollLeft,y:t.pageY||t.clientY+document.body.scrollTop}},a.transform=function(t){(0,E["default"])(".container-whole").css({transform:t})},a.startTransform=function(t,e){e=parseInt(e);var l=(0,E["default"])(".container-whole").get(0).style.webkitTransform||"rotateX(0deg) rotateY(0deg) rotateZ(0deg)",r=parseInt(l.replace(/^rotateX\((-?\d*)deg\).*$/,"$1")),n=parseInt(l.replace(/^.*rotateY\((-?\d*)deg\).*$/,"$1")),i=parseInt(l.replace(/^.*rotateZ\((-?\d*)deg\).*$/,"$1"));switch(a.setState({rotateX:r,rotateY:n,rotateZ:i}),t){case"up":l="rotateX("+(r+e)+"deg) rotateY("+n+"deg) rotateZ("+i+"deg)";break;case"down":l="rotateX("+(r-e)+"deg) rotateY("+n+"deg) rotateZ("+i+"deg)";break;case"right":l="rotateX("+r+"deg) rotateY("+(n+e)+"deg) rotateZ("+i+"deg)";break;case"left":l="rotateX("+r+"deg) rotateY("+(n-e)+"deg) rotateZ("+i+"deg)";break;case"scroll":default:l="rotateX("+r+"deg) rotateY("+n+"deg) rotateZ("+(i+e)+"deg)"}a.transform(l)},a.cool=function(t,e,l){function r(t){return t=parseInt(t),{yUp:l/e*t-l,yDown:-(l/e)*t}}var n=(0,E["default"])(t.target||t.srcElement),i=a.getMousePosition(t),s=i.x,u=0-i.y,c=n.offset().left,o=0-n.offset().top;s-=c,u-=o;var d=r(s).yUp,m=r(s).yDown,f=parseInt(Math.sqrt(Math.pow(s-.5*e,2)+Math.pow(u+.5*l,2))),g=1;f<80?a.startTransform("scroll",g):u>d?u>m?a.startTransform("up",g):a.startTransform("left",g):u>m?a.startTransform("right",g):a.startTransform("down",g)},a.state={timer:null,rotateX:0,rotateY:0,rotateZ:0,images24:[{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""},{url:"./static/img/near_1200x800/09.jpg",title:""},{url:"./static/img/near_1200x800/10.jpg",title:""},{url:"./static/img/near_1200x800/11.jpg",title:""},{url:"./static/img/near_1200x800/12.jpg",title:""},{url:"./static/img/near_1200x800/13.jpg",title:""},{url:"./static/img/near_1200x800/14.jpg",title:""},{url:"./static/img/near_1200x800/15.jpg",title:""},{url:"./static/img/near_1200x800/16.jpg",title:""},{url:"./static/img/near_1200x800/01.jpg",title:""},{url:"./static/img/near_1200x800/02.jpg",title:""},{url:"./static/img/near_1200x800/03.jpg",title:""},{url:"./static/img/near_1200x800/04.jpg",title:""},{url:"./static/img/near_1200x800/05.jpg",title:""},{url:"./static/img/near_1200x800/06.jpg",title:""},{url:"./static/img/near_1200x800/07.jpg",title:""},{url:"./static/img/near_1200x800/08.jpg",title:""}]},a}return(0,p["default"])(e,t),(0,d["default"])(e,[{key:"componentWillUnmount",value:function(){this.stopInterval()}},{key:"render",value:function(){for(var t=this,e=[],a=0;a<6;a++)e.push([this.state.images24[4*a],this.state.images24[4*a+1],this.state.images24[4*a+2],this.state.images24[4*a+3]]);var l=e.map(function(e){return v["default"].createElement("li",{className:"stage-cover",key:x["default"].v4()},v["default"].createElement("ul",{onMouseMove:t.startInterval.bind(t),onMouseLeave:t.stopInterval.bind(t),className:"container-cover"},e.map(function(t){return v["default"].createElement("li",{className:"stage-pic",key:x["default"].v4()},v["default"].createElement("div",{className:"container-pic"},v["default"].createElement("img",{src:t.url,alt:t.title,className:"img"})))})))});return v["default"].createElement("div",{className:"slider-3d-js"},v["default"].createElement("div",{className:"slider"},v["default"].createElement("div",{className:"stage-whole"},v["default"].createElement("ul",{className:"container-whole"},l))),v["default"].createElement("aside",{className:"controls"},v["default"].createElement("ul",{className:"ul"},v["default"].createElement("li",{className:"li"},v["default"].createElement("label",{htmlFor:"rotateX",className:"label"},"RotateX"),v["default"].createElement("input",{onChange:this.rotate.bind(this,"rotateX"),type:"number",id:"rotateX",className:"input",value:this.state.rotateX})),v["default"].createElement("li",{className:"li"},v["default"].createElement("label",{htmlFor:"rotateY",className:"label"},"RotateY"),v["default"].createElement("input",{onChange:this.rotate.bind(this,"rotateY"),type:"number",id:"rotateY",className:"input",value:this.state.rotateY})),v["default"].createElement("li",{className:"li"},v["default"].createElement("label",{htmlFor:"rotateZ",className:"label"},"RotateZ"),v["default"].createElement("input",{onChange:this.rotate.bind(this,"rotateZ"),type:"number",id:"rotateZ",className:"input",value:this.state.rotateZ})))))}},{key:"rotate",value:function(t,e){var a=this;this.setState((0,n["default"])({},t,(e.target||e.srcElement).value),function(){(0,E["default"])(".container-whole").css({transform:"rotateX("+a.state.rotateX+"deg) rotateY("+a.state.rotateY+"deg) rotateZ("+a.state.rotateZ+"deg)"})})}},{key:"startInterval",value:function(t){t.persist();var e=(0,E["default"])(t.target).width(),a=(0,E["default"])(t.target).height();this.cool(t,e,a)}},{key:"stopInterval",value:function(){this.state.timer&&clearInterval(this.state.timer)}}]),e}(v["default"].Component);e["default"]=N},347:function(t,e){}});