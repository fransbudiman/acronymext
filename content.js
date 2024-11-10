chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "openOverlay") {
      // Prevent multiple overlays from being created
      if (document.getElementById("AcroX")) return;
  
      // Create overlay container
      const overlay = document.createElement("div");
      overlay.id = "AcroXPopup";
      overlay.innerHTML = `
        <div class="overlay-content">
          <button id="closeOverlay">Close</button>
          <iframe src="${chrome.runtime.getURL("hello.html")}" width="100%" height="100%"></iframe>
        </div>
      `;
      document.body.appendChild(overlay);
  
      // Add close button functionality
      document.getElementById("closeOverlay").addEventListener("click", () => {
        overlay.remove();
      });
    }
  });
  