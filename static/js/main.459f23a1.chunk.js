(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/main-logo.dfe0d73a.png"},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(20),r=a.n(l),i=(a(30),a(31),a(6)),c=a(5),o=a(24),u=a(7),m=a(8),d=a(10),h=a(9),p=a(11),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={existingArray:[7e3,7001,7002,7003,7004,7005],finalArray:[],duplicatesArray:[],userValues:[]},a.filterRange=function(){var e=document.getElementById("range").value.trim(),t=[],n=[];if(""!==e){var s=e.split(",");a.setState({userValues:e.split(",")}),s.forEach(function(e){if(-1===e.indexOf("-"))-1===a.state.existingArray.indexOf(Number(e))?a.addToFinalArray(t,Number(e)):a.addToDuplicatesArray(n,Number(e));else for(var s=e.split("-")[0],l=e.split("-")[1],r=s;r<=l;r++)-1===a.state.existingArray.indexOf(Number(r))?a.addToFinalArray(t,Number(r)):a.addToDuplicatesArray(n,Number(r))}),a.setState({finalArray:t,duplicatesArray:n})}},a.allowNumerals=function(e){/[0-9,\s-]/.test(e.key)||e.preventDefault()},a.addToFinalArray=function(e,t){-1===e.indexOf(t)&&e.push(t)},a.addToDuplicatesArray=function(e,t){-1===e.indexOf(t)&&e.push(t)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-1"},s.a.createElement("nav",{className:"nav-1"},s.a.createElement(i.b,{to:"/",className:"nav-link"}," ",s.a.createElement("span",null,"\u2190")," Go Back")),s.a.createElement("main",null,s.a.createElement("div",{className:"card"},s.a.createElement("h3",null," Problem Statement"),s.a.createElement("p",null,"Create a text input that accepts single, multiple and even a range of numbers and matches the entered numbers with an already existing array and shows the duplicates, if any, and the final list of unique numbers."),s.a.createElement("p",null,"Eg inputs -> 7000, 6000, 8000-8005."),s.a.createElement("p",null,"If a range is entered, or multiple ranges are entered, all the numbers falling between that range/those ranges have to be considered, matched and displayed."),s.a.createElement("p",null,"So to sum it up, if I have an existing array of [7000,7001,7002,7003,7004,7005] in the script and in the text input I enter 6998-7003, I should be notified that 7000, 7001, 7002, 7003 are duplicates and will be skipped, with the final list of new additions (2 in this case).")),s.a.createElement("div",{className:"solution"},s.a.createElement("input",{type:"text",name:"range",id:"range",onKeyPress:this.allowNumerals}),s.a.createElement("button",{onClick:this.filterRange},"Filter"),this.state.userValues.length>0&&s.a.createElement("div",null,"Existing Values: ",this.state.existingArray.join(", ")),this.state.userValues.length>0&&s.a.createElement("div",null,"Newly added Values:"," ",this.state.finalArray.length>0?this.state.finalArray.join(", "):"No Unique Values found"," "),this.state.userValues.length>0&&s.a.createElement("div",null,"Duplicate Values:"," ",this.state.duplicatesArray.length>0?this.state.duplicatesArray.join(", "):"No Duplicate Values found"),this.state.userValues.length>0&&s.a.createElement("div",null,"Final Unique Values:"," ",this.state.finalArray.length>0?[].concat(Object(o.a)(this.state.existingArray),[this.state.finalArray]).join(", "):"No Unique Values found"," "))))}}]),t}(s.a.Component),f=a(23),E=a.n(f),v=(a(36),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={movies:[]},a.componentDidMount=function(){a.setState({movies:Object.values(a.props.moviesData).map(function(e){return{EventTitle:e.EventTitle,EventCode:e.EventCode,ShowDate:e.ShowDate,EventGenre:e.EventGenre,EventLanguage:e.EventLanguage,TrailerURL:e.TrailerURL,wtsCount:e.wtsCount,dwtsCount:e.dwtsCount,maybeCount:e.maybeCount,totalVotes:e.totalVotes,wtsPerc:e.wtsPerc}})})},a.handleClick=function(e){var t="";if(e.target.classList.contains("box-inner"))t=e.target.parentElement;else if(e.target.classList.contains("show-date")||e.target.classList.contains("fa-play-circle")||e.target.classList.contains("ratings"))t=e.target.parentElement.parentElement;else{if(!e.target.classList.contains("fa-thumbs-up")&&!e.target.classList.contains("votes"))return;t=e.target.parentElement.parentElement.parentElement}var a=t.id,n=Math.floor(window.innerWidth/t.getBoundingClientRect().width)||1,s=document.getElementById(Math.floor(a/n)*n);document.getElementById("preview")&&document.getElementById("movies-grid").removeChild(document.getElementById("preview"));var l=document.createElement("div");l.classList.add("preview"),setTimeout(function(){l.style.height="100px",l.style.opacity=1},0),l.id="preview",document.getElementById("movies-grid").insertBefore(l,s)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"movies-grid",id:"movies-grid",onClick:this.handleClick},this.state.movies.map(function(e,t){return s.a.createElement("div",{className:"box",id:t,key:e.EventCode},s.a.createElement("div",{style:{backgroundImage:"url('https://in.bmscdn.com/events/moviecard/".concat(e.EventCode,".jpg')")},className:"box-inner"},s.a.createElement("span",{className:"show-date"},e.ShowDate.split(",")[0]),s.a.createElement("i",{className:"far fa-play-circle"}),s.a.createElement("span",{className:"ratings"},s.a.createElement("i",{className:"fas fa-thumbs-up"})," ",e.wtsPerc," %",s.a.createElement("span",{className:"votes"}," ",e.totalVotes," votes")),s.a.createElement("span",{className:"title"},e.EventTitle)))}))}}]),t}(s.a.Component)),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={languages:[],moviesData:[]},a.componentDidMount=function(){fetch("https://cors-anywhere.herokuapp.com/https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs").then(function(e){return e.json()}).then(function(e){a.setState({languages:e[0],moviesData:e[1]})}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-2"},s.a.createElement("nav",null,s.a.createElement("img",{src:E.a,height:"40px",width:"150px",alt:"logo"}),s.a.createElement("div",{className:"nav-left"},s.a.createElement("button",{className:"green-btn"},"COMING SOON"),s.a.createElement("button",{className:"gray-btn"},"NOW SHOWING")),s.a.createElement("div",{className:"nav-right"},s.a.createElement("button",null,"Popular ",s.a.createElement("i",{className:"fas fa-chevron-down"})),s.a.createElement("button",null,"English ",s.a.createElement("i",{className:"fas fa-chevron-down"})),s.a.createElement("button",null,"All Genres ",s.a.createElement("i",{className:"fas fa-chevron-down"}))),s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("main",null,0===this.state.languages.length?"Loading":s.a.createElement(v,{moviesData:this.state.moviesData})))}}]),t}(s.a.Component);var b=function(){return s.a.createElement("div",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(i.b,{to:"/assignment-1"},"Go to Assignment 1")),s.a.createElement("li",null,s.a.createElement(i.b,{to:"/assignment-2"},"Go to Assignment 2"))))};var w=function(){return s.a.createElement(i.a,null,s.a.createElement(c.c,null,s.a.createElement(c.a,{path:"/home",exact:!0,component:b}),s.a.createElement(c.a,{path:"/assignment-1",exact:!0,component:g}),s.a.createElement(c.a,{path:"/assignment-2",exact:!0,component:y}),s.a.createElement(c.a,{component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.459f23a1.chunk.js.map