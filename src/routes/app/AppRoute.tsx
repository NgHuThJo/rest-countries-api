// Third party
import { Link, Outlet } from "react-router-dom";
// Components
import { Main } from "@/components/ui/main";
import { Navigation } from "@/components/ui/navigation";

export function AppRoute() {
  return (
    <>
      <Navigation className="header">
        <h1>
          <Link to="/">Where in the world?</Link>
        </h1>
      </Navigation>
      <Main className="container">
        <Outlet />
      </Main>
    </>
  );
}
