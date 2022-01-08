import { sequelize } from '../config/dbConfig';
import { Model, Optional, DataTypes } from 'sequelize';

interface UserAttributes {
    id: number,
    username: string,
    password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
    createdOn?: Date;
    updatedOn?: Date;
}

export const UserModel = sequelize.define<UserInstance>(
    'users',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.NUMBER,
            primaryKey: true,
            unique: true,
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    }
);