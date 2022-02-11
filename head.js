const _ = require('lodash');
// to just import the head method of lodash destructure:
// const { head } = require('lodash');
//  const headder = head(arr);
const head =(arr) => {
  const headder = _.head(arr);
  return headder;
}

module.exports = head;

