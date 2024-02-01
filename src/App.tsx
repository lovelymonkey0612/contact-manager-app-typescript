import { useEffect, useReducer, useState } from "react";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import { Contact, contactsReducer, State } from "./reducer/ContactsReducer";
import ContactList from "./components/ContactList";
import EditModal from "./components/EditModal";

const initialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  console.log("state: ", state);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
        <EditModal
          showModal={showModal}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
