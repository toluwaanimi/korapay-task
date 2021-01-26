import {
    Model,
    Column,
    Table,
    BelongsToMany,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, HasOne, HasMany, Unique, BeforeCreate, AllowNull, Default, ForeignKey, BelongsTo
} from "sequelize-typescript";
import {Questions} from "./Questions";

import {Users} from "./Users";

@Table({tableName: 'subscription'})
export class Subscription extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number


    @Column(DataType.STRING)
    channel !: string


    @Default(true)
    @Column(DataType.BOOLEAN)
    isActive !: boolean

    @BelongsTo(() => Users)
    users!: Users

    @ForeignKey(() => Users)
    @Column(DataType.INTEGER)
    userId !: number

    @BelongsTo(() => Questions)
    questions!: Questions

    @ForeignKey(() => Questions)
    @Column(DataType.INTEGER)
    questionId !: number


    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;


}
