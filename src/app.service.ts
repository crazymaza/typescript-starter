import { Injectable, Logger } from '@nestjs/common';
import { InfoDto } from './dto/info.dto';
import { ResultDto } from './dto/result.dto';

import { promise } from 'ping';

@Injectable()
export class AppService {
  async getPingInfo({ params }: InfoDto): Promise<ResultDto> {
    let response = null;
    const config = {
      extra: ['-c', '10'],
    };
    Logger.log(`===== Starting ping to ${params.host} =====`);

    const waitTimeout = setTimeout(() => {
      !response && Logger.log(`===== Wait for it... =====`);
    }, 1000);

    response = await promise.probe(params.host, config);
    Logger.log(`===== Ping to ${params.host} completed =====`);

    clearTimeout(waitTimeout);

    return new ResultDto({
      id: params.id,
      size: 10,
      used: 10,
      description: params.host,
      status: 0,
      ping: response?.avg,
      apps: [
        {
          id: params.id,
          bundleId: params.host,
          platform: 0,
          title: 'Ping data',
        },
      ],
    });
  }
}
