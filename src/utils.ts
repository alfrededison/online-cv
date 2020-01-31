import {SkillGroupData} from "./interface";

export const NEWLINE_REGEX = /\r\n|\r|\n/g;

export const displayYearMonth = (date: Date) => {
  let mm = date.getMonth() + 1; // getMonth() is zero-based

  return [
    date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
  ].join('/');
};

export const cpaToText = (cpa: number) => {
  if (cpa >= 3.6) {
    return "High Distinction";
  }
  if (cpa >= 3.2) {
    return "Distinction";
  }
  if (cpa >= 2.5) {
    return "Credit";
  }
  if (cpa >= 2.0) {
    return "Pass";
  }
  return "Poor";
};

export const generateMetaSkillTags = (Skills: SkillGroupData[]) => {
  return Skills.map(group =>
    group.Items.filter(item => item.Level > 50).map(item => item.Name).join(', ')
  ).join(', ');
};

export const getIcon = (type: string) => {
  const map: { [key: string]: string } = {
    Skype: 'fab fa-skype',
    LinkedIn: 'fab fa-linkedin-in',
    Github: 'fab fa-github-alt',
    Website: 'fas fa-globe'
  };
  return map[type];
};
