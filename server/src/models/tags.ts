import { sequelize } from '../config/dbConfig';
import { Model, Optional, DataTypes } from 'sequelize';

interface TagAttributes {
    id: number,
    content?: string,
    userId: number
}

interface TagCreationAttributes extends Optional<TagAttributes, 'id'> {}

export interface TagInstance extends Model<TagAttributes, TagCreationAttributes>, TagAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export const TagModel = sequelize.define<TagInstance>(
    'tags',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.NUMBER,
            primaryKey: true,
            unique: true
        },
        content: {
            type: DataTypes.STRING
        },
        userId: {
            allowNull: false,
            type: DataTypes.NUMBER,
            field: 'user_id',
            references: {
                model: 'users',
                key: 'id'
            }
        }
    }
);