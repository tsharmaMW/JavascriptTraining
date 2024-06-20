onmessage = function (msg) {
  // No access to window, DOM
  // We have access to XMLHttpRequest, fetch API
  console.log(msg.data);
  let arr = [];
  for (let i = 0; i < 10000; i++) {
    arr[i] = [];
    for (let j = 0; j < 10000; j++) {
      arr[i][j] = Math.random();
    }
  }
  this.postMessage(arr[3000][3000]);
};
