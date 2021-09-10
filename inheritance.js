class Base {
  constructor(name) {
    console.log(`constructing Base with name: ${name}`);

    this.name = name;
  }

  doStuff(a, b, c) {
    console.log(`Base says a=${a}, b=${b}, and c=${c}`);
  }

  doStuffObj(obj) {
    console.log('Base says:');

    for (const [key, value] of Object.entries(obj)) {
      console.log(`  ${key}: ${value}`);
    }
  }
}

class Derived extends Base {
  constructor(name, other) {
    super(name);

    console.log(`constructing Derived with other: ${other}`);
  }

  doStuff1(a, b, c, d) {
    super.doStuff(a, b, d);
    console.log(`This is c: ${c}`);
  }

  doStuff2(a, b, c, d) {
    super.doStuffObj({ a, b, c, d });
  }
}

const b = new Base('BaseName');
b.doStuff(1, 2, 3);
b.doStuffObj({ a: 1, b: 2, c: 3 });

const d = new Derived('DName', 'OtherName');
d.doStuff('one', 'two', 'three');
d.doStuff1('one', 'two', 'three', 'four');
d.doStuff2('one', 'two', 'three', 'four');
