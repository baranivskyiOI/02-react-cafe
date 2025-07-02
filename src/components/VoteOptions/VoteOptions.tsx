import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface Props {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: number;
}

export default function VoteOptions({ onVote, onReset, canReset }: Props) {
  return (
    <div className={css.container}>
      <button
        onClick={() => {
          onVote("good");
        }}
        className={css.button}
      >
        Good
      </button>
      <button
        onClick={() => {
          onVote("bad");
        }}
        className={css.button}
      >
        Bad
      </button>
      <button
        onClick={() => {
          onVote("neutral");
        }}
        className={css.button}
      >
        Neutral
      </button>

      {canReset ? (
        <button
          onClick={() => {
            onReset();
          }}
          className={`${css.button} ${css.reset}`}
        >
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
