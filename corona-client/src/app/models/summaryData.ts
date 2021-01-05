
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
   Country: string;
   CountryCode: string;
   Slug: string;
   NewConfirmed: number;
   TotalConfirmed: number;
   NewDeaths: number;
   TotalDeaths: number;
   NewRecovered: number;
   TotalRecovered: number;
   date: Date;
}

