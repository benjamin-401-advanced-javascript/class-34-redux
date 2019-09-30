const uuid = require('uuid/v4');

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INSECT_CREATE':
      const id = uuid();
      const timestamp = Date.now();
      let insect = { id, dateCreated: timestamp, name: payload }
      return [...state, insect];

    case 'INSECT_UPDATE':
  
      return state.map(insect => insect.id === payload.id ? { ...insect, ...payload } : insect);

    case 'INSECT_DELETE':
     
      return state.filter(insect => insect.id === payload ? false : true);

    default:
      
      return state;
  }
};
