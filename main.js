const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".contaoner .letter-s", {
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal(".container img", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".container .text_left", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});

ScrollReveal().reveal(".container .text_right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".container .explore", {
  ...scrollRevealOption,
  duration: 1000,
  delay: 2500,
});

ScrollReveal().reveal(".container .catalog", {
  ...scrollRevealOption,
  duration: 1000,
  delay: 5000,
});

ScrollReveal().reveal(".container .print", {
  ...scrollRevealOption,
  duration: 1000,
  delay: 5500,
});

ScrollReveal().reveal(".container .h5", {
  duration: 1000,
  interval: 500,
  delay: 3000,
});

ScrollReveal().reveal(".footer p", {
  duration: 1000,
  delay: 7000,
});

