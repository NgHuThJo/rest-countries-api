// Third party
import { Link, Outlet } from "react-router-dom";
// Components
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Main } from "@/components/ui/main";
import { Navigation } from "@/components/ui/navigation";
// Assets
import { moonFilled, moonOutline } from "@/assets";

export function AppRoute() {
  return (
    <>
      <Navigation>
        <h1>
          <Link to="/">Where in the world?</Link>
        </h1>
        <div>
          <Button>
            <Image className="icon" src={moonOutline}></Image>
          </Button>
          <div>Dark mode</div>
        </div>
      </Navigation>
      <Main className="container">
        <Outlet />
      </Main>
    </>
  );
}
