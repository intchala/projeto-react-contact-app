import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-success my-5 ml-auto shadow">
          <h5>Adicionar Contato</h5>
        </Link>
        <div className="col-md-10 mx-auto my-4 shadow">
          <table className="table table-hover my-2">
            <thead className="table-header bg-success text-white">
              <tr className="coluna-header">
                <th scope="col">ID</th>
                <th scope="col">NOME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">TELEFONE</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody className="body text-white">
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-outline-success mr-1"
                      >
                        Editar
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>Nenhum Contato na Lista</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
