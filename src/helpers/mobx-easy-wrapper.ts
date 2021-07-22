import {
  getRoot as mobxEasyGetRoot,
  getEnv as mobxEasyGetEnv,
} from "mobx-easy";
import RootStore from "../stores/root-store";
import { RootEnv } from "./create-store";

export const getRoot = (): RootStore => mobxEasyGetRoot<RootStore>();
export const getEnv = (): RootEnv => mobxEasyGetEnv<RootEnv>();
