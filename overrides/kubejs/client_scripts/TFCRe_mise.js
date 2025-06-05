// AnimationJS.playerModel(event => {
// 	const { playerModel, entity, ageInTicks } = event;

// 	if (!isMoving) return; // 玩家没动就不执行动画
// 	// 抖动
// 	let shakeZ = Math.sin(ageInTicks * 1.5) * 0.05;
// 	let shakeX = Math.sin(ageInTicks * 1.5 + 1) * 0.02;
//     // 右臂
// 	playerModel.rightArm.setRotation(
// 		-1.9 + shakeX,  // x
// 		-1.4,           // y
// 		0.6 + shakeZ    // z
// 	);
// 	// 左臂
// 	playerModel.leftArm.setRotation(
// 		-1.9 + shakeX,
// 		1.4,
// 		-0.6 + shakeZ
// 	);
// 	playerModel.rightSleeve.copyFrom(playerModel.rightArm);
// 	playerModel.leftSleeve.copyFrom(playerModel.leftArm);
// });
