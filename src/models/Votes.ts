import {
    Model,
    Column,
    Table,
    BelongsToMany,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, HasOne, HasMany, Unique, ForeignKey, BelongsTo, Default,
} from "sequelize-typescript";
import {Questions} from "./Questions";
import bcrypt from 'bcrypt'
import {Users} from "./Users";
import {Answers} from "./Answers";

type VoterStatus = 'upvote' | 'downvote';

@Table({tableName: 'votes'})
export class Votes extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number


    @Default('')
    @Column(DataType.ENUM('upvote', 'downvote'))
    voteType !: VoterStatus

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
