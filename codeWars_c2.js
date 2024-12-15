function toWeirdCase(string) {
  let res = string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((letter, i) =>
          i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join('')
    )
    .join(' ');

  return res;
}

toWeirdCase('This is a test');
