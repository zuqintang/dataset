import { NATIONAL, ENTERPRISE } from "../../types";

export const FormatStandard = value => {
  switch (value) {
    case NATIONAL:
      return "国标";
    case ENTERPRISE:
      return "企标";
    default:
      return "N/A";
  }
};
