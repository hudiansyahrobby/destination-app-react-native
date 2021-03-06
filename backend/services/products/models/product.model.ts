import { Model, Table, Column, DataType, PrimaryKey, Default, HasMany } from 'sequelize-typescript';
import Comment from './comment.model';

@Table({
    tableName: 'products',
})
export default class Product extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    city: string;

    @Column(DataType.STRING)
    province: string;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.UUIDV4)
    categoryId: any;

    @HasMany(() => Comment, 'productId')
    comments: Comment;
}
