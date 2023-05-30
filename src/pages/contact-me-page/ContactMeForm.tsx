import { useReducer, useState } from "react";
import { isValidInput } from "../../middlwares/InputValidation";
import axios from "axios";
import ServerPath from "../../middlwares/ServerDomain";
import LoadingPopup from "../../components/LoadingPopup";
import PopupAction from "../../components/PopupAction";
import { useNavigate } from "react-router-dom";

function ContactMeForm() {
  const [form, dispatchForm] = useReducer(formReducer, initialFormState);
  const [isFetching, setIsFetching] = useState(false);
  const [alert, setAlert] = useState<JSX.Element | null>(null);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState<FormValidatorType>(
    initialFormValidatorState
  );
  return (
    <form
      className="contact-me-form"
      onSubmit={(e) => {
        e.preventDefault();
        let thereErrors = false;
        const errors = ValidatorCheck(initialFormValidatorState, {
          state: form,
        });
        console.log("form errors", errors);
        for (let i in errors) {
          if (!errors[i as keyof object]) {
            console.log("Error found in " + i);
            thereErrors = true;
          }
        }
        if (!thereErrors) {
          setIsFetching(true);
          axios
            .post(ServerPath("/messages/new"), form)
            .then((res) => {
              setIsFetching(false);
              setAlert(
                <PopupAction
                  delay={2000}
                  action={() => {
                    navigate("/");
                  }}
                  children={
                    <div className=" alert success">
                      <h2>Mail Sent Succesfully</h2>
                    </div>
                  }
                />
              );
              console.log(res);
            })
            .catch((err) => {
              setIsFetching(false);
              setAlert(
                <PopupAction
                  delay={2000}
                  action={() => {
                    navigate("/");
                  }}
                  children={
                    <div className=" alert error">
                      <h2>Error Happend In Sending Mail!!!</h2>
                    </div>
                  }
                />
              );
              console.log(err);
            });
        }
        setFormErrors(errors);
      }}
    >
      <div className="section">
        {isFetching && <LoadingPopup word="Sending" />}
        {alert}
        <label className={formErrors.name ? "" : "error"} htmlFor="name">
          Your Name <span>Please Enter a Correct Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          className={formErrors.name ? "" : "error"}
          onChange={(e) => {
            dispatchForm({ type: "NAME", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={formErrors.organization ? "" : "error"}
          htmlFor="organization"
        >
          Organization Name <span>Please Fill in the input field</span>{" "}
        </label>
        <input
          type="text"
          name="organization"
          value={form.organization}
          className={formErrors.organization ? "" : "error"}
          onChange={(e) => {
            dispatchForm({ type: "ORGANIZATION", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.email ? "" : "error"} htmlFor="email">
          Email <span>Please Enter a valid Email Address</span>{" "}
        </label>
        <input
          type="text"
          name="email"
          value={form.email}
          className={formErrors.email ? "" : "error"}
          onChange={(e) => {
            dispatchForm({ type: "EMAIL", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.phone ? "" : "error"} htmlFor="phone">
          Phone <span>Please Enter a valid Phone Number</span>{" "}
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          className={formErrors.phone ? "" : "error"}
          onChange={(e) => {
            dispatchForm({ type: "PHONE", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.subject ? "" : "error"} htmlFor="subject">
          Subject <span>Please Enter The Subject of your message</span>{" "}
        </label>
        <input
          type="tel"
          name="subject"
          value={form.subject}
          className={formErrors.subject ? "" : "error"}
          onChange={(e) => {
            dispatchForm({ type: "SUBJECT", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.message ? "" : "error"} htmlFor="message">
          Enter Your Message <span>Please Enter Your Message</span>{" "}
        </label>
        <textarea
          name="message"
          value={form.message}
          className={formErrors.message ? "" : "error"}
          onChange={(e) => {
            dispatchForm({ type: "MESSAGE", payload: e.target.value });
          }}
        />
      </div>
      <div className="submit">
        <input type="submit" value={"Send"} />
      </div>
    </form>
  );
}

function formReducer(state: FormType, action: FormActions): FormType {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "ORGANIZATION":
      return { ...state, organization: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PHONE":
      return { ...state, phone: action.payload };
    case "SUBJECT":
      return { ...state, subject: action.payload };
    case "MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
function ValidatorCheck(
  GlobalValidState: FormValidatorType,
  action: FormValidatorActions
): FormValidatorType {
  let validState = GlobalValidState;
  // name check
  validState = isValidInput({ input: action.state.name, type: "NAME" })
    ? validState
    : { ...validState, name: false };
  // email check
  validState = isValidInput({ input: action.state.email, type: "EMAIL" })
    ? validState
    : { ...validState, email: false };
  // organization check
  validState = isValidInput({
    input: action.state.organization,
    type: "HAS_VALUE",
  })
    ? validState
    : { ...validState, organization: false };
  // subject check
  validState = isValidInput({ input: action.state.subject, type: "HAS_VALUE" })
    ? validState
    : { ...validState, subject: false };
  // name check
  validState = isValidInput({ input: action.state.phone, type: "PHONE" })
    ? validState
    : { ...validState, phone: false };
  // name check
  validState = isValidInput({ input: action.state.message, type: "HAS_VALUE" })
    ? validState
    : { ...validState, message: false };

  return validState;
}

const initialFormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const initialFormValidatorState = {
  name: true,
  organization: true,
  email: true,
  phone: true,
  subject: true,
  message: true,
};
type FormType = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type FormValidatorType = {
  name: boolean;
  organization: boolean;
  email: boolean;
  phone: boolean;
  subject: boolean;
  message: boolean;
};
type FormValidatorActions = {
  state: FormType;
};
type FormActions = {
  type: ActionTypes;
  payload: string;
};

type ActionTypes =
  | "EMAIL"
  | "PHONE"
  | "NAME"
  | "MESSAGE"
  | "SUBJECT"
  | "ORGANIZATION";

export default ContactMeForm;
