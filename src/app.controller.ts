import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InfoDto } from './dto/info.dto';
import { ResultDto } from './dto/result.dto';

@Controller('api/test/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('getInfoById')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getInfoById(
    @Body(new ValidationPipe()) info: InfoDto,
  ): Promise<ResultDto> {
    return this.appService.getPingInfo(info);
  }
}
