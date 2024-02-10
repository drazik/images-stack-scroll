import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav style={{ position: "fixed", top: 0, insetInline: 0, zIndex: 10 }}>
        <ul>
          <li>
            <Link to={`/`}>Avec texte qui scroll</Link>
          </li>
          <li>
            <Link to={`/2`}>Avec texte fixe</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
