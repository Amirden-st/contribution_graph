import {useEffect, useState} from "react";
import axios from "axios";
import Graph from "./Graph";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [contributions, setContributions] = useState({});

    useEffect(() => {
        axios.get('https://dpg.gg/test/calendar.json')
            .then(res => {
                if (res.status === 200) {
                    setIsLoading(false)
                    setContributions(res.data)
                }
            })
            .catch(e => setError(e.message))
    }, []);

    if (error) {
        return error
    }
    if (isLoading) {
        return 'Loading...'
    }

    return (
        <div className="app">
            <Graph contributions={contributions} date={new Date()}/>
        </div>
    );
}

export default App;
