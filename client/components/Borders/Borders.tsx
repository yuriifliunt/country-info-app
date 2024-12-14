import Link from 'next/link';
import { BorderCountry } from '@/types/country';

interface BorderCountriesProps {
  borderCountries: BorderCountry[];
}

const BorderCountries: React.FC<BorderCountriesProps> = ({
  borderCountries,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Border Countries
      </h2>
      <ul className="space-y-2">
        {borderCountries.length > 0 ? (
          borderCountries.map((border) => (
            <li
              key={border.countryCode}
              className="p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              <Link
                href={`/country/${border.countryCode}?country=${border.commonName}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {border.officialName}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No border countries found</li>
        )}
      </ul>
    </div>
  );
};

export default BorderCountries;
