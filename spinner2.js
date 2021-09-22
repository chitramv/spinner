const Arr = ['\r|      ','\r/    ','\r-     ','\r\\    ','\r|      ','\r/    ','\r-     ','\r\\    ']
for ( let i =0 ; i < 8; i++) {
setTimeout(() => {
  process.stdout.write(Arr[i]);
}, 100 *(i+1));

}
