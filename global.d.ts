declare type EnumType<T extends Record<string, unknown>> = T[keyof T];
