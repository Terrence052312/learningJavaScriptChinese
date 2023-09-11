let a = 123;
a = a.toString();
a = true;
a = a.toString();
a = null;
a = a.toString();
a = undefined;
a = a.toString();
// adding "" can change the type of code from number to string.
console.log(typeof a);
console.log(a);
