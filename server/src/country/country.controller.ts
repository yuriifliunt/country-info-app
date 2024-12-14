import { Controller, Get, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('list')
  @ApiOperation({ summary: 'Get a list of available countries' })
  @ApiResponse({
    status: 200,
    description: 'Successfully received the list of available countries',
  })
  async getAvailableCountries() {
    return await this.countryService.getAvailableCountries();
  }

  @Get('info')
  @ApiOperation({
    summary: 'Get detailed information about a specific country',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully received country information',
  })
  @ApiQuery({
    name: 'countryCode',
    required: true,
    type: String,
    description: 'The country code',
  })
  @ApiQuery({
    name: 'country',
    required: true,
    type: String,
    description: 'The name of the country',
  })
  async getCountryInfo(
    @Query('countryCode') countryCode: string,
    @Query('country') country: string,
  ) {
    const countryModifiedQuery = country.split('-').join(' '); // example: United-Kingdom query
    return await this.countryService.getCountryInfo({
      country: countryModifiedQuery,
      countryCode,
    });
  }
}
