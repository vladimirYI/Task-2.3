'use strict'

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]: function() {
      if (parseInt(this.from) !== this.from || parseInt(this.to) !== this.to) {
      return {
        next: () => ({
          done: true
        })
      }
    }
    return {
      current: Math.min(this.from, this.to),
      last: Math.max(this.from, this.to),
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    }
  }
};

for (const item of myIterable){
  alert(item);
}
 