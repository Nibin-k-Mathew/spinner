const symbols = '|/-\\';
​
const spinner1 = (symbols) => {
  let delay = 0; 
  for( symbol of symbols ){   
    // passing the symbols as paramter   
 setTimeout(() => {
  process.stdout.write(`\r${symbol} `);
}, delay);
delay += 200;
}
}
spinner1(symbols);