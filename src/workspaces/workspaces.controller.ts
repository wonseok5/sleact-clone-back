import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { WorkspacesService } from './workspaces.service';
@ApiTags('workspaces')
@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace(@Body() body) {}

  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Get(':workspaceId/members')
  getAllMembersFromWorkspace(@Param() param) {}

  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Post(':workspaceId/members')
  inviteMembersToWorkspace(@Param() param, @Body() body) {}

  @ApiParam({ name: 'memberId', description: '유저 식별자' })
  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Delete(':workspaceId/members/:memberId')
  expelMemberFromWorkspace(@Param() param) {}

  @ApiParam({ name: 'memberId', description: '유저 식별자' })
  @ApiParam({ name: 'workspaceId', description: '워크스페이스 식별자' })
  @Get(':workspaceId/members/:memberId')
  getMemberInfoInWorkspace() {}
}
