// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('meshanka.pages.conjugator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('goog.string');
meshanka.pages.conjugator.accented_vowels = /[áéíúó]/;
meshanka.pages.conjugator.replace_accented_vowels = (function meshanka$pages$conjugator$replace_accented_vowels(past_impf){
var vec__10468 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(past_impf,meshanka.pages.conjugator.accented_vowels);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10468,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10468,(1),null);
var unstressed_vowel = (function (){var G__10471 = cljs.core.re_find(meshanka.pages.conjugator.accented_vowels,past_impf);
switch (G__10471) {
case "\u00E1":
return "a";

break;
case "\u00E9":
return "e";

break;
case "\u00ED":
return "i";

break;
case "\u00FA":
return "u";

break;
case "\u00F3":
return "o";

break;
default:
return cljs.core.last(past_impf);

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base,unstressed_vowel], null);
});
meshanka.pages.conjugator.past_perfective = (function meshanka$pages$conjugator$past_perfective(p__10473){
var map__10474 = p__10473;
var map__10474__$1 = cljs.core.__destructure_map(map__10474);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.cst$kw$base);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.cst$kw$prefix);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10474__$1,cljs.core.cst$kw$verb_DASH_type);
var root = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?base.slice((0),(-2)):base.slice((0),(-1)));
var ending = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?root.slice((-1)):base.slice((-1)));
var stressed_vowel = (function (){var G__10475 = ending;
switch (G__10475) {
case "a":
return "\u00E1";

break;
case "e":
return "\u00E9";

break;
case "u":
return "\u00FA";

break;
case "o":
return "\u00F3";

break;
case "i":
return "\u00ED";

break;
default:
return ending;

}
})();
var stem = root.slice((0),(-1));
var G__10476 = verb_type;
var G__10476__$1 = (((G__10476 instanceof cljs.core.Keyword))?G__10476.fqn:null);
switch (G__10476__$1) {
case "iti":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"\u0161ed"].join('');

break;
case "but":
return "be";

break;
case "va":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stressed_vowel)].join('');

break;
case "ji":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"\u00ED"].join('');

break;
case "je":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"\u00E9"].join('');

break;
case "ja":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),"\u00ED"].join('');

break;
case "ga->\u017Ee":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),"\u017E\u00E9"].join('');

break;
case "ka->\u010De":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),"\u010D\u00E9"].join('');

break;
case "ha->\u0161e":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),"\u0161\u00E9"].join('');

break;
case "\u0161a->si":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),"s\u00ED"].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stressed_vowel)].join('');

}
});
meshanka.pages.conjugator.imperfective_infinitive = (function meshanka$pages$conjugator$imperfective_infinitive(p__10479){
var map__10480 = p__10479;
var map__10480__$1 = cljs.core.__destructure_map(map__10480);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10480__$1,cljs.core.cst$kw$verb_DASH_type);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10480__$1,cljs.core.cst$kw$base);
var G__10481 = verb_type;
var G__10481__$1 = (((G__10481 instanceof cljs.core.Keyword))?G__10481.fqn:null);
switch (G__10481__$1) {
case "iti":
return "iti";

break;
case "but":
return "but";

break;
case "mog\u010Di":
return "mog\u010Di";

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"t"].join('');

}
});
meshanka.pages.conjugator.perfective_infinitive = (function meshanka$pages$conjugator$perfective_infinitive(p__10483){
var map__10484 = p__10483;
var map__10484__$1 = cljs.core.__destructure_map(map__10484);
var props = map__10484__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10484__$1,cljs.core.cst$kw$verb_DASH_type);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10484__$1,cljs.core.cst$kw$prefix);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10484__$1,cljs.core.cst$kw$base);
var past_perf = meshanka.pages.conjugator.past_perfective(props);
var G__10485 = verb_type;
var G__10485__$1 = (((G__10485 instanceof cljs.core.Keyword))?G__10485.fqn:null);
switch (G__10485__$1) {
case "iti":
return "priit\u00ED";

break;
case "but":
return "but";

break;
case "mog\u010Di":
return "smog\u010D\u00ED";

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perf),"ti"].join('');

}
});
meshanka.pages.conjugator.present_tense = (function meshanka$pages$conjugator$present_tense(p__10487){
var map__10488 = p__10487;
var map__10488__$1 = cljs.core.__destructure_map(map__10488);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$base);
var verb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$verb);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$verb_DASH_type);
var but_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,verb_type);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ja,((but_type_QMARK_)?"jesim, sim, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"m"].join('')),cljs.core.cst$kw$mi,((but_type_QMARK_)?"jesm\u00F3, smo, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"mo"].join('')),cljs.core.cst$kw$ti,((but_type_QMARK_)?"jes\u00ED, si, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"\u0161"].join('')),cljs.core.cst$kw$vi,((but_type_QMARK_)?"jest\u00E9, ste, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"te"].join('')),cljs.core.cst$kw$on,((but_type_QMARK_)?"jest, je":verb),cljs.core.cst$kw$oni,((but_type_QMARK_)?"jes\u00F3, so, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"jo"].join(''))], null);
});
meshanka.pages.conjugator.present_tense_view = (function meshanka$pages$conjugator$present_tense_view(props){
var verb = meshanka.pages.conjugator.present_tense(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_present_DASH_tense$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Nastoje\u010Di \u010Das / Present tense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$present_DASH_tense,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$present_DASH_tense_DASH_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ja.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$mi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ti.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$vi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$on.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$oni.cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null)], null);
});
meshanka.pages.conjugator.past_imperfective = (function meshanka$pages$conjugator$past_imperfective(p__10489){
var map__10490 = p__10489;
var map__10490__$1 = cljs.core.__destructure_map(map__10490);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10490__$1,cljs.core.cst$kw$base);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10490__$1,cljs.core.cst$kw$verb_DASH_type);
var root = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?base.slice((0),(-2)):base.slice((0),(-1)));
var ending = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?root.slice((-1)):base.slice((-1)));
var stressed_vowel = (function (){var G__10491 = ending;
switch (G__10491) {
case "a":
return "\u00E1";

break;
case "e":
return "\u00E9";

break;
case "u":
return "\u00FA";

break;
case "o":
return "\u00F3";

break;
case "i":
return "\u00ED";

break;
default:
return ending;

}
})();
var G__10492 = verb_type;
var G__10492__$1 = (((G__10492 instanceof cljs.core.Keyword))?G__10492.fqn:null);
switch (G__10492__$1) {
case "but":
return "buva";

break;
case "va":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root.slice((0),(-1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stressed_vowel),"va"].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stressed_vowel),"va"].join('');

}
});
meshanka.pages.conjugator.future_perfective = (function meshanka$pages$conjugator$future_perfective(p__10495){
var map__10496 = p__10495;
var map__10496__$1 = cljs.core.__destructure_map(map__10496);
var props = map__10496__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10496__$1,cljs.core.cst$kw$verb_DASH_type);
var past_perf = meshanka.pages.conjugator.past_perfective(props);
var but_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,verb_type);
var iti_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$iti,verb_type);
var vec__10497 = meshanka.pages.conjugator.replace_accented_vowels(past_perf);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10497,(0),null);
var base_vowel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10497,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ja,((but_type_QMARK_)?"budem":((iti_type_QMARK_)?"ja \u010De priidem":["ja \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"m"].join('')
)),cljs.core.cst$kw$mi,((but_type_QMARK_)?"budemo":((iti_type_QMARK_)?"mi \u010De priidemo":["mi \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"mo"].join('')
)),cljs.core.cst$kw$ti,((but_type_QMARK_)?"bude\u0161":((iti_type_QMARK_)?"ti \u010De priide\u0161":["ti \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"\u0161"].join('')
)),cljs.core.cst$kw$vi,((but_type_QMARK_)?"budete":((iti_type_QMARK_)?"vi \u010De priidete":["vi \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"te"].join('')
)),cljs.core.cst$kw$on,((but_type_QMARK_)?"bude":((iti_type_QMARK_)?"on \u010De priide":["on \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel)].join('')
)),cljs.core.cst$kw$oni,((but_type_QMARK_)?"budejo":((iti_type_QMARK_)?"oni \u010De priidejo":["oni \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"jo"].join('')
))], null);
});
meshanka.pages.conjugator.future_imperfective = (function meshanka$pages$conjugator$future_imperfective(p__10500){
var map__10501 = p__10500;
var map__10501__$1 = cljs.core.__destructure_map(map__10501);
var props = map__10501__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,cljs.core.cst$kw$verb_DASH_type);
var perf_inf = meshanka.pages.conjugator.imperfective_infinitive(props);
var but_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,verb_type);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ja,((but_type_QMARK_)?"budem":["bum ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),cljs.core.cst$kw$mi,((but_type_QMARK_)?"budemo":["bumo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),cljs.core.cst$kw$ti,((but_type_QMARK_)?"bude\u0161":["bu\u0161 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),cljs.core.cst$kw$vi,((but_type_QMARK_)?"budete":["buste ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),cljs.core.cst$kw$on,((but_type_QMARK_)?"bude":["bude ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),cljs.core.cst$kw$oni,((but_type_QMARK_)?"budejo":["bujo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join(''))], null);
});
meshanka.pages.conjugator.future_imperfective_view = (function meshanka$pages$conjugator$future_imperfective_view(props){
var verb = meshanka.pages.conjugator.future_imperfective(props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$future_DASH_tense_DASH_imperfective_DASH_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ja.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$mi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ti.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$vi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$on.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$oni.cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null);
});
meshanka.pages.conjugator.future_perfective_view = (function meshanka$pages$conjugator$future_perfective_view(props){
var verb = meshanka.pages.conjugator.future_perfective(props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$future_DASH_tense_DASH_perfective_DASH_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ja.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$mi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ti.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$vi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$on.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$oni.cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null);
});
meshanka.pages.conjugator.imperative_imperfective = (function meshanka$pages$conjugator$imperative_imperfective(p__10503){
var map__10504 = p__10503;
var map__10504__$1 = cljs.core.__destructure_map(map__10504);
var props = map__10504__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10504__$1,cljs.core.cst$kw$verb_DASH_type);
var past_impf = meshanka.pages.conjugator.past_imperfective(props);
var imperative_base = (function (p1__10502_SHARP_){
return past_impf.slice((0),p1__10502_SHARP_);
});
var imper_base_min_3 = imperative_base((-3));
var vec__10505 = meshanka.pages.conjugator.replace_accented_vowels(past_impf);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(0),null);
var base_vowel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10505,(1),null);
var base__$1 = (function (){var G__10508 = verb_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,G__10508)){
return "budi";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__10508)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mog_u010d_i,G__10508)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$iti,G__10508)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$e,G__10508)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$i,G__10508)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$va,G__10508)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"v\u00E1j"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base((-2))),"j"].join('');

}
}
}
}
}
}
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sg,base__$1,cljs.core.cst$kw$pl,[base__$1,"te"].join('')], null);
});
meshanka.pages.conjugator.imperative_perfective = (function meshanka$pages$conjugator$imperative_perfective(p__10509){
var map__10510 = p__10509;
var map__10510__$1 = cljs.core.__destructure_map(map__10510);
var props = map__10510__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10510__$1,cljs.core.cst$kw$verb_DASH_type);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10510__$1,cljs.core.cst$kw$prefix);
var past_perf = meshanka.pages.conjugator.past_perfective(props);
var imperative_base = past_perf.slice((0),(-1));
var base = (function (){var G__10511 = verb_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,G__10511)){
return "budi";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$iti,G__10511)){
return "priid\u00ED";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__10511)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,G__10511)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ova,G__10511)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$va,G__10511)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perf),"j"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00ED"].join('');

}
}
}
}
}
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sg,base,cljs.core.cst$kw$pl,[base,"te"].join('')], null);
});
meshanka.pages.conjugator.present_active_participle = (function meshanka$pages$conjugator$present_active_participle(props){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props)),"\u010Di"].join('');
});
meshanka.pages.conjugator.present_passive_participle = (function meshanka$pages$conjugator$present_passive_participle(props){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props)),"mi"].join('');
});
meshanka.pages.conjugator.past_active_participle = (function meshanka$pages$conjugator$past_active_participle(props){
var G__10512 = cljs.core.cst$kw$verb_DASH_type.cljs$core$IFn$_invoke$arity$1(props);
var G__10512__$1 = (((G__10512 instanceof cljs.core.Keyword))?G__10512.fqn:null);
switch (G__10512__$1) {
case "but":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pf,"bev\u0161i",cljs.core.cst$kw$impf,"buv\u0161i"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_perfective(props)),"v\u0161i"].join(''),cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props)),"v\u0161i"].join('')], null);

}
});
meshanka.pages.conjugator.past_passive_participle = (function meshanka$pages$conjugator$past_passive_participle(p__10514){
var map__10515 = p__10514;
var map__10515__$1 = cljs.core.__destructure_map(map__10515);
var props = map__10515__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10515__$1,cljs.core.cst$kw$verb_DASH_type);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10515__$1,cljs.core.cst$kw$base);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10515__$1,cljs.core.cst$kw$prefix);
var past_perfective_form = meshanka.pages.conjugator.past_perfective(props);
var ends_on_a_accented_QMARK_ = goog.string.caseInsensitiveEndsWith(past_perfective_form,"\u00E1");
var ends_on_a_QMARK_ = goog.string.caseInsensitiveEndsWith(past_perfective_form,"a");
var base__$1 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props);
var pf_root = past_perfective_form.slice((0),(-1));
var impf_root = base__$1.slice((0),(-1));
var G__10516 = verb_type;
var G__10516__$1 = (((G__10516 instanceof cljs.core.Keyword))?G__10516.fqn:null);
switch (G__10516__$1) {
case "but":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pf,"",cljs.core.cst$kw$impf,""], null);

break;
case "\u0161a->si":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(impf_root),"eni"].join('')], null);

break;
case "ji":
case "ja":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf_root),"jeni"].join('')], null);

break;
case "i":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(impf_root),"jeni"].join(''),cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf_root),"jeni"].join('')], null);

break;
case "va":
if((!(((ends_on_a_QMARK_) || (ends_on_a_accented_QMARK_))))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perfective_form),"jeni"].join('')], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perfective_form),"ni"].join('')], null);

}

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perfective_form),"ni"].join(''),cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join('')], null);

}
});
meshanka.pages.conjugator.verbal_noun = (function meshanka$pages$conjugator$verbal_noun(p__10518){
var map__10519 = p__10518;
var map__10519__$1 = cljs.core.__destructure_map(map__10519);
var props = map__10519__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10519__$1,cljs.core.cst$kw$verb_DASH_type);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10519__$1,cljs.core.cst$kw$base);
var G__10520 = verb_type;
var G__10520__$1 = (((G__10520 instanceof cljs.core.Keyword))?G__10520.fqn:null);
switch (G__10520__$1) {
case "but":
return "butie";

break;
case "i":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base.slice((0),(-1))),"jenie"].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props)),"nie"].join('');

}
});
/**
 * Conditionally applies Meshanka rules to determine given verb's type.
 */
meshanka.pages.conjugator.find_verb_type = (function meshanka$pages$conjugator$find_verb_type(verb){
var G__10524 = verb;
switch (G__10524) {
case "ide":
return cljs.core.cst$kw$iti;

break;
case "bude":
return cljs.core.cst$kw$but;

break;
default:
var pred__10525 = (function (p1__10523_SHARP_,p2__10522_SHARP_){
return goog.string.endsWith(p2__10522_SHARP_,p1__10523_SHARP_);
});
var expr__10526 = verb;
if(pred__10525("mo\u017Ee",expr__10526)){
return cljs.core.cst$kw$mog_u010d_i;
} else {
if(pred__10525("ovaje",expr__10526)){
return cljs.core.cst$kw$ova;
} else {
if(pred__10525("vaje",expr__10526)){
return cljs.core.cst$kw$va;
} else {
if(pred__10525("ji",expr__10526)){
return cljs.core.cst$kw$ji;
} else {
if(pred__10525("je",expr__10526)){
return cljs.core.cst$kw$je;
} else {
if(pred__10525("ja",expr__10526)){
return cljs.core.cst$kw$ja;
} else {
if(pred__10525("ga",expr__10526)){
return cljs.core.cst$kw$ga_DASH__GT__u017e_e;
} else {
if(pred__10525("ka",expr__10526)){
return cljs.core.cst$kw$ka_DASH__GT__u010d_e;
} else {
if(pred__10525("ha",expr__10526)){
return cljs.core.cst$kw$ha_DASH__GT__u0161_e;
} else {
if(pred__10525("\u0161a",expr__10526)){
return cljs.core.cst$kw$_u0161_a_DASH__GT_si;
} else {
if(pred__10525("e",expr__10526)){
return cljs.core.cst$kw$e;
} else {
if(pred__10525("i",expr__10526)){
return cljs.core.cst$kw$i;
} else {
if(pred__10525("a",expr__10526)){
return cljs.core.cst$kw$a;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}

}
});
meshanka.pages.conjugator.input_field = (function meshanka$pages$conjugator$input_field(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_input_DASH_conjugator,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,(function (p1__10529_SHARP_){
return cljs.core.reset_BANG_(v,p1__10529_SHARP_.target.value);
})], null)], null)], null);
});
meshanka.pages.conjugator.prepare_verb_props = (function meshanka$pages$conjugator$prepare_verb_props(v){
var v3person_sg = goog.string.trim(v);
var splitted_by_dash = clojure.string.split.cljs$core$IFn$_invoke$arity$3(v3person_sg,/-/,(2));
var vec__10530 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(splitted_by_dash),(2)))?splitted_by_dash:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(splitted_by_dash)], null));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10530,(0),null);
var verb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10530,(1),null);
var verb_type = meshanka.pages.conjugator.find_verb_type(goog.string.trim(verb));
var exception_ending = (function (){var G__10533 = verb_type;
var G__10533__$1 = (((G__10533 instanceof cljs.core.Keyword))?G__10533.fqn:null);
switch (G__10533__$1) {
case "je":
return "je";

break;
case "ji":
return "ji";

break;
case "ova":
return "je";

break;
case "va":
return "je";

break;
default:
return null;

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$base,(cljs.core.truth_(exception_ending)?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(verb,exception_ending)):verb),cljs.core.cst$kw$prefix,prefix,cljs.core.cst$kw$verb,verb,cljs.core.cst$kw$verb_DASH_type,verb_type], null);
});
meshanka.pages.conjugator.page = (function meshanka$pages$conjugator$page(){
var _BANG_v = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("na-pisavaje");
return (function (){
var props = meshanka.pages.conjugator.prepare_verb_props(cljs.core.deref(_BANG_v));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section_GT_div$container_GT_div$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Spregalnik / Conjugator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.conjugator.input_field,_BANG_v], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),(((!(clojure.string.blank_QMARK_(cljs.core.deref(_BANG_v)))))?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile$is_DASH_ancestor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Verb type: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag,cljs.core.cst$kw$verb_DASH_type.cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Prefix: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$tag,cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile$is_DASH_ancestor,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Infinitiv"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.imperfective_infinitive(props)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.perfective_infinitive(props)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Past tense"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.past_imperfective(props)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.past_perfective(props)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Conditional"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,["Ja bi ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_imperfective(props))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,["Ja bi ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_perfective(props))].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Imperative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Singular: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$sg.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.imperative_imperfective(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Plural: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$pl.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.imperative_imperfective(props))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Singular: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$sg.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.imperative_perfective(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Plural: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$pl.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.imperative_perfective(props))], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tile$is_DASH_ancestor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Present Participle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.present_active_participle(props)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Passive"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.present_passive_participle(props)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Past Active Participle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$impf.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_active_participle(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$pf.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_active_participle(props))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Past Passive Participle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$impf.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_passive_participle(props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,cljs.core.cst$kw$pf.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_passive_participle(props))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Verbal Noun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag,meshanka.pages.conjugator.verbal_noun(props)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.conjugator.present_tense_view,props], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Future tense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.conjugator.future_imperfective_view,props], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.conjugator.future_perfective_view,props], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null):null)], null);
});
});
