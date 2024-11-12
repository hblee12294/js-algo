export function jsonStringify(value: unknown): string {
  if (typeof value === "string") {
    return `"${value}"`;
  }

  if (Array.isArray(value)) {
    const stringifiedValues = value.map((item) => jsonStringify(item));

    return `[${stringifiedValues.join(",")}]`;
  }

  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value).map(
      ([key, value]) => `"${key}":${jsonStringify(value)}`
    );

    return `{${entries.join(",")}}`;
  }

  return String(value);
}
