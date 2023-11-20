import { useEffect, useState } from "react";
import fakedate from "../../fakedate.json";
import { Slide } from "react-awesome-reveal";
import MatchesBlock from "./BlockInfo";

const Blocks = () => {
    // simulate data fetch from db
    const [matches, setMatches] = useState([]);
  
    useEffect(() => {
      if (matches.length === 0) {
   
        setMatches(fakedate.matches);
      }
      console.log(matches);
    }, [matches]);
  
    const showMatches = () =>
      matches.map((match, index) => (
   
        <Slide key={index} bottom className="item" triggerOnce>
          <div>
            <div className="wrapper">
              
              <MatchesBlock match={match} />
            </div>
          </div>
        </Slide>
      ));
  
    return <div className="home_matches">{showMatches()}</div>;
  };
  
  export default Blocks;