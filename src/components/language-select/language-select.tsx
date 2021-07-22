import { Typography } from "antd";
import { Languages } from "../../stores/ui/ui-store";
import { useTranslation } from "react-i18next";
import { useStore } from "../../helpers/use-store";

const LanguageSelect = () => {
  const { uiStore } = useStore();
  const { t } = useTranslation();

  const changeLanguage = (lang: string) =>
    uiStore.updateLanguage(lang as Languages);

  return (
    <>
      <Typography.Link
        disabled={uiStore.currentLanguage === Languages.Hebrew}
        onClick={() => changeLanguage(Languages.Hebrew)}
      >
        {t("hebrew")}
      </Typography.Link>
      <span> | </span>
      <Typography.Link
        disabled={uiStore.currentLanguage === Languages.English}
        onClick={() => changeLanguage(Languages.English)}
      >
        {t("english")}
      </Typography.Link>
    </>
  );
};

export default LanguageSelect;
