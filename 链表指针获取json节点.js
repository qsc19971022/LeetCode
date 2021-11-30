const json = {
  a: {
    b: {
      c: 111
    }
  },
  d: {
    e:1
    }
}

const path = ['a', 'b', 'c'];
let p = json;
path.map( item => {
  p = p[item]
})
console.log(p)