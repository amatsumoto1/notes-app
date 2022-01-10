import { sequelize } from '../config/dbConfig';
import { Model, Optional, DataTypes } from 'sequelize';

interface NoteTagAttributes {
    id: number,
    userId: number,
    noteId: number,
    tagId: number
}

interface NoteTagCreationAttributes extends Optional<NoteTagAttributes, 'id'> {}

export interface NoteTagInstance extends Model<NoteTagAttributes, NoteTagCreationAttributes>, NoteTagAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export const NoteTagModel = sequelize.define<NoteTagInstance>(
    'noteTags',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.NUMBER,
            primaryKey: true,
            unique: true
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
        noteId: {
            allowNull: false,
            type: DataTypes.NUMBER,
            field: 'note_id',
            references: {
                model: 'notes',
                key: 'id'
            }
        },
        tagId: {
            allowNull: false,
            type: DataTypes.NUMBER,
            field: 'tags_id',
            references: {
                model: 'tags',
                key: 'id'
            }
        }
    }
)