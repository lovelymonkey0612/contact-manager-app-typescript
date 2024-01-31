import { FC } from "react";
import { Contact } from "../reducer/ContactsReducer";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ContactItem: FC<Contact> = ({ firstName, lastName, phone }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <AiFillEdit size={20} className="icon" />
      </td>
      <td>
        <AiFillDelete size={20} className="icon" />
      </td>
    </tr>
  );
};

export default ContactItem;
