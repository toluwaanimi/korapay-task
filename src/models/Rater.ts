import {
    Model,
    Column,
    Table,
    BelongsToMany,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    PrimaryKey, DataType, ForeignKey, BelongsTo
} from "sequelize-typescript";

import {Users} from "./Users";

@Table({tableName: 'vote_rate'})
export class Rater extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number


    @Column(DataType.INTEGER)
    counts !: number

    @Column(DataType.STRING)
    date !: string

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
