(this["webpackJsonpusgs-earthquake-visual"]=this["webpackJsonpusgs-earthquake-visual"]||[]).push([[0],{155:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),s=(a(98),a(62)),p=a.n(s),l=a(83),c=a(10),d=a(19),m=a(13),u=a(41),k=a(42),_=a(9),y=a(48),h=a(66),x=a(5),f=a(84),E=a.n(f),g=(a(155),a(156),a(157),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.leftPane,a=e.rightPane,n=e.totalNumber;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"left-to-right col-md-6"},t),r.a.createElement("div",{className:"counter"},r.a.createElement("h1",{className:"counter-text"},n)),r.a.createElement("div",{className:"col-md-6"},a))}}]),t}(n.Component));g.defaultProps={leftPane:{},rightPane:{},totalNumber:0};var v=g,b=(a(158),function(e){return r.a.createElement("div",{className:"card-holder"},e.children)}),S=(a(159),function(e){var t=e.detail,a=t.properties,n=a.mag,o=a.place,i=a.time,s=t.id,p=t.geometry.coordinates,l=e.onCardMouseOver;return r.a.createElement("div",{id:s,"data-key":s,className:"event-card",onClick:function(){return e.onCardClick(p)},onKeyDown:function(){return e.onCardClick},onFocus:function(){},onMouseOver:function(e){return l(e)},role:"button",tabIndex:0},r.a.createElement("div",{key:s,className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,new Date(i).toLocaleString("se-SV"))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,o)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"magnitude",style:{height:"".concat(10*n,"px"),width:"".concat(10*n,"px")}},r.a.createElement("p",{className:"magnitude-text",style:{transform:"translate(0px, ".concat(10+Math.ceil(n/2),"px)")}},n)))))});S.defaultProps={detail:null,onCardMouseOver:function(){},onCardClick:function(){}};var D=S,C=a(85),O=a(184),j=a(88),M=a(186),w=a(163),H=a(187),A=a(164),B=a(190),P=Object(O.a)((function(e){return{root1:{width:300,zIndex:1001},root:{display:"fixed","& > *":{margin:e.spacing(2)}}}})),V=Object(j.a)({typography:{h5:{fontSize:18,fontWeight:500,fontStyle:"bold",fontFamily:"times new roman"}}});var L=function(e,t){var a=new Date,n=new Date;return a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0),n.setHours(23),n.setMinutes(59),n.setSeconds(59),n.setMilliseconds(999),a.setDate(a.getDate()+(e-180)),n.setDate(n.getDate()+(t-180)),[a,n]};function N(e){var t=P(),a=r.a.useState([0,180]),n=Object(c.a)(a,2),o=n[0],i=n[1],s=function(t){var a=Object(c.a)(t,2),n=a[0],r=a[1],o=L(n,r),i=Object(c.a)(o,2),s=i[0],p=i[1];e.onSliderChange([s.toISOString(),p.toISOString()])};function p(e){1===e&&(i([150,180]),s([150,180])),2===e&&(i([120,180]),s([120,180])),3===e&&(i([90,180]),s([90,180]))}return r.a.createElement("div",{className:t.root1},r.a.createElement(M.a,{theme:V},r.a.createElement("div",{className:t.root},r.a.createElement(H.a,{size:"small","aria-label":"small outlined button group",variant:"contained",color:"primary"},r.a.createElement(w.a,{onClick:function(){return p(1)}},"1 Month"),r.a.createElement(w.a,{onClick:function(){return p(2)}},"2 Months"),r.a.createElement(w.a,{onClick:function(){return p(3)}},"3 Months"))),r.a.createElement(A.a,{id:"range-slider",variant:"h6"},function(e){if(JSON.stringify(e)!==JSON.stringify([0,180])){var t=Object(c.a)(e,2),a=t[0],n=t[1],r=L(a,n),o=Object(c.a)(r,2),i=o[0],s=o[1];return"".concat(i.toLocaleString()," - ").concat(s.toLocaleString())}return"Data for the last six months"}(o))),r.a.createElement(B.a,{max:180,min:0,value:o,onChangeCommitted:function(){return s(o)},onChange:function(e,t){return function(e,t){i(t)}(0,t)},valueLabelDisplay:"auto",valueLabelFormat:function(e){return function(e){var t=e-180;return 0===t?"Today":"".concat(t)}(e)},"aria-labelledby":"range-slider",getAriaValueText:function(e){return function(e){return"".concat(e+10)}(e)}}))}var F=a(15),G=a(87),I=a(192),Z=a(188),q=a(191),T=a(189);function R(e){var t,a=r.a.useState({checked:!0}),n=Object(c.a)(a,2),o=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(q.a,{component:"fieldset"},r.a.createElement(Z.a,{"aria-label":"position",row:!0},r.a.createElement(T.a,{value:"start",control:r.a.createElement(I.a,{checked:o.checked,onChange:(t="checked",function(a){i(Object(G.a)({},o,Object(F.a)({},t,a.target.checked))),e.onSwitcherChanged(o.checked)}),value:"checked",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),label:"Search as I move the map",labelPlacement:"start"}))))}R.defaultProps={onSwitcherChanged:function(){}};var Q=Object(h.b)({accessToken:"pk.eyJ1IjoicmFnZWFnYWluc3R0aGVtYWNoaW5lIiwiYSI6ImNqcjh1dXAzZzBhNm40NWw4M2owMTA5aHMifQ.Bk987UmMmjAQbboX2PAHwA"}),W=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(k.a)(t).call(this,e))).state={geojsonLayer:null,startDate:null,endDate:null,mapCenter:[36,37.5],mapZoom:[10],geojsonData:null,dragSearch:!0,bounds:void 0},a.mapRef=r.a.createRef(),a.hashCode=function(e){return e.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0)},a.requestMaker=a.requestMaker.bind(Object(_.a)(a)),a.markerGenerator=a.markerGenerator.bind(Object(_.a)(a)),a.onCardMouseOver=a.onCardMouseOver.bind(Object(_.a)(a)),a.onDragEndHandler=a.onDragEndHandler.bind(Object(_.a)(a)),a.onZoomEndHandler=a.onZoomEndHandler.bind(Object(_.a)(a)),a.cardClickHandler=a.cardClickHandler.bind(Object(_.a)(a)),a.onStyleLoadHandler=a.onStyleLoadHandler.bind(Object(_.a)(a)),a.sliderChangeHandler=a.sliderChangeHandler.bind(Object(_.a)(a)),a.earthQuakeHoverHandler=a.earthQuakeHoverHandler.bind(Object(_.a)(a)),a.defaultOptions={loop:!0,autoplay:!0,animationData:C,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=new Date,t=new Date;e.setMonth(t.getMonth()-6),e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),t.setHours(23),t.setMinutes(59),t.setSeconds(59),t.setMilliseconds(999),t=t.toISOString(),e=e.toISOString(),this.setState({startDate:e,endDate:t})}},{key:"componentDidMount",value:function(){this.requestMaker(this.mapRef,this.state.startDate,this.state.endDate)}},{key:"onZoomEndHandler",value:function(e){var t=e.getCenter(),a=t.lat,n=t.lng,r=e.getZoom();this.setState({mapCenter:[n,a],mapZoom:[r]}),this.requestMaker(this.mapRef,this.state.startDate,this.state.endDate)}},{key:"onDragEndHandler",value:function(e){var t=e.getCenter(),a=t.lat,n=t.lng,r=e.getZoom();this.setState({mapCenter:[n,a],mapZoom:[r]}),this.requestMaker(this.mapRef,this.state.startDate,this.state.endDate)}},{key:"onStyleLoadHandler",value:function(e){this.requestMaker(e,this.state.startDate,this.state.endDate)}},{key:"onCardMouseOver",value:function(e){var t=e.target.id;t&&this.mapRef.state.map.setFeatureState({source:"mygeolayer",id:t},{hover:!0})}},{key:"switcherChangeHandler",value:function(e){this.setState({dragSearch:!e})}},{key:"cardClickHandler",value:function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];this.setState({mapCenter:[a,n],mapZoom:[10]})}},{key:"sliderChangeHandler",value:function(e){var t=this,a=Object(c.a)(e,2),n=a[0],r=a[1];this.state.startDate===n&&this.state.endDate===r||this.setState({startDate:n,endDate:r},(function(){return t.requestMaker(t.mapRef,t.state.startDate,t.state.endDate)}))}},{key:"earthQuakeHoverHandler",value:function(e){if("mouseenter"===e.type)this.setState({hoveredEQId:this.hashCode(e.features[0].properties.net+e.features[0].properties.code)}),document.getElementById(this.state.hoveredEQId).style.setProperty("box-shadow","10px 10px 5px black");else if("mouseleave"===e.type){document.getElementById(this.state.hoveredEQId).style.removeProperty("box-shadow")}}},{key:"requestMaker",value:function(){var e=Object(l.a)(p.a.mark((function e(t,a,n){var r,o,i,s,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.state||!t.state.ready){e.next=11;break}return this.state.dragSearch?(r=t.state.map.getBounds(),this.setState({bounds:r})):r=this.state.bounds,o="starttime=".concat(a,"&endtime=").concat(n,"&minlatitude=").concat(r._sw.lat,"&maxlatitude=").concat(r._ne.lat,"&minlongitude=").concat(r._sw.lng,"&maxlongitude=").concat(r._ne.lng),i="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&".concat(o),e.next=6,fetch(i);case 6:return s=e.sent,e.next=9,s.json();case 9:l=e.sent,this.markerGenerator(l);case 11:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"markerGenerator",value:function(e){x.SymbolLayout={"text-field":"{place}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"};var t=x.SymbolLayout;x.SymbolPaint={"text-color":"black"};var a=x.SymbolPaint;x.CircleLayout={visibility:"visible"};var n=x.CircleLayout;x.CirclePaint={"circle-color":["case",["boolean",["feature-state","hover"],!1],"rgba(0, 0, 255, 0.8)","rgba(255, 0, 0, 0.3)"],"circle-radius":["interpolate",["linear"],["zoom"],0,["get","mag"],22,["*",10,["get","mag"]]]};for(var o=x.CirclePaint,i={type:"FeatureCollection",features:[]},s=0;s<e.features.length;s+=1)i.features.push(e.features[s]),i.features[s].id=this.hashCode(e.features[s].id);this.setState({geojsonLayer:r.a.createElement(h.a,{id:"mygeolayer",source:"mygeolayer",key:"GeoJSONLayerKey",data:i,symbolLayout:t,symbolPaint:a,circleLayout:n,circlePaint:o,circleOnMouseEnter:this.earthQuakeHoverHandler,circleOnMouseLeave:this.earthQuakeHoverHandler}),geojsonData:e})}},{key:"render",value:function(){var e=this,t=null;return this.state.geojsonData&&(t=this.state.geojsonData.features.map((function(t){return r.a.createElement(D,{onCardMouseOver:e.onCardMouseOver,onCardMouseOut:e.onCard,detail:t,onCardClick:e.cardClickHandler,key:Math.ceil(1e7*Math.random())})}))),r.a.createElement(v,{totalNumber:this.state.geojsonData?this.state.geojsonData.features.length:0,leftPane:this.state.geojsonData?r.a.createElement(b,null,t):r.a.createElement(E.a,{options:this.defaultOptions,height:400,width:400,isStopped:!1,isPaused:!1}),rightPane:r.a.createElement("div",null,r.a.createElement("div",{className:"slider"},r.a.createElement(N,{onSliderChange:this.sliderChangeHandler})),r.a.createElement("div",{className:"switcher"},r.a.createElement(R,{onSwitcherChanged:function(t){return e.switcherChangeHandler(t)}})),r.a.createElement(Q,{onStyleLoad:function(){return e.onStyleLoadHandler(e.mapRef)},ref:function(t){e.mapRef=t},style:"mapbox://styles/mapbox/streets-v9",center:this.state.mapCenter,zoom:this.state.mapZoom,containerStyle:{height:"100vh",width:"50vw"},onDragEnd:this.onDragEndHandler,onZoomEnd:this.onZoomEndHandler},this.state.geojsonLayer))})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e){e.exports=JSON.parse('{"v":"4.6.8","fr":29.9700012207031,"ip":0,"op":69.0000028104276,"w":256,"h":256,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Glow ball","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[360]},{"t":69.0000028104276}]},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":0,"k":[132,132,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":0,"k":[0.1635217,0.8509804,0.8105415,1]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 8","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":315},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":56,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":59,"s":[145,145,100],"e":[132,132,100]},{"t":63.0000025660426}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":62,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":69.0000028104276}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 7","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":270},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":48,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":51,"s":[145,145,100],"e":[132,132,100]},{"t":55.0000022401959}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.6745098,0.8431373,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":47,"s":[0.1647059,0.6745098,0.8431373,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":58,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":69.0000028104276}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 6","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":225},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":39,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":42,"s":[145,145,100],"e":[132,132,100]},{"t":46.0000018736184}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":37,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":43,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":48.0000019550801}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":180},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":31,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":34,"s":[145,145,100],"e":[132,132,100]},{"t":38.0000015477717}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":26,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":38,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":42.0000017106951}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":135},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":23,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":26,"s":[145,145,100],"e":[132,132,100]},{"t":30.0000012219251}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":30,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":38.0000015477717}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":90},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":14,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":17,"s":[145,145,100],"e":[132,132,100]},{"t":21.0000008553475}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":22,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":28.0000011404634}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":45},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":7,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":10,"s":[145,145,100],"e":[132,132,100]},{"t":14.0000005702317}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":16,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":22.0000008960784}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[127.984,127.969,0]},"a":{"a":0,"k":[-0.182,32.385,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[132,132,100],"e":[145,145,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":3,"s":[145,145,100],"e":[132,132,100]},{"t":7.00000028511585}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.125,14.125]},"p":{"a":0,"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.1647059,0.6313726,0.8509804,1],"e":[0.1647059,0.8509804,0.8117647,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":5,"s":[0.1647059,0.8509804,0.8117647,1],"e":[0.1647059,0.6313726,0.8509804,1]},{"t":16.0000006516934}]},"o":{"a":0,"k":100},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[-0.063,1.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":300.00001221925,"st":0,"bm":0,"sr":1}]}')},93:function(e,t,a){e.exports=a(161)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.b1fac758.chunk.js.map