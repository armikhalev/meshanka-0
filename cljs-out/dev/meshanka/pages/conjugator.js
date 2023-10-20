// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('meshanka.pages.conjugator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('goog.string');
meshanka.pages.conjugator.accented_vowels = /[áéíúó]/;
meshanka.pages.conjugator.replace_accented_vowels = (function meshanka$pages$conjugator$replace_accented_vowels(past_impf){
var vec__11166 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(past_impf,meshanka.pages.conjugator.accented_vowels);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11166,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11166,(1),null);
var unstressed_vowel = (function (){var G__11169 = cljs.core.re_find(meshanka.pages.conjugator.accented_vowels,past_impf);
switch (G__11169) {
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
meshanka.pages.conjugator.past_perfective = (function meshanka$pages$conjugator$past_perfective(p__11171){
var map__11172 = p__11171;
var map__11172__$1 = cljs.core.__destructure_map(map__11172);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11172__$1,cljs.core.cst$kw$base);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11172__$1,cljs.core.cst$kw$prefix);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11172__$1,cljs.core.cst$kw$verb_DASH_type);
var root = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?base.slice((0),(-2)):base.slice((0),(-1)));
var ending = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?root.slice((-1)):base.slice((-1)));
var stressed_vowel = (function (){var G__11173 = ending;
switch (G__11173) {
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
var G__11174 = verb_type;
var G__11174__$1 = (((G__11174 instanceof cljs.core.Keyword))?G__11174.fqn:null);
switch (G__11174__$1) {
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
case "\u017Eaji->zi":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stem),"z\u00ED"].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stressed_vowel)].join('');

}
});
meshanka.pages.conjugator.imperfective_infinitive = (function meshanka$pages$conjugator$imperfective_infinitive(p__11177){
var map__11178 = p__11177;
var map__11178__$1 = cljs.core.__destructure_map(map__11178);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11178__$1,cljs.core.cst$kw$verb_DASH_type);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11178__$1,cljs.core.cst$kw$base);
var G__11179 = verb_type;
var G__11179__$1 = (((G__11179 instanceof cljs.core.Keyword))?G__11179.fqn:null);
switch (G__11179__$1) {
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
meshanka.pages.conjugator.perfective_infinitive = (function meshanka$pages$conjugator$perfective_infinitive(p__11181){
var map__11182 = p__11181;
var map__11182__$1 = cljs.core.__destructure_map(map__11182);
var props = map__11182__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11182__$1,cljs.core.cst$kw$verb_DASH_type);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11182__$1,cljs.core.cst$kw$prefix);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11182__$1,cljs.core.cst$kw$base);
var past_perf = meshanka.pages.conjugator.past_perfective(props);
var G__11183 = verb_type;
var G__11183__$1 = (((G__11183 instanceof cljs.core.Keyword))?G__11183.fqn:null);
switch (G__11183__$1) {
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
meshanka.pages.conjugator.present_tense = (function meshanka$pages$conjugator$present_tense(p__11185){
var map__11186 = p__11185;
var map__11186__$1 = cljs.core.__destructure_map(map__11186);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11186__$1,cljs.core.cst$kw$base);
var verb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11186__$1,cljs.core.cst$kw$verb);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11186__$1,cljs.core.cst$kw$verb_DASH_type);
var but_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,verb_type);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ja,((but_type_QMARK_)?"jesim, sim, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"m"].join('')),cljs.core.cst$kw$mi,((but_type_QMARK_)?"jesm\u00F3, smo, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"mo"].join('')),cljs.core.cst$kw$ti,((but_type_QMARK_)?"jes\u00ED, si, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"\u0161"].join('')),cljs.core.cst$kw$vi,((but_type_QMARK_)?"jest\u00E9, ste, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"te"].join('')),cljs.core.cst$kw$on,((but_type_QMARK_)?"jest, je":verb),cljs.core.cst$kw$oni,((but_type_QMARK_)?"jes\u00F3, so, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"jo"].join(''))], null);
});
meshanka.pages.conjugator.present_tense_view = (function meshanka$pages$conjugator$present_tense_view(props){
var verb = meshanka.pages.conjugator.present_tense(props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_present_DASH_tense$block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Nastoje\u010Di \u010Das / Present tense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$present_DASH_tense,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$present_DASH_tense_DASH_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ja.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$mi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$ti.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$vi.cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr$person3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$on.cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.cst$kw$oni.cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null)], null);
});
meshanka.pages.conjugator.past_imperfective = (function meshanka$pages$conjugator$past_imperfective(p__11187){
var map__11188 = p__11187;
var map__11188__$1 = cljs.core.__destructure_map(map__11188);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11188__$1,cljs.core.cst$kw$base);
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11188__$1,cljs.core.cst$kw$verb_DASH_type);
var root = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?base.slice((0),(-2)):base.slice((0),(-1)));
var ending = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,cljs.core.cst$kw$va))?root.slice((-1)):base.slice((-1)));
var stressed_vowel = (function (){var G__11189 = ending;
switch (G__11189) {
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
var G__11190 = verb_type;
var G__11190__$1 = (((G__11190 instanceof cljs.core.Keyword))?G__11190.fqn:null);
switch (G__11190__$1) {
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
meshanka.pages.conjugator.future_perfective = (function meshanka$pages$conjugator$future_perfective(p__11193){
var map__11194 = p__11193;
var map__11194__$1 = cljs.core.__destructure_map(map__11194);
var props = map__11194__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11194__$1,cljs.core.cst$kw$verb_DASH_type);
var past_perf = meshanka.pages.conjugator.past_perfective(props);
var but_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,verb_type);
var iti_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$iti,verb_type);
var vec__11195 = meshanka.pages.conjugator.replace_accented_vowels(past_perf);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(0),null);
var base_vowel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11195,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ja,((but_type_QMARK_)?"budem":((iti_type_QMARK_)?"ja \u010De priidem":["ja \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"m"].join('')
)),cljs.core.cst$kw$mi,((but_type_QMARK_)?"budemo":((iti_type_QMARK_)?"mi \u010De priidemo":["mi \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"mo"].join('')
)),cljs.core.cst$kw$ti,((but_type_QMARK_)?"bude\u0161":((iti_type_QMARK_)?"ti \u010De priide\u0161":["ti \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"\u0161"].join('')
)),cljs.core.cst$kw$vi,((but_type_QMARK_)?"budete":((iti_type_QMARK_)?"vi \u010De priidete":["vi \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"te"].join('')
)),cljs.core.cst$kw$on,((but_type_QMARK_)?"bude":((iti_type_QMARK_)?"on \u010De priide":["on \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel)].join('')
)),cljs.core.cst$kw$oni,((but_type_QMARK_)?"budejo":((iti_type_QMARK_)?"oni \u010De priidejo":["oni \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"jo"].join('')
))], null);
});
meshanka.pages.conjugator.future_imperfective = (function meshanka$pages$conjugator$future_imperfective(p__11198){
var map__11199 = p__11198;
var map__11199__$1 = cljs.core.__destructure_map(map__11199);
var props = map__11199__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11199__$1,cljs.core.cst$kw$verb_DASH_type);
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
meshanka.pages.conjugator.imperative_imperfective = (function meshanka$pages$conjugator$imperative_imperfective(p__11201){
var map__11202 = p__11201;
var map__11202__$1 = cljs.core.__destructure_map(map__11202);
var props = map__11202__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11202__$1,cljs.core.cst$kw$verb_DASH_type);
var past_impf = meshanka.pages.conjugator.past_imperfective(props);
var imperative_base = (function (p1__11200_SHARP_){
return past_impf.slice((0),p1__11200_SHARP_);
});
var imper_base_min_3 = imperative_base((-3));
var vec__11203 = meshanka.pages.conjugator.replace_accented_vowels(past_impf);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11203,(0),null);
var base_vowel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11203,(1),null);
var base__$1 = (function (){var G__11206 = verb_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,G__11206)){
return "budi";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__11206)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mog_u010d_i,G__11206)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$iti,G__11206)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$e,G__11206)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$i,G__11206)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$va,G__11206)){
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
meshanka.pages.conjugator.imperative_perfective = (function meshanka$pages$conjugator$imperative_perfective(p__11207){
var map__11208 = p__11207;
var map__11208__$1 = cljs.core.__destructure_map(map__11208);
var props = map__11208__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11208__$1,cljs.core.cst$kw$verb_DASH_type);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11208__$1,cljs.core.cst$kw$prefix);
var past_perf = meshanka.pages.conjugator.past_perfective(props);
var imperative_base = past_perf.slice((0),(-1));
var base = (function (){var G__11209 = verb_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$but,G__11209)){
return "budi";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$iti,G__11209)){
return "priid\u00ED";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__11209)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,G__11209)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ova,G__11209)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$va,G__11209)){
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
var G__11210 = cljs.core.cst$kw$verb_DASH_type.cljs$core$IFn$_invoke$arity$1(props);
var G__11210__$1 = (((G__11210 instanceof cljs.core.Keyword))?G__11210.fqn:null);
switch (G__11210__$1) {
case "but":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pf,"bev\u0161i",cljs.core.cst$kw$impf,"buv\u0161i"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.conjugator.past_perfective(props)),"v\u0161i"].join(''),cljs.core.cst$kw$impf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props)),"v\u0161i"].join('')], null);

}
});
meshanka.pages.conjugator.past_passive_participle = (function meshanka$pages$conjugator$past_passive_participle(p__11212){
var map__11213 = p__11212;
var map__11213__$1 = cljs.core.__destructure_map(map__11213);
var props = map__11213__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11213__$1,cljs.core.cst$kw$verb_DASH_type);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11213__$1,cljs.core.cst$kw$base);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11213__$1,cljs.core.cst$kw$prefix);
var past_perfective_form = meshanka.pages.conjugator.past_perfective(props);
var ends_on_a_accented_QMARK_ = goog.string.caseInsensitiveEndsWith(past_perfective_form,"\u00E1");
var ends_on_a_QMARK_ = goog.string.caseInsensitiveEndsWith(past_perfective_form,"a");
var base__$1 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(props);
var pf_root = past_perfective_form.slice((0),(-1));
var impf_root = base__$1.slice((0),(-1));
var G__11214 = verb_type;
var G__11214__$1 = (((G__11214 instanceof cljs.core.Keyword))?G__11214.fqn:null);
switch (G__11214__$1) {
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
meshanka.pages.conjugator.verbal_noun = (function meshanka$pages$conjugator$verbal_noun(p__11216){
var map__11217 = p__11216;
var map__11217__$1 = cljs.core.__destructure_map(map__11217);
var props = map__11217__$1;
var verb_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11217__$1,cljs.core.cst$kw$verb_DASH_type);
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11217__$1,cljs.core.cst$kw$base);
var G__11218 = verb_type;
var G__11218__$1 = (((G__11218 instanceof cljs.core.Keyword))?G__11218.fqn:null);
switch (G__11218__$1) {
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
var G__11222 = verb;
switch (G__11222) {
case "ide":
return cljs.core.cst$kw$iti;

break;
case "bude":
return cljs.core.cst$kw$but;

break;
default:
var pred__11223 = (function (p1__11221_SHARP_,p2__11220_SHARP_){
return goog.string.endsWith(p2__11220_SHARP_,p1__11221_SHARP_);
});
var expr__11224 = verb;
if(pred__11223("mo\u017Ee",expr__11224)){
return cljs.core.cst$kw$mog_u010d_i;
} else {
if(pred__11223("ovaje",expr__11224)){
return cljs.core.cst$kw$ova;
} else {
if(pred__11223("vaje",expr__11224)){
return cljs.core.cst$kw$va;
} else {
if(pred__11223("\u017Eaji",expr__11224)){
return cljs.core.cst$kw$_u017e_aji_DASH__GT_zi;
} else {
if(pred__11223("ji",expr__11224)){
return cljs.core.cst$kw$ji;
} else {
if(pred__11223("je",expr__11224)){
return cljs.core.cst$kw$je;
} else {
if(pred__11223("ja",expr__11224)){
return cljs.core.cst$kw$ja;
} else {
if(pred__11223("ga",expr__11224)){
return cljs.core.cst$kw$ga_DASH__GT__u017e_e;
} else {
if(pred__11223("ka",expr__11224)){
return cljs.core.cst$kw$ka_DASH__GT__u010d_e;
} else {
if(pred__11223("ha",expr__11224)){
return cljs.core.cst$kw$ha_DASH__GT__u0161_e;
} else {
if(pred__11223("\u0161a",expr__11224)){
return cljs.core.cst$kw$_u0161_a_DASH__GT_si;
} else {
if(pred__11223("e",expr__11224)){
return cljs.core.cst$kw$e;
} else {
if(pred__11223("i",expr__11224)){
return cljs.core.cst$kw$i;
} else {
if(pred__11223("a",expr__11224)){
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

}
});
meshanka.pages.conjugator.input_field = (function meshanka$pages$conjugator$input_field(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_input_DASH_conjugator,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$on_DASH_change,(function (p1__11227_SHARP_){
return cljs.core.reset_BANG_(v,p1__11227_SHARP_.target.value);
})], null)], null)], null);
});
meshanka.pages.conjugator.prepare_verb_props = (function meshanka$pages$conjugator$prepare_verb_props(v){
var v3person_sg = goog.string.trim(v);
var splitted_by_dash = clojure.string.split.cljs$core$IFn$_invoke$arity$3(v3person_sg,/-/,(2));
var vec__11228 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(splitted_by_dash),(2)))?splitted_by_dash:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(splitted_by_dash)], null));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11228,(0),null);
var verb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11228,(1),null);
var verb_type = meshanka.pages.conjugator.find_verb_type(goog.string.trim(verb));
var exception_ending = (function (){var G__11231 = verb_type;
var G__11231__$1 = (((G__11231 instanceof cljs.core.Keyword))?G__11231.fqn:null);
switch (G__11231__$1) {
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
case "\u017Eaji->zi":
return "ji";

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
