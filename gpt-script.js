chrome.runtime.onMessage.addListener( (emailContent, sender, sendResponse) => {
    const textArea = document.querySelector("textArea")
    textArea.value = 'Respond to the most recent email in comprehensive and professional tone and sign off with my name (goat) at the end: \n' + emailContent
    const button = textArea.nextElementSibling;
    button.click()

    const callback = (mutationList, observer) => {
        for (const mutation of mutationList){
            if(mutation.attributeName === 'disabled'){
                if(button.disabled === false){
                    const response = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative > div > main > div.flex-1.overflow-hidden > div > div > div")
                    const children = response.childNodes
                    const lastResponse = children[children.length - 2];
                    sendResponse(lastResponse.innerText)
                }
            }
        }
    }
    const observer = new MutationObserver(callback)
    observer.observe(button, {attributes: true})
    return true;
}
)