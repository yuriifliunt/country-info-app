import { Country } from '@/types/country';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}country/list`,
      {
        cache: 'no-store',
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};
