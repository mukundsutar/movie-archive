import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../CSS/SkeletonDetails.css"

export default function SkeletonDetails() {
	return (
		<>
			<div className="details-skeleton">
				<div className="details-info">
					<Skeleton />
				</div>
				<div className="details-poster">
					<Skeleton />
				</div>
			</div>
		</>
	);
}
