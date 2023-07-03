class Inversify {
  constructor() {
    this.classBox = {};
  }

  bind(className) {
    this.to = function (classToInject) {
      if (!this.classBox[className])
        this.classBox[className] = {
          classToInject,
          instance: null,
        };
    };

    this.toValue = function (classToInject) {
      if (!this.classBox[className])
        this.classBox[className] = {
          classToInject: null,
          instance: classToInject,
          withArgs: false,
          args: null,
        };
    };
    return this;
  }

  get(className) {
    const container = this.classBox[className];
    if (!container) return null;
    if (container.classToInject && !container.instance) {
      container.instance = new container.classToInject();
    }
    return container.instance;
  }
}

export const container = new Inversify();
