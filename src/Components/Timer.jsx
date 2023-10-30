import React, { useEffect } from "react";

export default function Timer({ setProgress }) {
	useEffect(() => {
		async function timer() {
			setProgress(0);
			setProgress(50);
			setProgress(100);
		}

		timer();
	}, []);
	return <></>;
}
