export const bigintNumberTransformer = {
  to: (value?: number | null) => (typeof value === "number" ? value : value ?? null),
  from: (value: string | null) => (value === null ? null : Number(value)),
}




