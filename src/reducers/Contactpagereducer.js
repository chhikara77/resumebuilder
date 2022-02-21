const initial = {
  contact: { name: "test" },
  summary: "",
  document: {
    skin: "skin1",
    fontSize: "medium",
    color: "1",
    fontFamily: "ubantu",
  },
};
const Contactpagereducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CONTACTFILL":
      console.log("inside first case", state);
      return {
        ...state,
        contact: payload,
      };
    case "SUMMARY": {
      console.log("inside second case");
      return {
        ...state,
        summary: payload,
      };
    }
    case "DOCUMENT": {
      //console.log("inside document case",payload);
      return {
        ...state,
        document: payload,
      };
    }
    default: {
      console.log("inside THIRD case", state);
      return state;
    }
  }
};

export default Contactpagereducer;
