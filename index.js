let hour_ten_digits = document.querySelector(".hour_ten_digits");
let hour_digit = document.querySelector(".hour_digit");
let minute_ten_digits = document.querySelector(".minute_ten_digits");
let minute_digit = document.querySelector(".minute_digit");
let pause = document.querySelector("footer .left");
let start = document.querySelector("footer .mid");
let reset = document.querySelector("footer .right");

function hour_ten_digits_func(start, end, interval) {
  if (start >= end) {
    hour_ten_digits.innerText = start;
    start -= 1;
    setTimeout(() => {
      hour_ten_digits_func(start, end, interval);
    }, interval);
  }
}

// function hour_digit_func(start, end, interval) {
//   if (start <= end) {
//     hour_digit.innerText = start;
//     start += 1;
//     setTimeout(() => {
//         hour_digit_func(start, end, interval);
//     }, interval);
//   }
// }

function start_func() {}

hour_ten_digits_func(6, 0, 1000);
// hour_digit_func(0, 9, 1000);
