import { Model, Table, Column, DataType, PrimaryKey, Default, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Product from './product.model';

@Table({
    tableName: 'comments',
})
export default class Comment extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUIDV4)
    id: any;

    @Column(DataType.TEXT)
    content: string;

    @Column(DataType.INTEGER)
    rating: number;

    @ForeignKey(() => Product)
    @Column(DataType.UUIDV4)
    productId: any;

    @Column(DataType.STRING)
    userUUID: string;

    @BelongsTo(() => Product)
    product: Product;
}
