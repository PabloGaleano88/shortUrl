import { useState } from "react";
import "./homePage.css";
import Header from "../../components/header/header";
import Section1 from "../../components/section1/section1";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("signIn"); // Estado para manejar el formulario activo

  const toggleSidebar = (formType) => {
    setIsSidebarOpen(true); // Abre la barra lateral
    setActiveForm(formType); // Cambia el formulario a mostrar (signIn o signUp)
  };

  return (
    <div className={isSidebarOpen ? "fade" : undefined}>
      <Header toggleSidebar={toggleSidebar} />
      <Section1
        isSidebarOpen={isSidebarOpen}
        activeForm={activeForm}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default HomePage;
