import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'userprofile',
})
export default class Profile extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    uid: string;

    @Column(DataType.BOOLEAN)
    isAdmin: boolean;

    @AllowNull
    @Column(DataType.STRING)
    country: string;

    @AllowNull
    @Column(DataType.TEXT)
    about: string;
}
