import { NavLink } from "react-router-dom";

export default function Navbar(path, title) {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-[#C92071] leading-6 text-xs cursor-pointer underline underline-offset-4"
            : "text-[#474747] leading-6 text-xs cursor-pointer"
        }
      >
        {title}
      </NavLink>

      <NavLink to={path}></NavLink>
    </>
  );
}
