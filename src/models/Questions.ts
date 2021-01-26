import {
    Model,
    Column,
    Table,
    BelongsToMany,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, HasOne, ForeignKey, BelongsTo, HasMany, Default
} from "sequelize-typescript";
import {Users} from "./Users";
import {Answers} from "./Answers";
import {Votes} from "./Votes";
import {Subscription} from "./Subscription";

@Table({tableName: 'questions'})
export class Questions extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number

    @Column(DataType.STRING)
    title!: string

    @Column(DataType.TEXT)
    question !: string

    @Column(DataType.ARRAY(DataType.STRING))
    tags !: string[]


    @Default(false)
    @Column(DataType.BOOLEAN)
    is_answered !: boolean

    @Default(0)
    @Column(DataType.INTEGER)
    views !: number
    @ForeignKey(() => Users)
    @Column(DataType.INTEGER)
    userId !: number
    @BelongsTo(() => Users)
    user !: Users

    @HasMany(() => Votes)
    votes!: Votes[]

    @HasMany(() => Answers,)
    answers !: Answers[]

    @HasMany(() => Subscription)
    subscription!: Subscription[]
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;

}
