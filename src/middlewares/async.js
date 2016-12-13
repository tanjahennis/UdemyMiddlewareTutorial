export default function({ dispatch }) {
  return next => action => {
    // If action does nog have payload
    // or, the payload does not have a .then property
    // we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action)
    }

    console.log('We don\'t have a promise', action)
  };
}
