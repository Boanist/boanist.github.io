const clock = document.querySelector(".clock");

const time = () => {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  clock.innerText = `${h}:${m}`;
};

time();
setInterval(time, 1000);
