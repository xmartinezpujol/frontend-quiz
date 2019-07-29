const shim = global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

export default shim;
