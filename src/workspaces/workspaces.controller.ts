import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';

@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace(@Body() body) {}

  @Get(':workspaceId/members')
  getAllMembersFromWorkspace(@Param() param) {}

  @Post(':workspaceId/members')
  inviteMembersToWorkspace(@Param() param, @Body() body) {}

  @Delete(':workspaceId/members/:memberId')
  expelMemberFromWorkspace(@Param() param) {}

  @Get(':workspaceId/members/:memberId')
  getMemberInfoInWorkspace() {}
}
