fn square(x: f64) -> f64 {
    x * x
}

fn abs(x: f64) -> f64 {
    if x < 0.0 {
        return -x;
    } else {
        return x;
    };
}

fn improve(guess: f64, x: f64) -> f64 {
    average(guess, x / guess)
}

fn average(x: f64, y: f64) -> f64 {
    (x + y) / 2.0
}

fn good_enough(guess: f64, x: f64) -> bool {
    abs(square(guess) - x) < 0.001
}

fn sqrt_iter(guess: f64, x: f64) -> f64 {
    if good_enough(guess, x) {
        guess
    } else {
        sqrt_iter(improve(guess, x), x)
    }
}

fn sqrt(x: f64) -> f64 {
    sqrt_iter(1.0, x)
}

fn main() {
    println!("{}", sqrt(18.0))
}
