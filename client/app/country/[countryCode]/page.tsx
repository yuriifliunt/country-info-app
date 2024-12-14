import CountryDetails from '@/components/Details/Details';
import { fetchCountryInfo } from '../../../lib/fetchCountryInfo';
import BorderCountries from '@/components/Borders/Borders';
import PopulationChart from '@/components/Population/PopulationChart';

interface CountryPageProps {
  params: {
    countryCode: string;
  };
  searchParams: {
    country: string;
  };
}

const CountryPage = async ({ params, searchParams }: CountryPageProps) => {
  const { countryCode } = params;
  const { country } = searchParams;

  const countryInfo = await fetchCountryInfo({ countryCode, country });

  if (!countryInfo) {
    throw new Error('Country data not found');
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <CountryDetails countryInfo={countryInfo} />
        <BorderCountries borderCountries={countryInfo.borderCountries} />
        <PopulationChart populationData={countryInfo.populationData} />
      </div>
    </div>
  );
};

export default CountryPage;
