type KeyOf<T> = T extends never ? never : keyof T;

type KeysOf<T1, T2, T3, T4, T5, T6, T7, T8> =
  KeyOf<T1> | KeyOf<T2> | KeyOf<T3> | KeyOf<T4> | KeyOf<T5> | KeyOf<T6> | KeyOf<T7> | KeyOf<T8>;

type Seal<T, K extends keyof any> = T & {
  [P in Exclude<K, keyof T>]?: never;
};

// Exact props check, see https://github.com/Microsoft/TypeScript/issues/12936
export type Xor<T1, T2 = never, T3 = never, T4 = never, T5 = never, T6 = never, T7 = never, T8 = never, T9 = never> =
  | Seal<T1, KeysOf<T2, T3, T4, T5, T6, T7, T8, T9>>
  | Seal<T2, KeysOf<T1, T3, T4, T5, T6, T7, T8, T9>>
  | Seal<T3, KeysOf<T1, T2, T4, T5, T6, T7, T8, T9>>
  | Seal<T4, KeysOf<T1, T2, T3, T5, T6, T7, T8, T9>>
  | Seal<T5, KeysOf<T1, T2, T3, T4, T6, T7, T8, T9>>
  | Seal<T6, KeysOf<T1, T2, T3, T4, T5, T7, T8, T9>>
  | Seal<T7, KeysOf<T1, T2, T3, T4, T5, T6, T8, T9>>
  | Seal<T8, KeysOf<T1, T2, T3, T4, T5, T6, T7, T9>>
  | Seal<T9, KeysOf<T1, T2, T3, T4, T5, T6, T7, T8>>;

export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: T[P] extends Function ? T[P] : DeepPartial<T[P]>;
} : T;

// Omit does not exist in TS < 3.5.1
export type Skip<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Property<T, P extends string> = P extends keyof T ? T[P] : never;

export type RecursiveProperty<T, Props extends string[]> =
    Props extends [infer P1] ? P1 extends keyof T ? T[P1] : never
    : Props extends [infer P1] ? Property<T, P1 & string>
    : Props extends [infer P1, infer P2] ? Property<Property<T, P1 & string>, P2 & string>
    : Props extends [infer P1, infer P2, infer P3] ? Property<Property<Property<T, P1 & string>, P2 & string>, P3 & string>
    : Props extends [infer P1, infer P2, infer P3, infer P4] ? Property<Property<Property<Property<T, P1 & string>, P2 & string>, P3 & string>, P4 & string>
    : Props extends [infer P1, infer P2, infer P3, infer P4, infer P5] ? Property<Property<Property<Property<Property<T, P1 & string>, P2 & string>, P3 & string>, P4 & string>, P5 & string>
    : Props extends [infer P1, infer P2, infer P3, infer P4, infer P5, infer P6] ? Property<Property<Property<Property<Property<Property<T, P1 & string>, P2 & string>, P3 & string>, P4 & string>, P5 & string>, P6 & string>
    : never;
