import { sequelize } from '../config/dbConfig';
import { Model, Optional, DataTypes } from 'sequelize';

interface NoteAttributes {
    id: number,
    title?: string,
    content?: string,
    color?: string,
    userId: number,
    favorite: boolean
}

interface NoteCreationAttributes extends Optional<NoteAttributes, 'id'> {}

export interface NoteInstance extends Model<NoteAttributes, NoteCreationAttributes>, NoteAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export const NoteModel = sequelize.define<NoteInstance>(
    'notes',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.NUMBER,
            primaryKey: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT
        },
        color: {
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
        },
        favorite: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        }
    }
)