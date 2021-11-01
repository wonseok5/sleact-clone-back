import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({ required: true, example: 1, description: '아이디' })
  id: number;
}
