function receivesAFunction(spy) {
    return spy();
  }

  function returnsANamedFunction() {
    return function greetingNow() {
    console.log("Hello There");
    };
  }

  function returnsAnAnonymousFunction() {
    return function () {
      return String("How is the day goiing");
    };
  }
