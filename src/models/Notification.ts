import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, ForeignKey, BelongsTo
} from "sequelize-typescript";
import {Questions} from "./Questions";

import {Users} from "./Users";

@Table({tableName: 'notifications'})
export class Notification extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number


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
