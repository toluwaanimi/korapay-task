import {
    Model,
    Column,
    Table,
    BelongsToMany,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, ForeignKey, BelongsTo,
} from "sequelize-typescript";
import {Questions} from "./Questions";
import bcrypt from 'bcrypt'
import {Users} from "./Users";
import {Answers} from "./Answers";

@Table({tableName: 'comments'})
export class Comments extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number


    @Column(DataType.TEXT)
    comment!: string


    @BelongsTo(() => Answers)
    answers!: Answers

    @ForeignKey(() => Answers)
    @Column(DataType.INTEGER)
    answerId !: number


    @BelongsTo(() => Questions)
    questions!: Questions

    @ForeignKey(() => Questions)
    @Column(DataType.INTEGER)
    questionId !: number

    @BelongsTo(() => Users)
    users!: Users

    @ForeignKey(() => Users)
    @Column(DataType.INTEGER)
    userId !: number

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;


}