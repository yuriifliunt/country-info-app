import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CountryService {
  private readonly nagerApiBaseUrl: string;
  private readonly countriesNowApiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.nagerApiBaseUrl = this.configService.get<string>('NAGER_API_BASE_URL');
    this.countriesNowApiBaseUrl = this.configService.get<string>(
      'COUNTRIES_NOW_API_BASE_URL',
    );
  }

  async getAvailableCountries() {
    const url = `${this.nagerApiBaseUrl}/AvailableCountries`;
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error(
        `Error while getting available countries: ${error.message}`,
      );
    }
  }

  async getCountryInfo({
    country,
    countryCode,
  }: {
    country: string;
    countryCode: string;
  }) {
    try {
      const borderCountries = await this.getBorderCountries(countryCode);

      const populationData = await this.getPopulationData(country);

      const flagUrl = await this.getCountryFlag(countryCode);

      return {
        countryCode,
        borderCountries,
        populationData,
        flagUrl,
      };
    } catch (error) {
      throw new Error(`Error while getting country info: ${error.message}`);
    }
  }

  private async getBorderCountries(countryCode: string) {
    const url = `${this.nagerApiBaseUrl}/CountryInfo/${countryCode}`;
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data.borders || [];
    } catch (error) {
      console.error(
        `Error while getting neighboring countries ${countryCode}: ${error.message}`,
      );
      return `No border countries for ${countryCode}`;
    }
  }

  private async getPopulationData(country: string) {
    const url = `${this.countriesNowApiBaseUrl}/countries/population`;
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const populationList = response.data.data;

      return populationList.find((c: any) => c.country === country);
    } catch (error) {
      console.error(
        `Error while getting country population ${country}: ${error.message}`,
      );
      return `No population for ${country}`;
    }
  }

  private async getCountryFlag(countryCode: string) {
    const url = `${this.countriesNowApiBaseUrl}/countries/flag/images`;
    try {
      const response = await firstValueFrom(
        this.httpService.post(url, {
          iso2: countryCode,
        }),
      );
      return response.data.data.flag || '';
    } catch (error) {
      console.error(
        `Error while getting country flag ${countryCode}: ${error.message}`,
      );
      return null;
    }
  }
}
