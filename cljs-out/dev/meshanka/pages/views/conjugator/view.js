// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('meshanka.pages.views.conjugator.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('goog.string');
meshanka.pages.views.conjugator.view.accented_vowels = /[áéíúó]/;
meshanka.pages.views.conjugator.view.replace_accented_vowels = (function meshanka$pages$views$conjugator$view$replace_accented_vowels(past_impf){
var vec__73171 = clojure.string.split.call(null,past_impf,meshanka.pages.views.conjugator.view.accented_vowels);
var base = cljs.core.nth.call(null,vec__73171,(0),null);
var _ = cljs.core.nth.call(null,vec__73171,(1),null);
var unstressed_vowel = (function (){var G__73174 = cljs.core.re_find.call(null,meshanka.pages.views.conjugator.view.accented_vowels,past_impf);
switch (G__73174) {
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
return cljs.core.last.call(null,past_impf);

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base,unstressed_vowel], null);
});
meshanka.pages.views.conjugator.view.past_perfective = (function meshanka$pages$views$conjugator$view$past_perfective(p__73176){
var map__73177 = p__73176;
var map__73177__$1 = cljs.core.__destructure_map.call(null,map__73177);
var base = cljs.core.get.call(null,map__73177__$1,new cljs.core.Keyword(null,"base","base",185279322));
var prefix = cljs.core.get.call(null,map__73177__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var verb_type = cljs.core.get.call(null,map__73177__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var root = ((cljs.core._EQ_.call(null,verb_type,new cljs.core.Keyword(null,"va","va",-100574029)))?base.slice((0),(-2)):base.slice((0),(-1)));
var ending = ((cljs.core._EQ_.call(null,verb_type,new cljs.core.Keyword(null,"va","va",-100574029)))?root.slice((-1)):base.slice((-1)));
var stressed_vowel = (function (){var G__73178 = ending;
switch (G__73178) {
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
var G__73179 = verb_type;
var G__73179__$1 = (((G__73179 instanceof cljs.core.Keyword))?G__73179.fqn:null);
switch (G__73179__$1) {
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
meshanka.pages.views.conjugator.view.imperfective_infinitive = (function meshanka$pages$views$conjugator$view$imperfective_infinitive(p__73182){
var map__73183 = p__73182;
var map__73183__$1 = cljs.core.__destructure_map.call(null,map__73183);
var verb_type = cljs.core.get.call(null,map__73183__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var base = cljs.core.get.call(null,map__73183__$1,new cljs.core.Keyword(null,"base","base",185279322));
var G__73184 = verb_type;
var G__73184__$1 = (((G__73184 instanceof cljs.core.Keyword))?G__73184.fqn:null);
switch (G__73184__$1) {
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
meshanka.pages.views.conjugator.view.perfective_infinitive = (function meshanka$pages$views$conjugator$view$perfective_infinitive(p__73186){
var map__73187 = p__73186;
var map__73187__$1 = cljs.core.__destructure_map.call(null,map__73187);
var props = map__73187__$1;
var verb_type = cljs.core.get.call(null,map__73187__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var prefix = cljs.core.get.call(null,map__73187__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var base = cljs.core.get.call(null,map__73187__$1,new cljs.core.Keyword(null,"base","base",185279322));
var past_perf = meshanka.pages.views.conjugator.view.past_perfective.call(null,props);
var G__73188 = verb_type;
var G__73188__$1 = (((G__73188 instanceof cljs.core.Keyword))?G__73188.fqn:null);
switch (G__73188__$1) {
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
meshanka.pages.views.conjugator.view.present_tense = (function meshanka$pages$views$conjugator$view$present_tense(p__73190){
var map__73191 = p__73190;
var map__73191__$1 = cljs.core.__destructure_map.call(null,map__73191);
var base = cljs.core.get.call(null,map__73191__$1,new cljs.core.Keyword(null,"base","base",185279322));
var verb = cljs.core.get.call(null,map__73191__$1,new cljs.core.Keyword(null,"verb","verb",-1492655803));
var verb_type = cljs.core.get.call(null,map__73191__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var but_type_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"but","but",-790578560),verb_type);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ja","ja",-1704765727),((but_type_QMARK_)?"jesim, sim, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"m"].join('')),new cljs.core.Keyword(null,"mi","mi",-387784306),((but_type_QMARK_)?"jesm\u00F3, smo, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"mo"].join('')),new cljs.core.Keyword(null,"ti","ti",-398895904),((but_type_QMARK_)?"jes\u00ED, si, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"\u0161"].join('')),new cljs.core.Keyword(null,"vi","vi",528448190),((but_type_QMARK_)?"jest\u00E9, ste, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"te"].join('')),new cljs.core.Keyword(null,"on","on",173873944),((but_type_QMARK_)?"jest, je":verb),new cljs.core.Keyword(null,"oni","oni",1840832692),((but_type_QMARK_)?"jes\u00F3, so, je":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"jo"].join(''))], null);
});
meshanka.pages.views.conjugator.view.present_tense_view = (function meshanka$pages$views$conjugator$view$present_tense_view(props){
var verb = meshanka.pages.views.conjugator.view.present_tense.call(null,props);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#present-tense.block","div#present-tense.block",409863485),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Nastoje\u010Di \u010Das / Present tense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.present-tense","div.present-tense",1833531815),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.present-tense-table","table.present-tense-table",37494420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person1","tr.person1",-1459252147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"ja","ja",-1704765727).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mi","mi",-387784306).cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person2","tr.person2",701970551),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"ti","ti",-398895904).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"vi","vi",528448190).cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person3","tr.person3",380499574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"oni","oni",1840832692).cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null)], null);
});
meshanka.pages.views.conjugator.view.past_imperfective = (function meshanka$pages$views$conjugator$view$past_imperfective(p__73192){
var map__73193 = p__73192;
var map__73193__$1 = cljs.core.__destructure_map.call(null,map__73193);
var base = cljs.core.get.call(null,map__73193__$1,new cljs.core.Keyword(null,"base","base",185279322));
var verb_type = cljs.core.get.call(null,map__73193__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var root = ((cljs.core._EQ_.call(null,verb_type,new cljs.core.Keyword(null,"va","va",-100574029)))?base.slice((0),(-2)):base.slice((0),(-1)));
var ending = ((cljs.core._EQ_.call(null,verb_type,new cljs.core.Keyword(null,"va","va",-100574029)))?root.slice((-1)):base.slice((-1)));
var stressed_vowel = (function (){var G__73194 = ending;
switch (G__73194) {
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
var G__73195 = verb_type;
var G__73195__$1 = (((G__73195 instanceof cljs.core.Keyword))?G__73195.fqn:null);
switch (G__73195__$1) {
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
meshanka.pages.views.conjugator.view.future_perfective = (function meshanka$pages$views$conjugator$view$future_perfective(p__73198){
var map__73199 = p__73198;
var map__73199__$1 = cljs.core.__destructure_map.call(null,map__73199);
var props = map__73199__$1;
var verb_type = cljs.core.get.call(null,map__73199__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var past_perf = meshanka.pages.views.conjugator.view.past_perfective.call(null,props);
var but_type_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"but","but",-790578560),verb_type);
var iti_type_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iti","iti",2055711901),verb_type);
var vec__73200 = meshanka.pages.views.conjugator.view.replace_accented_vowels.call(null,past_perf);
var base = cljs.core.nth.call(null,vec__73200,(0),null);
var base_vowel = cljs.core.nth.call(null,vec__73200,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ja","ja",-1704765727),((but_type_QMARK_)?"budem":((iti_type_QMARK_)?"ja \u010De priidem":["ja \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"m"].join('')
)),new cljs.core.Keyword(null,"mi","mi",-387784306),((but_type_QMARK_)?"budemo":((iti_type_QMARK_)?"mi \u010De priidemo":["mi \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"mo"].join('')
)),new cljs.core.Keyword(null,"ti","ti",-398895904),((but_type_QMARK_)?"bude\u0161":((iti_type_QMARK_)?"ti \u010De priide\u0161":["ti \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"\u0161"].join('')
)),new cljs.core.Keyword(null,"vi","vi",528448190),((but_type_QMARK_)?"budete":((iti_type_QMARK_)?"vi \u010De priidete":["vi \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"te"].join('')
)),new cljs.core.Keyword(null,"on","on",173873944),((but_type_QMARK_)?"bude":((iti_type_QMARK_)?"on \u010De priide":["on \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel)].join('')
)),new cljs.core.Keyword(null,"oni","oni",1840832692),((but_type_QMARK_)?"budejo":((iti_type_QMARK_)?"oni \u010De priidejo":["oni \u010De ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"jo"].join('')
))], null);
});
meshanka.pages.views.conjugator.view.future_imperfective = (function meshanka$pages$views$conjugator$view$future_imperfective(p__73203){
var map__73204 = p__73203;
var map__73204__$1 = cljs.core.__destructure_map.call(null,map__73204);
var props = map__73204__$1;
var verb_type = cljs.core.get.call(null,map__73204__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var perf_inf = meshanka.pages.views.conjugator.view.imperfective_infinitive.call(null,props);
var but_type_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"but","but",-790578560),verb_type);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ja","ja",-1704765727),((but_type_QMARK_)?"budem":["bum ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),new cljs.core.Keyword(null,"mi","mi",-387784306),((but_type_QMARK_)?"budemo":["bumo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),new cljs.core.Keyword(null,"ti","ti",-398895904),((but_type_QMARK_)?"bude\u0161":["bu\u0161 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),new cljs.core.Keyword(null,"vi","vi",528448190),((but_type_QMARK_)?"budete":["buste ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),new cljs.core.Keyword(null,"on","on",173873944),((but_type_QMARK_)?"bude":["bude ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join('')),new cljs.core.Keyword(null,"oni","oni",1840832692),((but_type_QMARK_)?"budejo":["bujo ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(perf_inf)].join(''))], null);
});
meshanka.pages.views.conjugator.view.future_imperfective_view = (function meshanka$pages$views$conjugator$view$future_imperfective_view(props){
var verb = meshanka.pages.views.conjugator.view.future_imperfective.call(null,props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.future-tense-imperfective-table","table.future-tense-imperfective-table",-478265032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person1","tr.person1",-1459252147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"ja","ja",-1704765727).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mi","mi",-387784306).cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person2","tr.person2",701970551),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"ti","ti",-398895904).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"vi","vi",528448190).cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person3","tr.person3",380499574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"oni","oni",1840832692).cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null);
});
meshanka.pages.views.conjugator.view.future_perfective_view = (function meshanka$pages$views$conjugator$view$future_perfective_view(props){
var verb = meshanka.pages.views.conjugator.view.future_perfective.call(null,props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.future-tense-perfective-table","table.future-tense-perfective-table",-1580183352),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Jedinistveni lik / Singular "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mno\u017Eistveni lik / Plural"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person1","tr.person1",-1459252147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"ja","ja",-1704765727).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mi","mi",-387784306).cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person2","tr.person2",701970551),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"ti","ti",-398895904).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"vi","vi",528448190).cljs$core$IFn$_invoke$arity$1(verb)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.person3","tr.person3",380499574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(verb)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"oni","oni",1840832692).cljs$core$IFn$_invoke$arity$1(verb)], null)], null)], null)], null)], null);
});
meshanka.pages.views.conjugator.view.imperative_imperfective = (function meshanka$pages$views$conjugator$view$imperative_imperfective(p__73206){
var map__73207 = p__73206;
var map__73207__$1 = cljs.core.__destructure_map.call(null,map__73207);
var props = map__73207__$1;
var verb_type = cljs.core.get.call(null,map__73207__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var past_impf = meshanka.pages.views.conjugator.view.past_imperfective.call(null,props);
var imperative_base = (function (p1__73205_SHARP_){
return past_impf.slice((0),p1__73205_SHARP_);
});
var imper_base_min_3 = imperative_base.call(null,(-3));
var vec__73208 = meshanka.pages.views.conjugator.view.replace_accented_vowels.call(null,past_impf);
var base = cljs.core.nth.call(null,vec__73208,(0),null);
var base_vowel = cljs.core.nth.call(null,vec__73208,(1),null);
var base__$1 = (function (){var G__73211 = verb_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"but","but",-790578560),G__73211)){
return "budi";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),G__73211)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mog\u010Di","mog\u010Di",920519858),G__73211)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iti","iti",2055711901),G__73211)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__73211)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"i","i",-1386841315),G__73211)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imper_base_min_3),"\u00ED"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"va","va",-100574029),G__73211)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_vowel),"v\u00E1j"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base.call(null,(-2))),"j"].join('');

}
}
}
}
}
}
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sg","sg",1587785771),base__$1,new cljs.core.Keyword(null,"pl","pl",-1690940563),[base__$1,"te"].join('')], null);
});
meshanka.pages.views.conjugator.view.imperative_perfective = (function meshanka$pages$views$conjugator$view$imperative_perfective(p__73212){
var map__73213 = p__73212;
var map__73213__$1 = cljs.core.__destructure_map.call(null,map__73213);
var props = map__73213__$1;
var verb_type = cljs.core.get.call(null,map__73213__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var prefix = cljs.core.get.call(null,map__73213__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var past_perf = meshanka.pages.views.conjugator.view.past_perfective.call(null,props);
var imperative_base = past_perf.slice((0),(-1));
var base = (function (){var G__73214 = verb_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"but","but",-790578560),G__73214)){
return "budi";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"iti","iti",2055711901),G__73214)){
return "priid\u00ED";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),G__73214)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__73214)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ova","ova",-1086256926),G__73214)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(imperative_base),"\u00E1j"].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"va","va",-100574029),G__73214)){
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sg","sg",1587785771),base,new cljs.core.Keyword(null,"pl","pl",-1690940563),[base,"te"].join('')], null);
});
meshanka.pages.views.conjugator.view.present_active_participle = (function meshanka$pages$views$conjugator$view$present_active_participle(props){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(props)),"\u010Di"].join('');
});
meshanka.pages.views.conjugator.view.present_passive_participle = (function meshanka$pages$views$conjugator$view$present_passive_participle(props){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(props)),"mi"].join('');
});
meshanka.pages.views.conjugator.view.past_active_participle = (function meshanka$pages$views$conjugator$view$past_active_participle(props){
var G__73215 = new cljs.core.Keyword(null,"verb-type","verb-type",-70215654).cljs$core$IFn$_invoke$arity$1(props);
var G__73215__$1 = (((G__73215 instanceof cljs.core.Keyword))?G__73215.fqn:null);
switch (G__73215__$1) {
case "but":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pf","pf",1255760069),"bev\u0161i",new cljs.core.Keyword(null,"impf","impf",-1164864294),"buv\u0161i"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_perfective.call(null,props)),"v\u0161i"].join(''),new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(props)),"v\u0161i"].join('')], null);

}
});
meshanka.pages.views.conjugator.view.past_passive_participle = (function meshanka$pages$views$conjugator$view$past_passive_participle(p__73217){
var map__73218 = p__73217;
var map__73218__$1 = cljs.core.__destructure_map.call(null,map__73218);
var props = map__73218__$1;
var verb_type = cljs.core.get.call(null,map__73218__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var base = cljs.core.get.call(null,map__73218__$1,new cljs.core.Keyword(null,"base","base",185279322));
var prefix = cljs.core.get.call(null,map__73218__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var past_perfective_form = meshanka.pages.views.conjugator.view.past_perfective.call(null,props);
var ends_on_a_accented_QMARK_ = goog.string.caseInsensitiveEndsWith(past_perfective_form,"\u00E1");
var ends_on_a_QMARK_ = goog.string.caseInsensitiveEndsWith(past_perfective_form,"a");
var base__$1 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(props);
var pf_root = past_perfective_form.slice((0),(-1));
var impf_root = base__$1.slice((0),(-1));
var G__73219 = verb_type;
var G__73219__$1 = (((G__73219 instanceof cljs.core.Keyword))?G__73219.fqn:null);
switch (G__73219__$1) {
case "but":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pf","pf",1255760069),"",new cljs.core.Keyword(null,"impf","impf",-1164864294),""], null);

break;
case "\u0161a->si":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(impf_root),"eni"].join('')], null);

break;
case "ji":
case "ja":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf_root),"jeni"].join('')], null);

break;
case "i":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(impf_root),"jeni"].join(''),new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf_root),"jeni"].join('')], null);

break;
case "va":
if((!(((ends_on_a_QMARK_) || (ends_on_a_accented_QMARK_))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perfective_form),"jeni"].join('')], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join(''),new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perfective_form),"ni"].join('')], null);

}

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pf","pf",1255760069),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(past_perfective_form),"ni"].join(''),new cljs.core.Keyword(null,"impf","impf",-1164864294),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"ni"].join('')], null);

}
});
meshanka.pages.views.conjugator.view.verbal_noun = (function meshanka$pages$views$conjugator$view$verbal_noun(p__73221){
var map__73222 = p__73221;
var map__73222__$1 = cljs.core.__destructure_map.call(null,map__73222);
var props = map__73222__$1;
var verb_type = cljs.core.get.call(null,map__73222__$1,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654));
var base = cljs.core.get.call(null,map__73222__$1,new cljs.core.Keyword(null,"base","base",185279322));
var G__73223 = verb_type;
var G__73223__$1 = (((G__73223 instanceof cljs.core.Keyword))?G__73223.fqn:null);
switch (G__73223__$1) {
case "but":
return "butie";

break;
case "i":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base.slice((0),(-1))),"jenie"].join('');

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(props)),"nie"].join('');

}
});
/**
 * Conditionally applies Meshanka rules to determine given verb's type.
 */
meshanka.pages.views.conjugator.view.find_verb_type = (function meshanka$pages$views$conjugator$view$find_verb_type(verb){
var G__73227 = verb;
switch (G__73227) {
case "ide":
return new cljs.core.Keyword(null,"iti","iti",2055711901);

break;
case "bude":
return new cljs.core.Keyword(null,"but","but",-790578560);

break;
default:
var pred__73228 = (function (p1__73226_SHARP_,p2__73225_SHARP_){
return goog.string.endsWith(p2__73225_SHARP_,p1__73226_SHARP_);
});
var expr__73229 = verb;
if(pred__73228.call(null,"mo\u017Ee",expr__73229)){
return new cljs.core.Keyword(null,"mog\u010Di","mog\u010Di",920519858);
} else {
if(pred__73228.call(null,"ovaje",expr__73229)){
return new cljs.core.Keyword(null,"ova","ova",-1086256926);
} else {
if(pred__73228.call(null,"vaje",expr__73229)){
return new cljs.core.Keyword(null,"va","va",-100574029);
} else {
if(pred__73228.call(null,"ji",expr__73229)){
return new cljs.core.Keyword(null,"ji","ji",1821623645);
} else {
if(pred__73228.call(null,"je",expr__73229)){
return new cljs.core.Keyword(null,"je","je",-374989490);
} else {
if(pred__73228.call(null,"ja",expr__73229)){
return new cljs.core.Keyword(null,"ja","ja",-1704765727);
} else {
if(pred__73228.call(null,"ga",expr__73229)){
return new cljs.core.Keyword(null,"ga->\u017Ee","ga->\u017Ee",-1677082284);
} else {
if(pred__73228.call(null,"ka",expr__73229)){
return new cljs.core.Keyword(null,"ka->\u010De","ka->\u010De",-1591062082);
} else {
if(pred__73228.call(null,"ha",expr__73229)){
return new cljs.core.Keyword(null,"ha->\u0161e","ha->\u0161e",1329875503);
} else {
if(pred__73228.call(null,"\u0161a",expr__73229)){
return new cljs.core.Keyword(null,"\u0161a->si","\u0161a->si",1387581659);
} else {
if(pred__73228.call(null,"e",expr__73229)){
return new cljs.core.Keyword(null,"e","e",1381269198);
} else {
if(pred__73228.call(null,"i",expr__73229)){
return new cljs.core.Keyword(null,"i","i",-1386841315);
} else {
if(pred__73228.call(null,"a",expr__73229)){
return new cljs.core.Keyword(null,"a","a",-2123407586);
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
meshanka.pages.views.conjugator.view.input_field = (function meshanka$pages$views$conjugator$view$input_field(v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#input-conjugator","div#input-conjugator",-840011981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__73232_SHARP_){
return cljs.core.reset_BANG_.call(null,v,p1__73232_SHARP_.target.value);
})], null)], null)], null);
});
meshanka.pages.views.conjugator.view.prepare_verb_props = (function meshanka$pages$views$conjugator$view$prepare_verb_props(v){
var v3person_sg = goog.string.trim(v);
var splitted_by_dash = clojure.string.split.call(null,v3person_sg,/-/,(2));
var vec__73233 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,splitted_by_dash),(2)))?splitted_by_dash:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,splitted_by_dash)], null));
var prefix = cljs.core.nth.call(null,vec__73233,(0),null);
var verb = cljs.core.nth.call(null,vec__73233,(1),null);
var verb_type = meshanka.pages.views.conjugator.view.find_verb_type.call(null,goog.string.trim(verb));
var exception_ending = (function (){var G__73236 = verb_type;
var G__73236__$1 = (((G__73236 instanceof cljs.core.Keyword))?G__73236.fqn:null);
switch (G__73236__$1) {
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),(cljs.core.truth_(exception_ending)?cljs.core.first.call(null,clojure.string.split.call(null,verb,exception_ending)):verb),new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"verb","verb",-1492655803),verb,new cljs.core.Keyword(null,"verb-type","verb-type",-70215654),verb_type], null);
});
meshanka.pages.views.conjugator.view.page = (function meshanka$pages$views$conjugator$view$page(){
var _BANG_v = reagent.core.atom.call(null,"na-pisavaje");
return (function (){
var props = meshanka.pages.views.conjugator.view.prepare_verb_props.call(null,cljs.core.deref.call(null,_BANG_v));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section>div.container>div.content","section.section>div.container>div.content",-1570006034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Spregalnik / Conjugator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.views.conjugator.view.input_field,_BANG_v], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),(((!(clojure.string.blank_QMARK_.call(null,cljs.core.deref.call(null,_BANG_v)))))?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Verb type: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),new cljs.core.Keyword(null,"verb-type","verb-type",-70215654).cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Prefix: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(props)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Infinitiv"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.imperfective_infinitive.call(null,props)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.perfective_infinitive.call(null,props)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Past tense"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.past_imperfective.call(null,props)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.past_perfective.call(null,props)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Conditional"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),["Ja bi ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_imperfective.call(null,props))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),["Ja bi ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_perfective.call(null,props))].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Imperative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Singular: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"sg","sg",1587785771).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.imperative_imperfective.call(null,props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Plural: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"pl","pl",-1690940563).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.imperative_imperfective.call(null,props))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Singular: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"sg","sg",1587785771).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.imperative_perfective.call(null,props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Plural: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"pl","pl",-1690940563).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.imperative_perfective.call(null,props))], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Present Participle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.present_active_participle.call(null,props)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Passive"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.present_passive_participle.call(null,props)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Past Active Participle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"impf","impf",-1164864294).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_active_participle.call(null,props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"pf","pf",1255760069).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_active_participle.call(null,props))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Past Passive Participle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"impf","impf",-1164864294).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_passive_participle.call(null,props))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),new cljs.core.Keyword(null,"pf","pf",1255760069).cljs$core$IFn$_invoke$arity$1(meshanka.pages.views.conjugator.view.past_passive_participle.call(null,props))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Verbal Noun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag","div.tag",1088822530),meshanka.pages.views.conjugator.view.verbal_noun.call(null,props)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.views.conjugator.view.present_tense_view,props], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Future tense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Nesover\u0161eni Vid / Imperfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.views.conjugator.view.future_imperfective_view,props], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Sover\u0161eni Vid / Perfective Aspect"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meshanka.pages.views.conjugator.view.future_perfective_view,props], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null):null)], null);
});
});

//# sourceMappingURL=view.js.map
