import React, { useState, useRef } from "react";
import * as classes from "./AddLead.module.css";

const AddLead = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const organizationInputRef = useRef();
  const statusInputRef = useRef();
  const ownerInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredOrganization = organizationInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    const enteredOwner = ownerInputRef.current.value;

    props.onAddLead({
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      organization: enteredOrganization,
      status: enteredStatus,
      owner: enteredOwner,
    });
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <div className={`container ${classes["add-lead-container"]} mt-5`}>
      <div className="row">
        <div className="col-lg-12 p-5">
          <div className="container border p-5">
            {props.isLoading && (
              <div className="row text-center">
                <div className="col-lg-12">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-lg-12">
                <form
                  className="row"
                  onFocus={formFocusedHandler}
                  onSubmit={submitFormHandler}
                >
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-label="Name"
                      ref={nameInputRef}
                    ></input>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="name" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-label="Email"
                      ref={emailInputRef}
                    ></input>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      aria-label="Phone"
                      ref={phoneInputRef}
                    ></input>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="organization" className="form-label">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="organization"
                      aria-label="Organization"
                      ref={organizationInputRef}
                    ></input>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      aria-label="Status"
                      ref={statusInputRef}
                    ></input>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="owner" className="form-label">
                      Owner
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="owner"
                      aria-label="Owner"
                      ref={ownerInputRef}
                    ></input>
                  </div>
                  <div className="d-grid col-lg-12 mb-3 text-center d-md-block">
                    <button
                      className="btn btn-primary"
                      onClick={finishEnteringHandler}
                    >
                      Add Lead
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLead;
