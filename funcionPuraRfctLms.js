
'use strict';

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart, discount) => {
  let result = [];
  
  if (cart.length) {
    for ( i = 0; i < cart.length; i++ ) {
      result.push({...cart[i]});
      result[i].price *= ( 1- discount);
    }
  }
  return result;
};

module.exports = applyDiscount;

/* 'use strict';


const discount = .2;

const applyDiscount = (cart) => {
  if (!cart.length) {
    return [];
  }

  const current = cart.shift();
  current.price *= (1 - discount);
  return [current].concat(applyDiscount(cart));
};

module.exports = applyDiscount;
 */