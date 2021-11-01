import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { ChannelsService } from './channels.service';

@Controller('api/workspaces/:workspaceId/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  getAllChannels(@Param() param) {}

  @Post()
  createChannel(@Param() param) {}

  @Get(':channelName')
  getSpecificChannel(@Param() param) {}

  @Get(':channelName/chats')
  getChannelChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.workspaceId, param.channelName);
  }

  @Post(':channelName/chats')
  createChannelChat(@Param() param, @Body() Body) {}

  @Get(':channelName/members')
  getChannelMembers(@Param() param) {}

  @Post(':channelName/members')
  inviteMembers(@Param() param) {}
}
