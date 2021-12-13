import React, {useEffect} from "react";

function Chatbot(){
    useEffect(() => {
        (function(d, m){
            var kommunicateSettings = {
                 "appId": "25c42cfeda5d85bcc71fe0060769c5099",
                 "popupWidget":true,
                 "automaticChatOpenOnNavigation":true,
                 "voiceOutput":true,
                 "voiceName":"Google Portuguese", // Replace Google Deutsch with the voiceName or an array of voiceNames from the below mentioned table list
                 "voiceRate":1};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});

    }, [])
    return(
        <div>

        </div>
    )
}
export default Chatbot;