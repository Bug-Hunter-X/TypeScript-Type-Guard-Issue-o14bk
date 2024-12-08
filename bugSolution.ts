function printAll(args: any[]): void {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

function printAllWithTypeGuard(args: any[]): void {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string' || typeof args[i] === 'number') {
      console.log(args[i]);
    } else {
      console.log('Unknown type');
    }
  }
}

printAll([1, 'hello', true, 2]);
printAllWithTypeGuard([1, 'hello', true, 2]);