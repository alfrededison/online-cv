import {PeriodData, ResumeData, TextLinkData} from "../../../../interface";
import {AppAction} from "../../interface";
import {ActionTypes} from "../types";

const initialTextLink: TextLinkData = {
  Text: '',
  Link: '',
};

const initialPeriod: PeriodData = {
  From: new Date(),
  To: '',
};

const initialState: ResumeData = {
  About: [],
  Certificates: [],
  Education: {
    Title: '',
    School: '',
    Period: {...initialPeriod},
    Description: '',
    CPA: 0,
  },
  Experiences: [],
  Interests: [],
  Languages: [],
  PrimaryContact: {
    Address: {...initialTextLink},
    Phone: {...initialTextLink},
    Email: {...initialTextLink},
  },
  Profile: {
    Title: '',
    Avatar: '',
    Name: '',
    DOB: new Date(),
  },
  SecondaryContacts: [],
  Skills: []
};

export default function (state = initialState, action: AppAction): ResumeData {
  switch (action.type) {
    case ActionTypes.LOAD_RESUME:
      return {
        ...initialState,
        ...action.payload
      };
    case ActionTypes.EDIT_RESUME:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}