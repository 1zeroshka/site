function copyIP() {
  navigator.clipboard.writeText("play.example.com").then(() => {
    alert("IP скопирован!");
  });
}
