interface Details {
  passportNumber: string;
  firstNames: string;
  middleNames: string;
  lastName: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  townOfBirth: string;
}

interface Circumstances {
  lostOrStolen: string;
  lostOrStolenReason: string;
  cityOrTown: string;
  country: string;
  dayOfLoss: string;
  monthOfLoss: string;
  yearOfLoss: string;
}

interface ContactDetails {
  emailAddress: string;
  confirmEmailAddress: string;
}

interface FormData {
  reportType: string;
  details: Details;
  circumstances: Circumstances;
  contactDetails: ContactDetails;
}

export type { FormData };
