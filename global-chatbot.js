(function () {
    
    if (document.querySelector(".chatbot-global-icon")) return;

   
    const style = document.createElement("style");
    style.innerHTML = `
        .chatbot-global-icon {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, #f4c892, #ffe4b5, #f8d9a0);
            color: #5a3e1b;
            font-size: 32px;
            font-weight: bold;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 
                0 10px 25px rgba(0, 0, 0, 0.18),
                0 0 0 4px rgba(255, 255, 255, 0.55),
                inset 0 2px 8px rgba(255,255,255,0.6);
            z-index: 9999;
            transition: all 0.3s ease;
            user-select: none;
            border: 2px solid #fa8072;
            backdrop-filter: blur(6px);
        }
    
        .chatbot-global-icon:hover {
            transform: scale(1.1) translateY(-3px);
            box-shadow: 
                0 16px 35px rgba(0, 0, 0, 0.22),
                0 0 0 5px rgba(255, 255, 255, 0.65),
                inset 0 2px 10px rgba(255,255,255,0.7);
        }
    
        .chatbot-global-icon:active {
            transform: scale(0.97);
        }
    `;
    document.head.appendChild(style);

    function addChatbotButton() {
        if (document.querySelector(".chatbot-global-icon")) return;

        const chatbotBtn = document.createElement("div");
        chatbotBtn.className = "chatbot-global-icon";
        chatbotBtn.innerHTML = "💬";
        chatbotBtn.title = "Luxury Event Assistant";

        chatbotBtn.onclick = function () {
            window.location.href = "/chatbot.html";
        };

        document.body.appendChild(chatbotBtn);
    }

    // If body already exists, add immediately
    if (document.body) {
        addChatbotButton();
    } else {
        window.addEventListener("load", addChatbotButton);
    }
})();