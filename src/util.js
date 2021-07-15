export function getTimeElapsed(receivedTime = 5555555) {
  let currentTime = new Date();
  let remainingTime = currentTime.getTime() - receivedTime.getTime();

  remainingTime = remainingTime / 1000;

  let seconds = Math.floor(remainingTime % 60);
  remainingTime = Math.floor(remainingTime / 60);

  let minutes = remainingTime % 60; 
  remainingTime = Math.floor(remainingTime / 60);

  let hours = remainingTime % 24;
  remainingTime = Math.floor(remainingTime / 24);

  let days = remainingTime;
  remainingTime = Math.floor(remainingTime / 30);

  let months = remainingTime;
  remainingTime = Math.floor(remainingTime / 12);

  let years = remainingTime;
  let totalHours = hours + (days * 24);

  if (years === 0) {
    if (months === 0) {
      if (days === 0) {
        if (totalHours === 0) {
          if (minutes === 0) {
            return `${seconds} seconds ago`;
          }
          return `${minutes} minutes ago`;
        } else {
          return `${totalHours} hours ago`;
        }
      } else {
        return `${days} days, ${totalHours - (days*24)} hours ago`;
      }
    } else {
      return `${months} months, ${days - (months*30)} days ago`;
    }
  } else {
    return `${years} years, ${months - (years*12)} months ago`;
  }
}
