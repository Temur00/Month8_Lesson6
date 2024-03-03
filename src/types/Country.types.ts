export type CountryTypes = {
  name: {
    common: string; // Common name of the country
    official: string; // Official name of the country
    nativeName: {
      [key: string]: string; // Native names of the country in various languages
    };
  };
  capital: string; // Capital city of the country
  flags: {
    svg: string; // URL of the SVG flag
    png: string; // URL of the PNG flag
  };
  population: number; // Population of the country
  region: string; // Region of the country
};
