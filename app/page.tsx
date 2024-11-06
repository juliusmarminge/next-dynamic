import { headers } from "next/headers";
import { ClientComponentThatConsumesPromise } from "./cc";

export default function Home() {
	const promise = headers();

	return (
		<>
			<ClientComponentThatConsumesPromise promise={promise} />
		</>
	);
}
