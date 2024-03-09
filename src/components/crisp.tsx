"use client";
import { useEffect } from "react";
//.CRISP_WEBSITE_ID="53ddfea4-a4a1-4229-98ec-c24ec992510b"
declare global {
    interface Window {
        $crisp: any;
        CRISP_WEBSITE_ID: string;
    }
}

const Crisp = () => {
    useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "53ddfea4-a4a1-4229-98ec-c24ec992510b";
        (() => {
            const d = document;
            const s: any = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("body")[0].appendChild(s);
        })();
    });
    return null;
};
export default Crisp;