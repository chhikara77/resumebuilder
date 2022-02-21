
const initial={};
function Skillreducer(state=initial,action) {
    const {type,payload} = action;
  switch (type) {
      case 'SKILLS':
          console.log("inside skill",type,payload);
          return {
              ...state,
              ...payload
          }
          default:
              return state;
  }
}

export default Skillreducer;