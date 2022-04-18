import "./App.css";
import { useState } from "react";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

let total = 0;
let positive = 0;

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // countTotalFeedback = () => {
  //   return (total += 1);
  // };

  const onClickBtn = (data) => {
    total += 1;
    switch (data) {
      case "good":
        setGood(good+1);
        break;
      case "neutral":
        setNeutral(neutral+1);
        break;
      case "bad":
        setBad(bad+1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions ClickBtn={onClickBtn} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.floor(good*100/total)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
