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
import {Questions} from "./Questions";
import {Votes} from "./Votes";

@Table({tableName: 'answers'})
export class Answers extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number


    @Column(DataType.TEXT)
    answer!: string

    @ForeignKey(() => Questions)
    @Column(DataType.INTEGER)
    questionId !: number


    @BelongsTo(() => Questions)
    questions !: Questions

    @ForeignKey(() => Users)
    @Column(DataType.INTEGER)
    userId !: number
    @BelongsTo(() => Users)
    user !: Users

    @Default(false)
    @Column(DataType.BOOLEAN)
    is_answer !: boolean

    @HasMany(() => Votes)
    votes!: Votes[]
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;

}
