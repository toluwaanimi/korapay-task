import {IsEmail, IsOptional, IsString, ValidateNested} from 'class-validator';

export class createUserDTO {

    @IsString()
    @IsEmail()
    public email!: string;

    @IsString()
    public password!: string;

}


export class loginUserDTO {
    @IsString()
    @IsOptional()
    public email!: string;

    @IsString()
    public password!: string;
}

