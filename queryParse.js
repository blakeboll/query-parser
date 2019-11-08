const yargs = require("yargs").argv

const parseQueryParameters = url => {
  let res = {}
  let usO = url.split('?').slice(1).join('').split('&').reduce((a, e) => {
    e = e.split('=');
    a[e[0]] = e[1];
    return a
  }, {})
  Object.keys(usO).sort().map((e) => {
    res[e] = usO[e]
  })
  return res;
};

// Copy paste url bar into this function

const url = yargs._[0]
console.log(parseQueryParameters(url));
