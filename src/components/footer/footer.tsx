import dayjs from "dayjs";
import LanguageSelect from "../language-select/language-select";
import { Layout } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Layout.Footer className="footer">
      <span className="footer-text">
        React MobX Boilerplate © {dayjs().year()}
      </span>
      <LanguageSelect />
    </Layout.Footer>
  );
};

export default Footer;
