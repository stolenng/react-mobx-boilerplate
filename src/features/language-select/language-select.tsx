import { Select } from "antd";
import { Languages } from "../../stores/ui/ui-store";
import { useTranslation } from "react-i18next";
import { useStore } from "../../helpers/use-store";

const { Option } = Select;

const LanguageSelect = () => {
  const { uiStore } = useStore();
  const { t } = useTranslation();

  const changeLanguage = (lang: string) =>
    uiStore.updateLanguage(lang as Languages);

  return (
    <Select defaultValue={uiStore.currentLanguage} onSelect={changeLanguage}>
      <Option value={Languages.Hebrew}>{t("hebrew")}</Option>
      <Option value={Languages.English}>{t("english")}</Option>
    </Select>
  );
};

export default LanguageSelect;
