// Third party
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// Components
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Main } from "@/components/ui/main";
import { Navigation } from "@/components/ui/navigation";
// Assets
import { moonFilled, moonOutline } from "@/assets";

export function AppRoute() {
  const [isDark, setIsDark] = useState(() => {
    const isThemeDark = localStorage.getItem("isDark");

    return !isThemeDark ? false : JSON.parse(isThemeDark);
  });

  useEffect(() => {
    const root = document.getElementById("root");

    if (isDark) {
      root?.classList.add("dark");
    }
  }, []);

  const handleThemeChange = () => {
    const root = document.getElementById("root");

    root?.classList.toggle("dark");
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark((prev: boolean) => !prev);
  };

  return (
    <>
      <Navigation>
        <div>
          <h1>
            <Link to="/">Where in the world?</Link>
          </h1>
          <div>
            <Button onClick={handleThemeChange}>
              <Image
                className="icon"
                src={isDark ? moonFilled : moonOutline}
              ></Image>
            </Button>
            <div>Dark mode</div>
          </div>
        </div>
      </Navigation>
      <Main className="container">
        <Outlet />
      </Main>
    </>
  );
}
