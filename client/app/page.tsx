import CountryList from '@/components/CountryList/CountryList';
import { fetchCountries } from '@/lib/fetchCountries';

const HomePage = async () => {
  const countries = await fetchCountries();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-100">
      <div className="p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Welcome to the Country Info App
        </h1>
        <div className="max-w-3xl mx-auto">
          <CountryList countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
