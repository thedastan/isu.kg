export enum EnumIntl {
  KYRGYZ = "kk",
  RUSSIAN = "ru",
  ENGLISH = "en",
}

// types
export type IntlType = EnumIntl.KYRGYZ | EnumIntl.RUSSIAN | EnumIntl.ENGLISH;

export interface ILocale {
  name: string;
  locale: IntlType;
  short_name: string;
}

export interface PropsWithTitle {
  title: string;
  query?: string;
}
