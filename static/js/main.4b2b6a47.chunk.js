(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),o=a.n(s),i=a(6),l=a(2),c=a(3),m=a(5),u=a(4),d=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:3,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=a(9),b=(a(16),a(1)),g=a.n(b),y=g.a.shape,f=g.a.string,v=g.a.func,S=g.a.bool,E=g.a.number,w=((0,g.a.arrayOf)(y({userId:E,id:E,title:f,completed:S,length:E})),y({id:f,name:f,username:f,email:f,map:v}),g.a.arrayOf(g.a.shape({userId:g.a.number,id:g.a.number,title:g.a.string,completed:g.a.bool,name:g.a.string,username:g.a.string,email:g.a.string})),function(e){var t=e.todoArr;return n.a.createElement("h1",null,n.a.createElement("span",null,"TASKS: "),t.length)}),k=(a(19),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={text:"",selectedOption:0,textError:null,selectError:null},e.handleChange=function(t){var a=t.target;a.value||e.setState({textError:"Please, enter what needs to do"}),e.setState({text:a.value.trimStart(),textError:null})},e.handleSelect=function(t){0===t.target.value?e.setState({selectError:"Please, select a User"}):e.setState({selectedOption:t.target.value,selectError:""})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,r=a.selectedOption,n=a.text;if(r<1||n.length<1)e.setState({selectError:r<1?"Please, select a User":"",textError:n.length<1?"Please, enter what needs to do":""});else{var s={userId:Number(r),id:e.props.todos.length+1,title:n,completed:!1};e.props.addNewTodo(s),e.setState({text:"",selectedOption:0,textError:"",selectError:""})}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{className:"todo-form",onSubmit:this.handleSubmit},n.a.createElement("input",{className:"form-input",type:"text",onChange:this.handleChange,value:this.state.text,placeholder:"please, write a task"}),n.a.createElement("select",{className:"form-select",value:this.state.selectedOption,onChange:function(t){return e.handleSelect(t)}},n.a.createElement("option",{value:0},"choose a user"),this.props.users.map(function(e){var t=e.id,a=e.name;return n.a.createElement("option",{key:t,value:t},a)})),n.a.createElement("button",{className:"form-button",type:"submit"},"Add"),n.a.createElement("p",{className:"error-text"},this.state.textError),n.a.createElement("p",{className:"error-select"},this.state.selectError))}}]),a}(r.Component)),x=(a(20),a(21),a(22),function(e){var t=e.user;return n.a.createElement("div",{className:"user-info"},n.a.createElement("p",null,t.name," ",n.a.createElement("a",{className:"user-email",href:"mailto:".concat(t.email)},t.email)))}),C=function(e){var t=e.todo;return n.a.createElement("div",{className:"todo-item"},n.a.createElement("h2",null,t.title),n.a.createElement("p",null,t.completed?"Completed":"Not completed"),n.a.createElement(x,{user:t.user}))},N=function(e){var t=e.preparedTodos;return n.a.createElement("div",{className:"todos-list"},t.map(function(e){return n.a.createElement(C,{todo:e,key:e.id})}))},O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={todosFromServer:Object(i.a)(h),usersFromServer:Object(i.a)(d)},e.handleSubmit=function(t){e.setState(function(e){return{todosFromServer:[].concat(Object(i.a)(e.todosFromServer),[t])}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t,a=(e=this.state.todosFromServer,t=this.state.usersFromServer,e.map(function(e){var a=t.find(function(t){return t.id===e.userId});return Object(p.a)({},e,{user:a})}));return n.a.createElement("div",{className:"App"},n.a.createElement(w,{className:"Header",todoArr:this.state.todosFromServer}),n.a.createElement(k,{users:this.state.usersFromServer,todos:this.state.todosFromServer,addNewTodo:this.handleSubmit}),n.a.createElement(N,{preparedTodos:a}))}}]),a}(r.Component);o.a.render(n.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4b2b6a47.chunk.js.map