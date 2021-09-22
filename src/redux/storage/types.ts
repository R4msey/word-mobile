import { IMenu } from "../../interfaces/menu";

interface languageState {
  data: IMenu[] | never[]
  locale: string,
  currentData: IMenu[] | never[]
}

export const initialState: languageState = {
  data: [],
  locale: '',
  currentData: []
}