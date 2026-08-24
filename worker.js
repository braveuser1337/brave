self.onmessage = (event) => {
  navigator.brave.isBrave().then(isBrave => console.log(`Is Brave (Worker): ${isBrave}`));
  navigator.userAgentData
    .getHighEntropyValues([
      "fullVersionList",
    ])
    .then((values) => {
      console.log("User Agent Data (Worker):", values);
    });
}
