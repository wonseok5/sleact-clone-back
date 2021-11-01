import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DmsService } from './dms.service';

@ApiTags('dms')
@Controller('api/workspaces/:workspaceId/dms')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}

  @ApiParam({
    name: 'workspaceId',
    description: '워크스페이스 식별자',
    required: true,
  })
  @ApiParam({
    name: 'userId',
    description: '디엠과 연결된 유저 아이디',
    required: true,
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':userId/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
  }

  @ApiParam({
    name: 'workspaceId',
    required: true,
    description: '워크스페이스 식별자',
  })
  @ApiParam({
    name: 'userId',
    required: true,
    description: '디엠과 연결된 유저 아이디',
  })
  @Post(':userId/chats')
  postChat(@Param() param, @Body() body) {}
}
