// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs_quil.core.setup = (function cljs_quil$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
cljs_quil.core.update_state = (function cljs_quil$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
cljs_quil.core.draw_state = (function cljs_quil$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__8564__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8564__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
cljs_quil.core.cljs_quil = (function cljs_quil$core$cljs_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"cljs-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,cljs_quil.core.update_state))?(function() { 
var G__8663__delegate = function (args){
return cljs.core.apply.call(null,cljs_quil.core.update_state,args);
};
var G__8663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8664__i = 0, G__8664__a = new Array(arguments.length -  0);
while (G__8664__i < G__8664__a.length) {G__8664__a[G__8664__i] = arguments[G__8664__i + 0]; ++G__8664__i;}
  args = new cljs.core.IndexedSeq(G__8664__a,0);
} 
return G__8663__delegate.call(this,args);};
G__8663.cljs$lang$maxFixedArity = 0;
G__8663.cljs$lang$applyTo = (function (arglist__8665){
var args = cljs.core.seq(arglist__8665);
return G__8663__delegate(args);
});
G__8663.cljs$core$IFn$_invoke$arity$variadic = G__8663__delegate;
return G__8663;
})()
:cljs_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,cljs_quil.core.setup))?(function() { 
var G__8666__delegate = function (args){
return cljs.core.apply.call(null,cljs_quil.core.setup,args);
};
var G__8666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8667__i = 0, G__8667__a = new Array(arguments.length -  0);
while (G__8667__i < G__8667__a.length) {G__8667__a[G__8667__i] = arguments[G__8667__i + 0]; ++G__8667__i;}
  args = new cljs.core.IndexedSeq(G__8667__a,0);
} 
return G__8666__delegate.call(this,args);};
G__8666.cljs$lang$maxFixedArity = 0;
G__8666.cljs$lang$applyTo = (function (arglist__8668){
var args = cljs.core.seq(arglist__8668);
return G__8666__delegate(args);
});
G__8666.cljs$core$IFn$_invoke$arity$variadic = G__8666__delegate;
return G__8666;
})()
:cljs_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,cljs_quil.core.draw_state))?(function() { 
var G__8669__delegate = function (args){
return cljs.core.apply.call(null,cljs_quil.core.draw_state,args);
};
var G__8669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8670__i = 0, G__8670__a = new Array(arguments.length -  0);
while (G__8670__i < G__8670__a.length) {G__8670__a[G__8670__i] = arguments[G__8670__i + 0]; ++G__8670__i;}
  args = new cljs.core.IndexedSeq(G__8670__a,0);
} 
return G__8669__delegate.call(this,args);};
G__8669.cljs$lang$maxFixedArity = 0;
G__8669.cljs$lang$applyTo = (function (arglist__8671){
var args = cljs.core.seq(arglist__8671);
return G__8669__delegate(args);
});
G__8669.cljs$core$IFn$_invoke$arity$variadic = G__8669__delegate;
return G__8669;
})()
:cljs_quil.core.draw_state));
});
goog.exportSymbol('cljs_quil.core.cljs_quil', cljs_quil.core.cljs_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7463__7464__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7463__7464__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_quil.core.cljs_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"cljs-quil"], null));
}

//# sourceMappingURL=core.js.map