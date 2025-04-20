document.getElementById("copyBtn").addEventListener("click", function() {
    let scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    scriptBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    alert("Script copied to clipboard!");
});
