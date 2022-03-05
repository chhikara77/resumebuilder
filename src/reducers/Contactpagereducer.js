const initial = {
  contact: { name: "test" },
  summary: "",
  expsummary:"",
  skills:[],
  exp:{
    company:"google",
    city:"bgarh",
    startmonth:"11",
    startyear:"2021",
    endmonth:"3",
    endyear:"2022",
    jobtitle:"web developer"
  },
  edu:"",
  document: {
    skin: "1",
    fontSize: "Medium",
    color: "3",
    fontFamily: "Raleway"
  }
};
const Contactpagereducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CONTACTFILL":
      console.log("inside contact case", state,payload);
      return {
        ...state,
        contact: payload,
      };
    case "SUMMARY": {
      console.log("inside summary case",type,payload);
      return {
        ...state,
        summary: payload,
      };
    }
    case "EXPSUMMARY": {
      console.log("inside expsummary case",type,payload);
      return {
        ...state,
        expsummary: payload,
      };
    }
    case "DOCUMENT": {
      console.log("inside document case",type,payload);
      return {
        ...state,
        document: payload,
      };
    }
    case 'SKILLS':{
      console.log("inside skill",type,payload);
      return {
          ...state,
          skills:payload
      }
    }
    case 'EXPERIENCE':{
      console.log("inside EXP",type,payload);
      return {
          ...state,
          exp:payload
      }
    }
    case 'EDUCATION':{
      console.log("inside edu",type,payload);
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
