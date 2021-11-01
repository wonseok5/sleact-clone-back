import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'admin@whoyaho.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @ApiProperty({ example: 'admin', description: '닉네임', required: true })
  nickanme: string;

  @ApiProperty({
    example: 'admin123!',
    description: '비밀번호',
    required: true,
  })
  password: string;
}
