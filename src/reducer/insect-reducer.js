const uuid = require('uuid/v4');

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INSECT_CREATE':
      const id = uuid();
      const timestamp = Date.now();
      let insect = { id, dateCreated: timestamp, name: payload }
      return [...state, insect];

    case 'INSECT_UPDATE':
      // Vinicio - homework for you :)
      // please use a map
      // console.log()
      return state.map(insect => insect.id === payload.id ? { ...insect, ...payload } : insect);

    case 'INSECT_DELETE':
      // Vinicio - homework for you :)
      // please use a filter
      return state.filter(insect => insect.id === payload ? false : true);

    default:
      // Vinicio - this prevents a corrupted state
      return state;
  }
};

// export default (state = [], action) => { };
