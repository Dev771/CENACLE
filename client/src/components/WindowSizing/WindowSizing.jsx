import { useEffect, useState } from "react";

const WindowSizing = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBottom(Math.round(window.innerHeight + document.documentElement.scrollTop ) >= Math.round(document.documentElement.offsetHeight))
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        }
    }, [])

    return bottom;
}

export default WindowSizing;