function ask(confirm, yes, no) {
  if (confirm) yes()
  else no()
}

ask(true,
  () => console.log('Say yes!'),
  () => console.log('Say no'))