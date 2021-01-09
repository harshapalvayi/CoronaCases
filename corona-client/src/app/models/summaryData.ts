
export class Summary {
  message: string;
  global: Global;
  countries: Countries[];
  date: Date;
}

export class Global {
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
}

export class Countries {
   country: string;
   countryCode: string;
   slug: string;
   newConfirmed: number;
   totalConfirmed: number;
   newDeaths: number;
   totalDeaths: number;
   newRecovered: number;
   totalRecovered: number;
   date: Date;
}

