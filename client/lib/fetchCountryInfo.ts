import { CountryInfo } from '@/types/country';

export const fetchCountryInfo = async ({
  country,
  countryCode,
}: {
  country: string;
  countryCode: string;
}): Promise<CountryInfo | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}country/info?countryCode=${countryCode}&country=${country}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching country info:', error);
    return null;
  }
};
