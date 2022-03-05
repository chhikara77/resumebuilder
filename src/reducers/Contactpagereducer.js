const initial = {
  contact: { name: "test" },
  summary: "",
  userdetails:"",
  expsummary:"",
  skills:["",""],
  exp:"",
  edu:"",
  document: {
    fontSize: "Medium",
    color: "3",
    fontFamily: "Raleway"
  }
};
const Contactpagereducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CONTACTFILL":
      console.log("inside contact case",payload);
      return {
        ...state,
        contact: payload,
      };
    case "SUMMARY": {
      console.log("inside summary case",payload);
      return {
        ...state,
        summary: payload,
      };
    }
    case "EXPSUMMARY": {
      console.log("inside expsummary case",payload);
      return {
        ...state,
        expsummary: payload,
      };
    }
    case "DOCUMENT": {
      console.log("inside document case",payload);
      return {
        ...state,
        document: payload,
      };
    }
    case "USERDETAIL": {
      console.log("inside userdetail case",payload);
      return {
        ...state,
        userdetails: payload,
      };
    }
    case 'SKILLS':{
      console.log("inside skill",payload);
      return {
          ...state,
          skills:payload
      }
    }
    case 'EXPERIENCE':{
      console.log("inside EXP",payload);
      return {
          ...state,
          exp:payload
      }
    }
    case 'EDUCATION':{
      console.log("inside edu",payload);
      return {
          ...state,
          edu:payload
      }
    }
    default: {
      console.log("inside default case", state);
      return state;
    }
  }
};

export default Contactpagereducer;
