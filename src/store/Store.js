class Store {
  store = new Map();

  constructor(attributes = {}) {
    _.each(attributes, (value, key) => {
      this.set(key, value);
    });
  }

  set(key, value) {
    return this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }
}

class List {
  Store = Store;
  list = [];

  add(attributes) {
    return this.list.push(new this.Store(attributes))
  }

  push(store) {
    return this.list.push(store)
  }

  getByIndex(index) {
    return this.list[index];
  }

  getAll() {
    return this.list;
  }

  getLength() {
    return this.list.length;
  }

  find(id) {
    return _.find(this.list, (store) => { return store.id == id });
  }
}

module.exports = { Store, List };
