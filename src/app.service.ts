import { Injectable, Logger } from '@nestjs/common';
import { InfoDto } from './dto/info.dto';
import { AppDto, ResultDto } from './dto/result.dto';
import { exec } from 'child_process';
import * as Util from 'util';

@Injectable()
export class AppService {
  async getPingInfo({ params }: InfoDto): Promise<ResultDto> {
    Logger.log(`===== Starting ping to ${params.host} =====`);

    const asyncExec = Util.promisify(exec);

    const waitTimeout = setTimeout(() => {
      Logger.log(`===== Wait for it... =====`);
    }, 4000);

    const { stdout } = await asyncExec(`ping -c 10 ${params.host}`);

    Logger.log(`===== Ping to ${params.host} completed =====`);

    clearTimeout(waitTimeout);

    return new ResultDto({
      id: params.id,
      size: 10,
      used: 10,
      description: params.host,
      status: 0,
      ping: Number(
        stdout
          ?.slice(stdout?.indexOf('round-trip'), stdout?.lastIndexOf('ms'))
          ?.split('=')[1]
          ?.split('/')[1],
      ),
      apps: [
        new AppDto({
          id: params.id,
          bundleId: params.host,
          platform: 0,
          title: 'Ping data',
        }),
      ],
    });
  }
}
