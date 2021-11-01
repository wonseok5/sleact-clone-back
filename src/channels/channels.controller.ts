import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { ChannelsService } from './channels.service';

@ApiTags('channels')
@Controller('api/workspaces/:workspaceId/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Get()
  getAllChannels(@Param() param) {}

  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Post()
  createChannel(@Param() param) {}

  @ApiParam({ name: 'channelName', description: '채널이름' })
  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Get(':channelName')
  getSpecificChannel(@Param() param) {}

  @ApiQuery({ name: 'perPage', description: '한 번에 가져올 개수' })
  @ApiQuery({ name: 'page', description: '불러올 페이지' })
  @ApiParam({ name: 'channelName', description: '채널이름' })
  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Get(':channelName/chats')
  getChannelChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.workspaceId, param.channelName);
  }

  @ApiParam({ name: 'channelName', description: '채널이름' })
  @ApiParam({ name: 'memberId', description: '유저 식별자' })
  @Post(':channelName/chats')
  createChannelChat(@Param() param, @Body() Body) {}

  @ApiParam({ name: 'channelName', description: '채널이름' })
  @ApiParam({ name: 'memberId', description: '유저 식별자' })
  @Get(':channelName/members')
  getChannelMembers(@Param() param) {}

  @ApiParam({ name: 'channelName', description: '채널이름' })
  @ApiParam({ name: 'memberId', description: '유저 식별자' })
  @Post(':channelName/members')
  inviteMembers(@Param() param) {}
}
