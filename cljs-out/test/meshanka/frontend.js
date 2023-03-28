// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('meshanka.frontend');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.println.call(null,"This text is printed from src/meshanka/frontend.cljs. Go ahead and edit it and see reloading in action.");
meshanka.frontend.multiply = (function meshanka$frontend$multiply(a,b){
return (a * b);
});
if((typeof meshanka !== 'undefined') && (typeof meshanka.frontend !== 'undefined') && (typeof meshanka.frontend.app_state !== 'undefined')){
} else {
meshanka.frontend.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
meshanka.frontend.get_app_element = (function meshanka$frontend$get_app_element(){
return goog.dom.getElement("app");
});
meshanka.frontend.hello_world = (function meshanka$frontend$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meshanka.frontend.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Ta edit ti in src/meshanka/frontend.cljs and watch it change!"], null)], null);
});
meshanka.frontend.mount = (function meshanka$frontend$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.frontend.hello_world], null),el);
});
meshanka.frontend.mount_app_element = (function meshanka$frontend$mount_app_element(){
var temp__5720__auto__ = meshanka.frontend.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return meshanka.frontend.mount.call(null,el);
} else {
return null;
}
});
meshanka.frontend.mount_app_element.call(null);
meshanka.frontend.on_reload = (function meshanka$frontend$on_reload(){
return meshanka.frontend.mount_app_element.call(null);
});

//# sourceMappingURL=frontend.js.map
