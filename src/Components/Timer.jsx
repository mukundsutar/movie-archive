import React, { useEffect } from "react";

export default function Timer({ setProgress }) {
	let totaltime = 500;
	let time = totaltime / 5;
	useEffect(() => {
		setProgress(0);

		setTimeout(() => {
			setProgress(20);
		}, time);

		setTimeout(() => {
			setProgress(40);
		}, time * 2);

		setTimeout(() => {
			setProgress(60);
		}, time * 3);

		setTimeout(() => {
			setProgress(80);
		}, time * 4);

		setTimeout(() => {
			setProgress(100);
		}, time * 5);
	}, []);
	return <></>;
}
