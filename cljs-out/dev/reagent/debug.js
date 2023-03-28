// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10112__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10113__i = 0, G__10113__a = new Array(arguments.length -  0);
while (G__10113__i < G__10113__a.length) {G__10113__a[G__10113__i] = arguments[G__10113__i + 0]; ++G__10113__i;}
  args = new cljs.core.IndexedSeq(G__10113__a,0,null);
} 
return G__10112__delegate.call(this,args);};
G__10112.cljs$lang$maxFixedArity = 0;
G__10112.cljs$lang$applyTo = (function (arglist__10114){
var args = cljs.core.seq(arglist__10114);
return G__10112__delegate(args);
});
G__10112.cljs$core$IFn$_invoke$arity$variadic = G__10112__delegate;
return G__10112;
})()
);

(o.error = (function() { 
var G__10115__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10116__i = 0, G__10116__a = new Array(arguments.length -  0);
while (G__10116__i < G__10116__a.length) {G__10116__a[G__10116__i] = arguments[G__10116__i + 0]; ++G__10116__i;}
  args = new cljs.core.IndexedSeq(G__10116__a,0,null);
} 
return G__10115__delegate.call(this,args);};
G__10115.cljs$lang$maxFixedArity = 0;
G__10115.cljs$lang$applyTo = (function (arglist__10117){
var args = cljs.core.seq(arglist__10117);
return G__10115__delegate(args);
});
G__10115.cljs$core$IFn$_invoke$arity$variadic = G__10115__delegate;
return G__10115;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
