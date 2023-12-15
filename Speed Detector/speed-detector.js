/*Challenge 2: 
    Speed Detector*/
function speedDetector(speed) {
  const speedLimit = 70;
  const pointsAboveSpeedLimit = 5;
  const demeritPoints = (speed - speedLimit) / pointsAboveSpeedLimit;
  if (speed <= speedLimit) {
    console.log('Ok');
  } else if (speed >= 80 && demeritPoints <= 12) {
    console.log(`Points: ${demeritPoints}`);
  } else {
    console.log('License suspended');
  }
}
speedDetector(82);
