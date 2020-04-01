let value = 1;
let obj = { value: 1 };

const closure1 = () => {
  console.log('1: value =', value);
  console.log('1: obj.value =', obj.value);
};

value = 2;
obj.value = 2;

const closure2 = () => {
  console.log('2: value =', value);
  console.log('2: obj.value =', obj.value);
};

closure1();
closure2();

value = 3;
obj.value = 3;

closure1();
closure2();

setTimeout(() => {
  const closure3 = () => {
    console.log('3: value =', value);
    console.log('3: obj.value =', obj.value);
  };

  ++value;
  ++obj.value;

  closure1();
  closure2();
  closure3();
}, 500);

