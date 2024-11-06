"use client";

import { use } from "react";

export function ClientComponentThatConsumesPromise({ promise }: { promise: Promise<Headers>}) {
    const heads = use(promise);

    return <pre>{JSON.stringify(heads, null, 2)}</pre>;
}