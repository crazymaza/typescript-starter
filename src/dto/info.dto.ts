import { Type } from 'class-transformer';
import {
  IsNumberString,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';

class ParamsDto {
  @IsNumberString()
  id: string;
  @IsString()
  host: string;
}

export class InfoDto {
  @IsString()
  @Matches(/^test\.getInfoById$/)
  method: string;
  @ValidateNested()
  @Type(() => ParamsDto)
  params: ParamsDto;
}
