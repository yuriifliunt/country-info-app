import { Country } from '@/types/country';
import Link from 'next/link';

interface CountryListProps {
  countries?: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl overflow-y-auto max-h-[80vh]">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Countries List
      </h1>
      <ul className="space-y-4">
        {countries ? (
          countries.map((country) => (
            <li
              key={country.countryCode}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              <Link
                href={`/country/${country.countryCode}?country=${country.name}`}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800"
              >
                {country.name}
              </Link>
              <span className="text-sm text-gray-500">
                {country.countryCode}
              </span>
            </li>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500">
            There are no countries available.
          </p>
        )}
      </ul>
    </div>
  );
};

export default CountryList;
