export interface Country {
  name: string;
  countryCode: string;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[] | null;
}

export interface PopulationCount {
  year: number;
  value: number;
}

export interface PopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts?: PopulationCount[];
}

export interface CountryInfo {
  countryCode: string;
  flagUrl: string | null;
  borderCountries: BorderCountry[];
  populationData: PopulationData;
}
