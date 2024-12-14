import { CountryInfo } from '@/types/country';
import Image from 'next/image';

interface CountryDetailsProps {
  countryInfo: CountryInfo;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ countryInfo }) => {
  return (
    <div className="flex items-center mb-8">
      {countryInfo.flagUrl && (
        <Image
          width={64}
          height={48}
          src={countryInfo.flagUrl}
          alt={`${countryInfo.countryCode} flag`}
          className="w-16 h-12 mr-6"
        />
      )}
      <div>
        <h1 className="text-4xl font-extrabold text-gray-800">
          {countryInfo.countryCode}
        </h1>
      </div>
    </div>
  );
};

export default CountryDetails;
