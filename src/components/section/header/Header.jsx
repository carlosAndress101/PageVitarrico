import "./Header.css";
import { useState } from "react";
import EmergenteCreate from "../Emergente/Emergente";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

const Header = () => {
  const [CreateCustomerBtn, setCreateCustomerBtn] = useState(false);

  return (
    <>
      <header>
        <img className="logo-Header" src="src\components\image\Vitarrico.ico" alt="logo" />
        <nav className="nav__links">
          <ul>
            <li>
              <button className="boton-crear" onClick={() => setCreateCustomerBtn(!CreateCustomerBtn)}>{<BsFileEarmarkPersonFill/>}</button>
            </li>
          </ul>
        </nav>
      </header>
      <EmergenteCreate
        CreateCustomerBtn={CreateCustomerBtn}
        setCreateCustomerBtn={setCreateCustomerBtn}
      />
    </>
  );
};

export default Header;
