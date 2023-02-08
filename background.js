chrome.runtime.onMessage.addListener( (emailContent, sender, sendResponse) => {
        console.log(emailContent);
        (async ()=>{
            const tabs = await chrome.tabs.query({url: 'https://chat.openai.com/*'});
            const tab = tabs[0]
            const gptResponse = await chrome.tabs.sendMessage(tab.id, emailContent)
            sendResponse(gptResponse)
        })();
        return true;
    }
)