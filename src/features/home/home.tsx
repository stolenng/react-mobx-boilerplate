import { useStore } from "../../helpers/use-store";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import TodoList from "../todo-list/todo-list";

const Home = () => {
  const { t } = useTranslation();
  const {
    uiStore: { authStore },
  } = useStore();

  return (
    <div>
      <div>
        {t("hello")} {authStore.user?.username}
        <Button type="primary" danger onClick={authStore.logout}>
          {t("logout")}
        </Button>
      </div>

      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
