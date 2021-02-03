#lang sicp

;; EX 1.1
(display "-----------------------\n")
(display "EX 1.1:\n")

10
(+ 5 3 4)
(- 9 1)
(/ 6 2)
(+ (* 2 4) (- 4 6))

(define a 3)
(define b (+ a 1))
(+ a b (* a b))
(= a b)

(if (and (> b a) (< b (* a b)))
    b
    a)

(cond ((= a 4) 6)
      ((= b 4) (+ 6 7 a))
      (else 25))

(+ 2 (if (> b a) b a))

(* (cond ((> a b) a)
         ((< a b) b)
         (else -1))
   (+ a 1))
;; EX 1.2
(display "-----------------------\n")
(display "EX 1.2:\n")

(/ (+ 5 4
      (- 2
         (- 3
            (+ 6 (/ 4 5)))))
   (* 3
      (- 6 2)
      (- 2 7)))

;; EX 1.3
(display "-----------------------\n")
(display "EX 1.3:\n")

(define (square x) (* x x))

(define (squareSum x y) (+ (square x) (square y)))

(define (sumOfLargestTwoSquared x y z)
  (cond ((and (>= (+ x y) (+ y z)) (>= (+ x y) (+ x z))) (squareSum x y))
        ((and (>= (+ x z) (+ y z)) (>= (+ x z) (+ x y))) (squareSum x z))
        (else (squareSum y z))
        )
  )
(sumOfLargestTwoSquared 5 6 7)

(display "-----------------------\n")
(display "EX 1.4:\n")

(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

;; (a-plus-abs-b 1 -3)
;; ((if (> -3 0) + -) 1 -3)
;; ((if #f + -) 1 -3)
;; (- 1 + 3)

;; (a-plus-abs-b 1 3)
;; ((if (> 3 0) + -) 1 3)
;; ((if #t + -) 1 3)
;; (+ 1 3)

(a-plus-abs-b 4 -5)

(display "-----------------------\n")
(display "EX 1.5:\n")

(define (p) (p))
(define (test x y)
  (if (= x 0) 0 y))

;; with applicative-order the evaluation of (test 0 (p))
;; never terminates, because (p) is infinitely expanded to itself
;; (test 0 (p))

;; Using normal-order evaluation, the expression evaluates, step by step, to 0
;; (test 0 (p))
;; (if (= 0 0) 0 (p))
;; (if #t 0 (p))
;; 0
