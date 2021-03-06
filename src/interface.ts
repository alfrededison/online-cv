export interface ResumeData {
  Profile: ProfileData
  About: AboutData
  PrimaryContact: PrimaryContactData
  SecondaryContacts: SecondaryContactData[]
  Skills: SkillGroupData[]
  Experiences: ExperienceData[]
  Education: EducationData
  Certificates: CertificateData[]
  Languages: LanguageData[]
  Interests: InterestData[]
}

export interface ProfileData {
  Name: string
  Title: string
  Avatar: string
  DOB: Date
}

export type AboutData = string

export interface PrimaryContactData {
  Address: TextLinkData
  Email: TextLinkData
  Phone: TextLinkData
}

export interface SecondaryContactData {
  Type: string
  Value: TextLinkData
}

export interface TextLinkData {
  Text: string
  Link: string
}

export interface ExperienceData {
  Title: string
  Company: TextLinkData
  Period: PeriodData
  Projects: ProjectData[]
}

export interface ProjectData {
  Description: string
  Responsibilities: string
  ResponsibilityGroups?: SubProjectData[]
  Tags?: string[]
}

export interface SubProjectData {
  Description: string
  Responsibilities: string
}

export interface EducationData {
  Title: string
  School: string
  Period: PeriodData
  Description: string
  CPA: number
}

export interface PeriodData {
  From: Date | string
  To: Date | string
}

export interface SkillGroupData {
  Name: string
  Items: SkillItemData[]
}

export interface SkillItemData {
  Name: string
  Level: number
}

export interface CertificateData {
  Title: string
  School: string
  Date: Date
  Description: string
}

export interface LanguageData {
  Language: string
  Level: string
}

export type InterestData = string