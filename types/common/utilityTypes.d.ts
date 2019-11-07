type IntersectionArrayAndBase<T, P> = {
    [K in keyof T]: K extends P ? T[K] : T[K] & T[K][];
}