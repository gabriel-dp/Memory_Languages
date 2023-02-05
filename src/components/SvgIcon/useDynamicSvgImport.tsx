import React, { useEffect, useState, useRef } from "react";

export default function useDynamicSvgImport(iconName: string) {
	const importedSvgRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		setLoading(true);

		const importSvg = async (): Promise<void> => {
			try {
				importedSvgRef.current = (await import(`../../assets/logos/${iconName}.svg`)).ReactComponent;
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		importSvg();
	}, [iconName]);

	return { Svg: importedSvgRef.current, loading, error };
}
