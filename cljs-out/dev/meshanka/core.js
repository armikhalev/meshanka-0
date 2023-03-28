// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('meshanka.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('meshanka.pages.conjugator');
meshanka.core.multiply = (function meshanka$core$multiply(a,b){
return (a * b);
});
meshanka.core.db = cljs.core.PersistentArrayMap.EMPTY;
if((typeof meshanka !== 'undefined') && (typeof meshanka.core !== 'undefined') && (typeof meshanka.core.app_state !== 'undefined')){
} else {
meshanka.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(meshanka.core.db);
}
meshanka.core.get_app_element = (function meshanka$core$get_app_element(){
return goog.dom.getElement("app");
});
meshanka.core.hello_world = (function meshanka$core$hello_world(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.conjugator.page], null);
});
meshanka.core.mount = (function meshanka$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.core.hello_world], null),el);
});
meshanka.core.mount_app_element = (function meshanka$core$mount_app_element(){
var temp__5720__auto__ = meshanka.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return meshanka.core.mount(el);
} else {
return null;
}
});
meshanka.core.mount_app_element();
meshanka.core.on_reload = (function meshanka$core$on_reload(){
return meshanka.core.mount_app_element();
});
