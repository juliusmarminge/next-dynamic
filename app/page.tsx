import { headers } from "next/headers";
import { ClientComponentThatConsumesPromise } from "./cc";
import { Suspense } from "react";

export default function Home() {


	return (
		<>
		<h1>Hello world</h1>
		<Suspense>
			<DynamicArea />
		</Suspense>
		</>
	);
}

function DynamicArea() {
	const promise = headers()

	return <ClientComponentThatConsumesPromise promise={promise} />
}