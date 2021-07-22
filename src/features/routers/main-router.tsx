import { useEffect } from "react";
import { useStore } from "../../helpers/use-store";
import { useHistory, useLocation } from "react-router-dom";

const MainRouter = () => {
  const { uiStore } = useStore();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // if there was url before login redirect back to it
    if (uiStore.initialUrl && uiStore.initialUrl !== location.pathname) {
      history.push(uiStore.initialUrl);
      uiStore.initialUrl = "";
    } else {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default MainRouter;
