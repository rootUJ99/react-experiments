import React, { useMemo } from "react";
const UseMemoComp = props => {
  const checkPrime = n => {
    const t1 = performance.now();
    var i,
      flag = true;
    for (i = 2; i <= n - 1; i++)
      if (n % i == 0) {
        flag = false;
        break;
      }

    // Check and display alert message
    if (flag == true) console.log("yes it is");
    else console.log("no its not");
    const t2 = performance.now();
    console.log(t2 - t1, "in memo");
  };
  checkPrime(12222222222222222222222222);
  useMemo(() => checkPrime(12222222222222222222222222), []);
  return <h1>holla</h1>;
};

export default UseMemoComp;
