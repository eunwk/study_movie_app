(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{114:function(e,t,a){e.exports=a(234)},136:function(e,t,a){},141:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(106),c=a.n(s),m=a(26),i=a(6),o=a(59),l=a.n(o),u=a(107),v=a(108),p=a(109),d=a(113),E=a(112),y=a(110),g=a.n(y);a(136);var f=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,i=e.genres;return r.a.createElement(m.b,{to:{pathname:"movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,genres:i}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("p",{className:"movie_title"},n),r.a.createElement("p",{className:"movie_year"},a),r.a.createElement("ul",{className:"genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},s.slice(0,140)))))},N=(a(141),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("div",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},'"Loding..."')):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var b=function(e){return console.log(e),r.a.createElement("div",{className:"about_container"},"About Website...")},h=function(e){var t=e.location;return console.log(t.state),Object(n.useState)((function(){var t=e.location,a=e.history;console.log(e),void 0===t.state&&a.push("/")}),[]),r.a.createElement("div",{className:"detail"},t.state?r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:t.state.poster,alt:t.state.title,title:t.state.title}),r.a.createElement("p",{className:"movie_title"},t.state.title),r.a.createElement("p",{className:"movie_year"},t.state.year),r.a.createElement("p",{className:"movie_summary"},t.state.summary)):r.a.createElement("div",{className:"detail"},"\uc5c6\ub2e4"))};var _=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/about"},"About"))};var j=function(){return r.a.createElement(m.a,null,r.a.createElement(_,null),r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/about",component:b}),r.a.createElement(i.a,{path:"/movie/:id",component:h}))};a(142);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.b83ae251.chunk.js.map