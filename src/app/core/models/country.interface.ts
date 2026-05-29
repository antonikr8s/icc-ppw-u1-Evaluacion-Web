export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CountryListItem {
  name: CountryName;
  capital: string[];
  flags: CountryFlags;
}

export interface CountryDetailItem {
  name: CountryName;
  capital: string[];
  flags: CountryFlags;
  population: number;
  maps: CountryMaps;
}
