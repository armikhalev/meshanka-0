(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer [run-tests]]
            [cljs-test-display.core] [meshanka.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote meshanka.core-test))