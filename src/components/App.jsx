import { useState } from "react";
import { FeedbackOptions } from "./feedback-options/FeedbackOptions";
import { FeddbackSection } from "./feedback-section/Section";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Statistics } from "./statistics/Statistics";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const countTotalFeedbacks = () => good + neutral + bad;

  const countPositivePersentage = () => Math.round(good / (countTotalFeedbacks() / 100));

  const clickHandling = (item) => {
    switch (item) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }

  return (<>
    <GlobalStyle />
    <FeddbackSection title={"Please leave feedback"}>
      <FeedbackOptions options={options} onLeaveFeedback={clickHandling}></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedbacks()}
        positivePercentage={countPositivePersentage()}>
      </Statistics>
    </FeddbackSection>
  </>
  )
};