import { useReducer } from "react";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import { contactsReducer, State } from "./reducer/ContactsReducer";

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
      </div>
    </div>
  );
}

export default App;
