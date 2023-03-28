(ns meshanka.frontend-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [meshanka.frontend :refer [multiply]]))

(deftest multiply-test
  (is (= (* 2 2) (multiply 1 2))))

(deftest multiply-test-2
  (is (= (* 75 10) (multiply 10 75))))
