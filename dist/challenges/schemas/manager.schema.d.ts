import { Document } from 'mongoose';
export declare class Manager extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    verified: boolean;
}
export declare const ManagerSchema: import("mongoose").Schema<Manager, import("mongoose").Model<Manager, any, any, any, (Document<unknown, any, Manager, any, import("mongoose").DefaultSchemaOptions> & Manager & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Manager, any, import("mongoose").DefaultSchemaOptions> & Manager & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}), any, Manager>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Manager, Document<unknown, {}, Manager, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Manager, Document<unknown, {}, Manager, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    username?: import("mongoose").SchemaDefinitionProperty<string, Manager, Document<unknown, {}, Manager, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Manager, Document<unknown, {}, Manager, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string, Manager, Document<unknown, {}, Manager, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    role?: import("mongoose").SchemaDefinitionProperty<string, Manager, Document<unknown, {}, Manager, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    verified?: import("mongoose").SchemaDefinitionProperty<boolean, Manager, Document<unknown, {}, Manager, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Manager & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Manager>;
