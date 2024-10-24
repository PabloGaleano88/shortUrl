import "./section1.css";
import Form from "../../components/form/form";
import LoginForm from "../../components/login/loginForm";

const section1 = ({ isSidebarOpen, activeForm, setIsSidebarOpen }) => {
  return (
    <div className="section1">
      <div className="smash">
        <h1>ShortMyURL</h1>
      </div>
      <div className="link-form">
        <Form />
      </div>
      <div>
        <LoginForm
          activeForm={activeForm}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
};

export default section1;
