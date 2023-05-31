import { NavLink } from "react-router-dom";
export const Menu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <h1>Manu Panel</h1>
        <NavLink
          to="/manufacture"
          className="list-group-item "
          aria-current="true"
        >
            Manufacturer
        </NavLink>
        <NavLink to="/transport" className="list-group-item list-group-item-action">
          Transporter
        </NavLink>
      </div>
    </div>
  );
};
