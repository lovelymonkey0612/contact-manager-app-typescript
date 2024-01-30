import { useReducer } from "react";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import { contactsReducer, State } from "./reducer/ContactsReducer";
import ContactList from "./components/ContactList";

const initialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  console.log("state: ", state);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ContactForm dispatch={dispatch} />
        <hr />
        {state.contacts.length > 0 && <ContactList contacts={state.contacts} />}
      </div>
    </div>
  );
}

export default App;
