import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  IsNumberString,
  Max,
  Min,
  Validate,
} from 'class-validator';

export class AppDto {
  id: string;
  bundleId: string;
  title: string;
  @Min(0)
  @Max(1)
  platform: number;

  constructor(partial: Partial<AppDto>) {
    Object.assign(this, partial);
  }
}

export class ResultDto {
  @IsNumberString()
  id: string;
  @IsNumber()
  @Min(1)
  size: number;
  @IsNumber()
  @Min(1)
  @Validate((obj: ResultDto, value: number) => value <= obj.size)
  used: number;
  description: string;
  name: string;
  @Min(0)
  @Max(3)
  status: number;
  @Min(0.1)
  ping: number;
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => AppDto)
  apps: AppDto[];

  constructor(partial: Partial<ResultDto>) {
    Object.assign(this, partial);
  }
}
