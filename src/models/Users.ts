import {
    Model,
    Column,
    Table,
    BelongsToMany,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, HasOne, HasMany, Unique, BeforeCreate, AllowNull, Default
} from "sequelize-typescript";
import {Questions} from "./Questions";
import bcrypt from 'bcrypt'
import {Votes} from "./Votes";
import {Subscription} from "./Subscription";
import {Rater} from "./Rater";

@Table({tableName: 'users'})
export class Users extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Unique
    @Column(DataType.STRING)
    email!: string

    @Unique
    @Column(DataType.STRING)
    username!: string

    @AllowNull(true)
    @Column(DataType.STRING)
    profileURL !: string

    @AllowNull(true)
    @Column(DataType.STRING)
    fullName!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    location!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    title!: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    twitter!: string

    @AllowNull(true)
    @Column(DataType.STRING)
    github!: string

    @Column(DataType.STRING)
    password !: string

    @Default(1)
    @Column(DataType.BIGINT)
    reputation !: number

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;

    @HasMany(() => Subscription)
    subscription !: Subscription[]

    @HasMany(() => Questions)
    question!: Questions[]

    @HasMany(() => Votes)
    votes !: Votes[]

    @HasMany(() => Rater)
    rater !: Rater[]


    @BeforeCreate
    static encryptPassword(user: Users) {
        user.password = bcrypt.hashSync(user.password, 8);
    }
}
