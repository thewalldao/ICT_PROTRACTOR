#lang sicp
(define (sqrt-iter guess oldguess x) 
  (if (good-enough? guess oldguess) 
      guess 
      (sqrt-iter (improve guess x) guess 
                 x))) 
  
  
(define (good-enough? guess oldguess) 
  (< (abs (- guess oldguess)) 
     (* guess 0.001))) 

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (sqrt x) 
  (sqrt-iter 1.0 2.0 x))

(sqrt 6e-324)
(sqrt 4e-324)
(sqrt 1.7e+308)