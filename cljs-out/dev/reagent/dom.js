// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11291 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11292 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11292);

try{var G__11293 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__11294 = container;
var G__11295 = (function (){
var _STAR_always_update_STAR__orig_val__11296 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11297 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11297);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11296);
}});
return reagent.dom.global$module$react_dom.render(G__11293,G__11294,G__11295);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11291);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11299 = arguments.length;
switch (G__11299) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11300 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11304_11320 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11305_11321 = null;
var count__11306_11322 = (0);
var i__11307_11323 = (0);
while(true){
if((i__11307_11323 < count__11306_11322)){
var vec__11314_11324 = chunk__11305_11321.cljs$core$IIndexed$_nth$arity$2(null,i__11307_11323);
var container_11325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11314_11324,(0),null);
var comp_11326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11314_11324,(1),null);
reagent.dom.re_render_component(comp_11326,container_11325);


var G__11327 = seq__11304_11320;
var G__11328 = chunk__11305_11321;
var G__11329 = count__11306_11322;
var G__11330 = (i__11307_11323 + (1));
seq__11304_11320 = G__11327;
chunk__11305_11321 = G__11328;
count__11306_11322 = G__11329;
i__11307_11323 = G__11330;
continue;
} else {
var temp__5720__auto___11331 = cljs.core.seq(seq__11304_11320);
if(temp__5720__auto___11331){
var seq__11304_11332__$1 = temp__5720__auto___11331;
if(cljs.core.chunked_seq_QMARK_(seq__11304_11332__$1)){
var c__4679__auto___11333 = cljs.core.chunk_first(seq__11304_11332__$1);
var G__11334 = cljs.core.chunk_rest(seq__11304_11332__$1);
var G__11335 = c__4679__auto___11333;
var G__11336 = cljs.core.count(c__4679__auto___11333);
var G__11337 = (0);
seq__11304_11320 = G__11334;
chunk__11305_11321 = G__11335;
count__11306_11322 = G__11336;
i__11307_11323 = G__11337;
continue;
} else {
var vec__11317_11338 = cljs.core.first(seq__11304_11332__$1);
var container_11339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11317_11338,(0),null);
var comp_11340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11317_11338,(1),null);
reagent.dom.re_render_component(comp_11340,container_11339);


var G__11341 = cljs.core.next(seq__11304_11332__$1);
var G__11342 = null;
var G__11343 = (0);
var G__11344 = (0);
seq__11304_11320 = G__11341;
chunk__11305_11321 = G__11342;
count__11306_11322 = G__11343;
i__11307_11323 = G__11344;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
