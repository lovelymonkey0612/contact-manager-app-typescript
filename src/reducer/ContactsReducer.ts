export interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Action {
  type: "ADD_CONTACT";
  payload: Contact;
}

export interface State {
  contacts: Contact[];
}

export const contactsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
