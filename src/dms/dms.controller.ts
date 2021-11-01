import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DmsService } from './dms.service';

@Controller('api/workspaces/:workspaceId/dms')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}

  @Get(':dmId/chats')
  getChats(@Query() query, @Param() param) {
    console.log(param.wor);
    console.log(query.perPage, query.page);
  }

  @Post(':dmId/chats')
  postChat(@Param() param, @Body() body) {}
}
