import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

jest.mock('ping');

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getPingInfo', () => {
    it('should return ping response', async () => {
      const spyLogger = jest.spyOn(Logger, 'log');
      const appService = app.get(AppService);
      await appService.getPingInfo({
        method: 'test.getInfoById',
        params: { id: '123', host: 'google.com' },
      });
      expect(spyLogger).toHaveBeenCalledTimes(2);
    });
  });
});
