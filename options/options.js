chrome.storage.local.get(
  {
    name: "",
  },
  function (items) {
    document.getElementById("name").value = items.name;
  }
);

document.getElementById("save").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  chrome.storage.local.set({
    name: name,
  });
});
