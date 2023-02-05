import useDynamicSvgImport from "./useDynamicSvgImport";

interface IconProps {
	name: string;
}

export default function SvgIcon(props: IconProps) {
	const { Svg } = useDynamicSvgImport(props.name);

	return <>{Svg && <Svg />}</>;
}
