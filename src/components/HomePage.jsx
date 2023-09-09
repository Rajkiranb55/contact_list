import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const HomePage = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container">
      <h1>Contact List</h1>
      <div className="col-md-12 my-5 text-end">
        <Link to="/add" className="btn btn-outline-dark add_contact">
          <button class="button button5">Add Contact </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => (
            <tr key={id}>
              <td className="serila_number">{id + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
              <td>
                <Link
                  to={`/edit/${contact.id}`}
                  className="btn btn-small btn-primary me-2"
                >
                  <i class="fa fa-edit"></i>
                </Link>
                <button
                  type="button"
                  onClick={() => deleteContact(contact.id)}
                  className="btn btn-small btn-danger"
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
