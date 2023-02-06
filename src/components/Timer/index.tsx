import { Time } from "./styles";

interface TimerProps {
	time: number;
}

export default function Timer(props: TimerProps) {
	const seconds = props.time % 60;
	const minutes = Math.floor(props.time / 60);

	const displayTimeUnit = (unit: number, numbers: number) =>
		props.time > 60 * 10 ? "--" : unit.toString().padStart(numbers, "0");

	return (
		<Time>
			{displayTimeUnit(minutes, 1)}:{displayTimeUnit(seconds, 2)}
		</Time>
	);
}
