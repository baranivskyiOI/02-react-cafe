import css from "./App.module.css";
import CafeInfo from "./components/CafeInfo/CafeInfo";
import type { VoteOptionsProps, VoteType } from "./types/votes";
import { useState } from "react";
import VoteOptions from "./components/VoteOptions/VoteOptions";
import VoteStats from "./components/VoteStats/VoteStats";
import Notification from "./components/Notification/Nitification";

function App() {
  const [votes, setVotes] = useState<VoteOptionsProps>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (key: VoteType) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
    console.log(votes);
  };

  const resetVotes = () => {
    setVotes({
      ...votes,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes: number = votes.good + votes.neutral + votes.bad;

  const positiveRate: number = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes}
      />
      {totalVotes ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
