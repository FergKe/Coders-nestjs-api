import { Document, Types } from 'mongoose';
import { Manager } from './manager.schema';
export declare class CodeText {
    language: string;
    text: string;
}
export declare const CodeTextSchema: import("mongoose").Schema<CodeText, import("mongoose").Model<CodeText, any, any, any, (Document<unknown, any, CodeText, any, import("mongoose").DefaultSchemaOptions> & CodeText & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, CodeText, any, import("mongoose").DefaultSchemaOptions> & CodeText & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, CodeText>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CodeText, Document<unknown, {}, CodeText, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CodeText & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    language?: import("mongoose").SchemaDefinitionProperty<string, CodeText, Document<unknown, {}, CodeText, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CodeText & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    text?: import("mongoose").SchemaDefinitionProperty<string, CodeText, Document<unknown, {}, CodeText, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CodeText & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CodeText>;
export declare class CodeInput {
    name: string;
    type: string;
}
export declare const CodeInputSchema: import("mongoose").Schema<CodeInput, import("mongoose").Model<CodeInput, any, any, any, (Document<unknown, any, CodeInput, any, import("mongoose").DefaultSchemaOptions> & CodeInput & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, CodeInput, any, import("mongoose").DefaultSchemaOptions> & CodeInput & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, CodeInput>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CodeInput, Document<unknown, {}, CodeInput, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<CodeInput & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, CodeInput, Document<unknown, {}, CodeInput, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CodeInput & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, CodeInput, Document<unknown, {}, CodeInput, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<CodeInput & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, CodeInput>;
export declare class Code {
    functionName: string;
    codeText: CodeText[];
    inputs: CodeInput[];
}
export declare const CodeSchema: import("mongoose").Schema<Code, import("mongoose").Model<Code, any, any, any, (Document<unknown, any, Code, any, import("mongoose").DefaultSchemaOptions> & Code & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Code, any, import("mongoose").DefaultSchemaOptions> & Code & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Code>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Code, Document<unknown, {}, Code, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Code & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    functionName?: import("mongoose").SchemaDefinitionProperty<string, Code, Document<unknown, {}, Code, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Code & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    codeText?: import("mongoose").SchemaDefinitionProperty<CodeText[], Code, Document<unknown, {}, Code, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Code & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inputs?: import("mongoose").SchemaDefinitionProperty<CodeInput[], Code, Document<unknown, {}, Code, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Code & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Code>;
export declare class TestInput {
    name: string;
    value: number;
}
export declare const TestInputSchema: import("mongoose").Schema<TestInput, import("mongoose").Model<TestInput, any, any, any, (Document<unknown, any, TestInput, any, import("mongoose").DefaultSchemaOptions> & TestInput & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, TestInput, any, import("mongoose").DefaultSchemaOptions> & TestInput & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, TestInput>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TestInput, Document<unknown, {}, TestInput, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<TestInput & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, TestInput, Document<unknown, {}, TestInput, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TestInput & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    value?: import("mongoose").SchemaDefinitionProperty<number, TestInput, Document<unknown, {}, TestInput, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<TestInput & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TestInput>;
export declare class Test {
    weight: number;
    inputs: TestInput[];
    output: number;
}
export declare const TestSchema: import("mongoose").Schema<Test, import("mongoose").Model<Test, any, any, any, (Document<unknown, any, Test, any, import("mongoose").DefaultSchemaOptions> & Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Test, any, import("mongoose").DefaultSchemaOptions> & Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Test>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Test, Document<unknown, {}, Test, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    weight?: import("mongoose").SchemaDefinitionProperty<number, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    inputs?: import("mongoose").SchemaDefinitionProperty<TestInput[], Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    output?: import("mongoose").SchemaDefinitionProperty<number, Test, Document<unknown, {}, Test, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Test & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Test>;
export declare class Challenge extends Document {
    managerId: Manager | Types.ObjectId;
    score: number;
    title: string;
    category: string;
    description: string;
    level: string;
    code: Code;
    test: Test[];
}
export declare const ChallengeSchema: import("mongoose").Schema<Challenge, import("mongoose").Model<Challenge, any, any, any, (Document<unknown, any, Challenge, any, import("mongoose").DefaultSchemaOptions> & Challenge & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Challenge, any, import("mongoose").DefaultSchemaOptions> & Challenge & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}), any, Challenge>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Challenge, Document<unknown, {}, Challenge, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    test?: import("mongoose").SchemaDefinitionProperty<Test[], Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    managerId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | Manager, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    score?: import("mongoose").SchemaDefinitionProperty<number, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<string, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    level?: import("mongoose").SchemaDefinitionProperty<string, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    code?: import("mongoose").SchemaDefinitionProperty<Code, Challenge, Document<unknown, {}, Challenge, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Challenge & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Challenge>;
