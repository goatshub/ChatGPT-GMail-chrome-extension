window.onload = () => {
    window.onhashchange = ()=>{
        let hash = window.location.hash
        if(hash.startsWith('#inbox/')){
            let spans = document.querySelectorAll('span.ams.bkH')
            for (const span of spans){
                if(span.innerText === 'Reply'){
                    span.addEventListener('click', ()=>{
                        let email = document.querySelector('div.adn.ads');
                        (async ()=>{
                            console.log('answered')
                            const gptResponse = await chrome.runtime.sendMessage(email.textContent)
                            const textbox = document.querySelector('[role="textbox"]');
                            textbox.innerText = gptResponse;
                        })();
                    })
                }
            }
        }
    }
}


