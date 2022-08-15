const initialState = [
  {
    id: 0,
    name: "Salvador Augusto",
    email: "salvas50-@gmail.com",
    phone: 85997650419,
  },
  {
    id: 1,
    name: "Poisa Costa",
    email: "intchala@hotmail.com",
    phone: 85985410550,
  },
  {
    id: 2,
    name: "Brigido Sigá",
    email: "brpro@hotmail.com",
    phone: 85985410560,
  },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
