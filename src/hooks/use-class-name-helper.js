class ClassNameHelper {
  constructor() {
    this.classMapping = {};
  }

  register(key, ...classNameArrays) {
    if (!this.classMapping[key]) {
      this.classMapping[key] = [];
    }

    classNameArrays.forEach((classNameArray) => {
      if (!Array.isArray(classNameArray)) {
        throw new Error('Arguments after key must be arrays');
      }

      this.classMapping[key] = this.classMapping[key].concat(classNameArray);
    });

    return this;
  }

  get(key, additionalClasses) {
    if (!key) {
      throw new Error('you must pass a key when calling classNameHelper.get()');
    }

    if (!this.classMapping[key]) {
      throw new Error('you passed a key but never register any mapping.');
    }

    if (!additionalClasses) {
      return this.classMapping[key].join(' ');
    }

    if (Array.isArray(additionalClasses)) {
      return this.classMapping[key].concat(additionalClasses).join(' ');
    }

    return this.classMapping[key].join(' ').concat(' ').concat(additionalClasses);
  }
}

export const useClassNameHelper = () => new ClassNameHelper();

export default useClassNameHelper;
