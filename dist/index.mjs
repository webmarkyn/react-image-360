import A,{useEffect as k}from"react";import{useEffect as g,useRef as I,useState as S}from"react";function n(){var l="/Users/mark/my/react-image-360/src/hooks.ts",i="4befbb8b1d70f7c614f3479c2bc6a82ae912740a",o=new Function("return this")(),c="__coverage__",s={path:"/Users/mark/my/react-image-360/src/hooks.ts",statementMap:{0:{start:{line:13,column:33},end:{line:112,column:1}},1:{start:{line:19,column:50},end:{line:19,column:77}},2:{start:{line:20,column:24},end:{line:20,column:59}},3:{start:{line:21,column:14},end:{line:21,column:42}},4:{start:{line:23,column:2},end:{line:25,column:26}},5:{start:{line:24,column:4},end:{line:24,column:43}},6:{start:{line:27,column:34},end:{line:32,column:3}},7:{start:{line:28,column:4},end:{line:31,column:5}},8:{start:{line:29,column:6},end:{line:29,column:43}},9:{start:{line:30,column:6},end:{line:30,column:35}},10:{start:{line:34,column:2},end:{line:46,column:32}},11:{start:{line:35,column:4},end:{line:42,column:5}},12:{start:{line:36,column:6},end:{line:41,column:37}},13:{start:{line:37,column:8},end:{line:40,column:11}},14:{start:{line:38,column:28},end:{line:38,column:41}},15:{start:{line:39,column:10},end:{line:39,column:57}},16:{start:{line:43,column:4},end:{line:43,column:55}},17:{start:{line:43,column:29},end:{line:43,column:55}},18:{start:{line:45,column:4},end:{line:45,column:43}},19:{start:{line:45,column:17},end:{line:45,column:42}},20:{start:{line:48,column:2},end:{line:106,column:41}},21:{start:{line:49,column:19},end:{line:49,column:48}},22:{start:{line:50,column:27},end:{line:50,column:28}},23:{start:{line:52,column:33},end:{line:54,column:5}},24:{start:{line:53,column:6},end:{line:53,column:77}},25:{start:{line:53,column:37},end:{line:53,column:74}},26:{start:{line:56,column:33},end:{line:58,column:5}},27:{start:{line:57,column:6},end:{line:57,column:77}},28:{start:{line:57,column:37},end:{line:57,column:74}},29:{start:{line:60,column:26},end:{line:66,column:5}},30:{start:{line:61,column:6},end:{line:65,column:7}},31:{start:{line:62,column:8},end:{line:62,column:31}},32:{start:{line:63,column:13},end:{line:65,column:7}},33:{start:{line:64,column:8},end:{line:64,column:31}},34:{start:{line:68,column:30},end:{line:80,column:5}},35:{start:{line:69,column:30},end:{line:69,column:59}},36:{start:{line:71,column:6},end:{line:74,column:7}},37:{start:{line:72,column:8},end:{line:72,column:66}},38:{start:{line:73,column:8},end:{line:73,column:31}},39:{start:{line:76,column:6},end:{line:79,column:7}},40:{start:{line:77,column:8},end:{line:77,column:66}},41:{start:{line:78,column:8},end:{line:78,column:31}},42:{start:{line:82,column:28},end:{line:85,column:5}},43:{start:{line:83,column:6},end:{line:83,column:67}},44:{start:{line:84,column:6},end:{line:84,column:63}},45:{start:{line:87,column:30},end:{line:95,column:5}},46:{start:{line:88,column:6},end:{line:90,column:7}},47:{start:{line:89,column:8},end:{line:89,column:15}},48:{start:{line:92,column:6},end:{line:92,column:36}},49:{start:{line:93,column:6},end:{line:93,column:83}},50:{start:{line:94,column:6},end:{line:94,column:79}},51:{start:{line:97,column:4},end:{line:97,column:73}},52:{start:{line:98,column:4},end:{line:98,column:81}},53:{start:{line:100,column:4},end:{line:105,column:6}},54:{start:{line:101,column:6},end:{line:101,column:78}},55:{start:{line:102,column:6},end:{line:102,column:86}},56:{start:{line:103,column:6},end:{line:103,column:63}},57:{start:{line:104,column:6},end:{line:104,column:67}},58:{start:{line:108,column:2},end:{line:111,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:13,column:33},end:{line:13,column:34}},loc:{start:{line:18,column:30},end:{line:112,column:1}},line:18},1:{name:"(anonymous_1)",decl:{start:{line:23,column:12},end:{line:23,column:13}},loc:{start:{line:23,column:18},end:{line:25,column:3}},line:23},2:{name:"(anonymous_2)",decl:{start:{line:27,column:34},end:{line:27,column:35}},loc:{start:{line:27,column:40},end:{line:32,column:3}},line:27},3:{name:"(anonymous_3)",decl:{start:{line:34,column:12},end:{line:34,column:13}},loc:{start:{line:34,column:18},end:{line:46,column:3}},line:34},4:{name:"(anonymous_4)",decl:{start:{line:36,column:42},end:{line:36,column:43}},loc:{start:{line:36,column:48},end:{line:41,column:7}},line:36},5:{name:"(anonymous_5)",decl:{start:{line:37,column:28},end:{line:37,column:29}},loc:{start:{line:37,column:43},end:{line:40,column:9}},line:37},6:{name:"(anonymous_6)",decl:{start:{line:45,column:11},end:{line:45,column:12}},loc:{start:{line:45,column:17},end:{line:45,column:42}},line:45},7:{name:"(anonymous_7)",decl:{start:{line:48,column:12},end:{line:48,column:13}},loc:{start:{line:48,column:18},end:{line:106,column:3}},line:48},8:{name:"(anonymous_8)",decl:{start:{line:52,column:33},end:{line:52,column:34}},loc:{start:{line:52,column:39},end:{line:54,column:5}},line:52},9:{name:"(anonymous_9)",decl:{start:{line:53,column:26},end:{line:53,column:27}},loc:{start:{line:53,column:37},end:{line:53,column:74}},line:53},10:{name:"(anonymous_10)",decl:{start:{line:56,column:33},end:{line:56,column:34}},loc:{start:{line:56,column:39},end:{line:58,column:5}},line:56},11:{name:"(anonymous_11)",decl:{start:{line:57,column:26},end:{line:57,column:27}},loc:{start:{line:57,column:37},end:{line:57,column:74}},line:57},12:{name:"(anonymous_12)",decl:{start:{line:60,column:26},end:{line:60,column:27}},loc:{start:{line:60,column:49},end:{line:66,column:5}},line:60},13:{name:"(anonymous_13)",decl:{start:{line:68,column:30},end:{line:68,column:31}},loc:{start:{line:68,column:52},end:{line:80,column:5}},line:68},14:{name:"(anonymous_14)",decl:{start:{line:82,column:28},end:{line:82,column:29}},loc:{start:{line:82,column:34},end:{line:85,column:5}},line:82},15:{name:"(anonymous_15)",decl:{start:{line:87,column:30},end:{line:87,column:31}},loc:{start:{line:87,column:52},end:{line:95,column:5}},line:87},16:{name:"(anonymous_16)",decl:{start:{line:100,column:11},end:{line:100,column:12}},loc:{start:{line:100,column:17},end:{line:105,column:5}},line:100}},branchMap:{0:{loc:{start:{line:28,column:4},end:{line:31,column:5}},type:"if",locations:[{start:{line:28,column:4},end:{line:31,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:28},1:{loc:{start:{line:35,column:4},end:{line:42,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:42,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:35},2:{loc:{start:{line:35,column:8},end:{line:35,column:54}},type:"binary-expr",locations:[{start:{line:35,column:8},end:{line:35,column:28}},{start:{line:35,column:32},end:{line:35,column:54}}],line:35},3:{loc:{start:{line:39,column:17},end:{line:39,column:56}},type:"cond-expr",locations:[{start:{line:39,column:43},end:{line:39,column:44}},{start:{line:39,column:47},end:{line:39,column:56}}],line:39},4:{loc:{start:{line:41,column:9},end:{line:41,column:35}},type:"binary-expr",locations:[{start:{line:41,column:9},end:{line:41,column:28}},{start:{line:41,column:32},end:{line:41,column:35}}],line:41},5:{loc:{start:{line:43,column:4},end:{line:43,column:55}},type:"if",locations:[{start:{line:43,column:4},end:{line:43,column:55}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:43},6:{loc:{start:{line:53,column:37},end:{line:53,column:74}},type:"cond-expr",locations:[{start:{line:53,column:62},end:{line:53,column:63}},{start:{line:53,column:66},end:{line:53,column:74}}],line:53},7:{loc:{start:{line:57,column:37},end:{line:57,column:74}},type:"cond-expr",locations:[{start:{line:57,column:52},end:{line:57,column:63}},{start:{line:57,column:66},end:{line:57,column:74}}],line:57},8:{loc:{start:{line:61,column:6},end:{line:65,column:7}},type:"if",locations:[{start:{line:61,column:6},end:{line:65,column:7}},{start:{line:63,column:13},end:{line:65,column:7}}],line:61},9:{loc:{start:{line:63,column:13},end:{line:65,column:7}},type:"if",locations:[{start:{line:63,column:13},end:{line:65,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:63},10:{loc:{start:{line:71,column:6},end:{line:74,column:7}},type:"if",locations:[{start:{line:71,column:6},end:{line:74,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:71},11:{loc:{start:{line:76,column:6},end:{line:79,column:7}},type:"if",locations:[{start:{line:76,column:6},end:{line:79,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:76},12:{loc:{start:{line:88,column:6},end:{line:90,column:7}},type:"if",locations:[{start:{line:88,column:6},end:{line:90,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:88}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4befbb8b1d70f7c614f3479c2bc6a82ae912740a"},t=o[c]||(o[c]={});(!t[l]||t[l].hash!==i)&&(t[l]=s);var u=t[l];return n=function(){return u},u}n();n().s[0]++;var M=({initialImageIndex:l,imagesCount:i,movementSensitivity:o,autoRotate:c})=>{n().f[0]++;let[s,t]=(n().s[1]++,S(l)),u=(n().s[2]++,I(null)),b=(n().s[3]++,I(null));n().s[4]++,g(()=>{n().f[1]++,n().s[5]++,t(l)},[l]),n().s[6]++;let p=()=>{n().f[2]++,n().s[7]++,u.current?(n().b[0][0]++,n().s[8]++,clearInterval(u.current),n().s[9]++,u.current=null):n().b[0][1]++};return n().s[10]++,g(()=>(n().f[3]++,n().s[11]++,n().b[2][0]++,!c.disabled&&(n().b[2][1]++,!u.current)?(n().b[1][0]++,n().s[12]++,u.current=setInterval(()=>{n().f[4]++,n().s[13]++,t(m=>{n().f[5]++;let r=(n().s[14]++,m+1);return n().s[15]++,r>i?(n().b[3][0]++,0):(n().b[3][1]++,r)})},(n().b[4][0]++,c.interval||(n().b[4][1]++,200)))):n().b[1][1]++,n().s[16]++,c.disabled?(n().b[5][0]++,n().s[17]++,p()):n().b[5][1]++,n().s[18]++,()=>(n().f[6]++,n().s[19]++,p())),[c,i]),n().s[20]++,g(()=>{n().f[7]++;let m=(n().s[21]++,b.current),r=(n().s[22]++,0);n().s[23]++;let f=()=>{n().f[8]++,n().s[24]++,t(a=>(n().f[9]++,n().s[25]++,a+1>i?(n().b[6][0]++,0):(n().b[6][1]++,a+1)))};n().s[26]++;let d=()=>{n().f[10]++,n().s[27]++,t(a=>(n().f[11]++,n().s[28]++,a-1<0?(n().b[7][0]++,i):(n().b[7][1]++,a-1)))};n().s[29]++;let w=a=>{n().f[12]++,n().s[30]++,a.key==="ArrowLeft"?(n().b[8][0]++,n().s[31]++,d()):(n().b[8][1]++,n().s[32]++,a.key==="ArrowRight"?(n().b[9][0]++,n().s[33]++,f()):n().b[9][1]++)};n().s[34]++;let v=a=>{n().f[13]++;let E=(n().s[35]++,r-a.clientX);n().s[36]++,E<=-o?(n().b[10][0]++,n().s[37]++,r=r+o,n().s[38]++,f()):n().b[10][1]++,n().s[39]++,E>=o?(n().b[11][0]++,n().s[40]++,r=r-o,n().s[41]++,d()):n().b[11][1]++};n().s[42]++;let y=()=>{n().f[14]++,n().s[43]++,window.removeEventListener("pointermove",v),n().s[44]++,window.removeEventListener("pointerup",y)};n().s[45]++;let x=a=>{if(n().f[15]++,n().s[46]++,a.button==2){n().b[12][0]++,n().s[47]++;return}else n().b[12][1]++;n().s[48]++,r=a.clientX,n().s[49]++,window.addEventListener("pointermove",v,{passive:!0}),n().s[50]++,window.addEventListener("pointerup",y,{passive:!0})};return n().s[51]++,m.addEventListener("keydown",w,{capture:!0}),n().s[52]++,m.addEventListener("pointerdown",x,{capture:!0}),n().s[53]++,()=>{n().f[16]++,n().s[54]++,m.removeEventListener("keydown",w,{capture:!0}),n().s[55]++,m.removeEventListener("pointerdown",x,{capture:!0}),n().s[56]++,window.removeEventListener("pointerup",y),n().s[57]++,window.removeEventListener("pointermove",v)}},[i,o]),n().s[58]++,{ref:b,activeImageIndex:s}};function e(){var l="/Users/mark/my/react-image-360/src/ReactImageTurntable.tsx",i="21881504f58ac3300be2c0c54b9cb80b124eb48c",o=new Function("return this")(),c="__coverage__",s={path:"/Users/mark/my/react-image-360/src/ReactImageTurntable.tsx",statementMap:{0:{start:{line:8,column:30},end:{line:8,column:59}},1:{start:{line:10,column:38},end:{line:10,column:66}},2:{start:{line:12,column:40},end:{line:12,column:70}},3:{start:{line:14,column:21},end:{line:16,column:1}},4:{start:{line:22,column:27},end:{line:24,column:1}},5:{start:{line:23,column:2},end:{line:23,column:22}},6:{start:{line:26,column:69},end:{line:93,column:1}},7:{start:{line:36,column:36},end:{line:41,column:4}},8:{start:{line:43,column:35},end:{line:48,column:3}},9:{start:{line:50,column:2},end:{line:52,column:40}},10:{start:{line:51,column:4},end:{line:51,column:55}},11:{start:{line:51,column:23},end:{line:51,column:55}},12:{start:{line:54,column:2},end:{line:92,column:4}},13:{start:{line:68,column:8},end:{line:89,column:10}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:22,column:27},end:{line:22,column:28}},loc:{start:{line:22,column:65},end:{line:24,column:1}},line:22},1:{name:"(anonymous_1)",decl:{start:{line:26,column:69},end:{line:26,column:70}},loc:{start:{line:35,column:6},end:{line:93,column:1}},line:35},2:{name:"(anonymous_2)",decl:{start:{line:50,column:12},end:{line:50,column:13}},loc:{start:{line:50,column:18},end:{line:52,column:3}},line:50},3:{name:"(anonymous_3)",decl:{start:{line:67,column:18},end:{line:67,column:19}},loc:{start:{line:68,column:8},end:{line:89,column:10}},line:68}},branchMap:{0:{loc:{start:{line:28,column:2},end:{line:28,column:23}},type:"default-arg",locations:[{start:{line:28,column:22},end:{line:28,column:23}}],line:28},1:{loc:{start:{line:30,column:2},end:{line:30,column:14}},type:"default-arg",locations:[{start:{line:30,column:13},end:{line:30,column:14}}],line:30},2:{loc:{start:{line:31,column:2},end:{line:31,column:26}},type:"default-arg",locations:[{start:{line:31,column:24},end:{line:31,column:26}}],line:31},3:{loc:{start:{line:33,column:2},end:{line:33,column:34}},type:"default-arg",locations:[{start:{line:33,column:15},end:{line:33,column:34}}],line:33},4:{loc:{start:{line:51,column:4},end:{line:51,column:55}},type:"if",locations:[{start:{line:51,column:4},end:{line:51,column:55}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:51},5:{loc:{start:{line:71,column:12},end:{line:71,column:75}},type:"cond-expr",locations:[{start:{line:71,column:26},end:{line:71,column:48}},{start:{line:71,column:51},end:{line:71,column:75}}],line:71},6:{loc:{start:{line:79,column:22},end:{line:79,column:58}},type:"cond-expr",locations:[{start:{line:79,column:36},end:{line:79,column:45}},{start:{line:79,column:48},end:{line:79,column:58}}],line:79},7:{loc:{start:{line:80,column:21},end:{line:80,column:55}},type:"cond-expr",locations:[{start:{line:80,column:50},end:{line:80,column:51}},{start:{line:80,column:54},end:{line:80,column:55}}],line:80}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},f:{0:0,1:0,2:0,3:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"21881504f58ac3300be2c0c54b9cb80b124eb48c"},t=o[c]||(o[c]={});(!t[l]||t[l].hash!==i)&&(t[l]=s);var u=t[l];return e=function(){return u},u}e();function h(){return h=Object.assign?Object.assign.bind():function(l){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(l[c]=o[c])}return l},h.apply(this,arguments)}var _=(e().s[0]++,"__react-image-turntable-img"),D=(e().s[1]++,`${_}--primary`),R=(e().s[2]++,`${_}--secondary`),U=(e().s[3]++,{maxWidth:"100%"});e().s[4]++;var $=l=>{e().f[0]++,e().s[5]++,l.preventDefault()};e().s[6]++;var j=({images:l,initialImageIndex:i=(e().b[0][0]++,0),style:o,tabIndex:c=(e().b[1][0]++,0),movementSensitivity:s=(e().b[2][0]++,20),onIndexChange:t,autoRotate:u=(e().b[3][0]++,{disabled:!1}),...b})=>{e().f[1]++;let{ref:p,activeImageIndex:m}=(e().s[7]++,M({initialImageIndex:i,imagesCount:l.length-1,movementSensitivity:s,autoRotate:u})),r=(e().s[8]++,{position:"relative",touchAction:"none",userSelect:"none",...o});return e().s[9]++,k(()=>{e().f[2]++,e().s[10]++,t?(e().b[4][0]++,e().s[11]++,t(m)):e().b[4][1]++},[m,t]),e().s[12]++,A.createElement("div",h({"aria-label":"Image turntable"},b,{ref:p,role:"slider","aria-valuemin":1,"aria-valuemax":l.length,"aria-valuenow":m+1,"aria-valuetext":`${m+1} of ${l.length}`,style:r,tabIndex:c}),l.map((f,d)=>(e().f[3]++,e().s[13]++,A.createElement("img",{key:f,className:`${_} ${d===0?(e().b[5][0]++,D):(e().b[5][1]++,R)}`,src:f,alt:`Turntable image ${d+1}`,draggable:!1,onDragStart:$,style:{...U,position:d===0?(e().b[6][0]++,void 0):(e().b[6][1]++,"absolute"),opacity:d===m?(e().b[7][0]++,1):(e().b[7][1]++,0),left:0,top:0,right:0,bottom:0,width:"100%",height:"100%",objectFit:"cover"}}))))};function L(){var l="/Users/mark/my/react-image-360/src/index.ts",i="fba672bccb796ab120a0b03a14411bace95ef9e6",o=new Function("return this")(),c="__coverage__",s={path:"/Users/mark/my/react-image-360/src/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fba672bccb796ab120a0b03a14411bace95ef9e6"},t=o[c]||(o[c]={});(!t[l]||t[l].hash!==i)&&(t[l]=s);var u=t[l];return L=function(){return u},u}L();export{_ as CLASS_NAME_IMG,D as CLASS_NAME_IMG_PRIMARY,R as CLASS_NAME_IMG_SECONDARY,j as ReactImageTurntable};
//# sourceMappingURL=index.mjs.map