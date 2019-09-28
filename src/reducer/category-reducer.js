export default (state = [], {type, payload}) => {
  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      // Vinicio - homework for you :)
      // please use a map
      break;
    case 'CATEGORY_DELETE':
      // Vinicio - homework for you :)
      // please use a filter
      break;
    default:
      // Vinicio - this prevents a corrupted state
      return state;
  }
};

// export default (state = [], action) => { };
