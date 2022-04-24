import { useState } from 'react';
import { StyledLimit, StyledIcon, StyledText } from './Limit.styles';
import {ILimit} from "../../reducers/accounts.reducer";

interface ILimitProps {
  limitList: ILimit['list']
};

export default function Limit({ limitList }: ILimitProps) {
  const [showAlert, setShowAlert] = useState(false);

  const reachedLimits = Object.entries(limitList).map((limit) => {
    if (limit[1].reached === true) {
      return limit[0];
    }
  });

  return (
    <>
      <StyledIcon
        onClick={() => setShowAlert((showAlert) => !showAlert)}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="limit-icon"
      >
        <g>
          <rect width="30" height="30" fill="white" />
          {showAlert ? (
            <path
              d="M4.38736 4.8934C-1.46095 10.7417 -1.46136 20.2579 4.38736 26.1066C10.2361 31.9553 19.7522 31.9549 25.6006 26.1066C31.4489 20.2583 31.4493 10.7421 25.6006 4.8934C19.7518 -0.955327 10.2357 -0.954919 4.38736 4.8934ZM20.9092 11.2166L16.6257 15.5L21.1132 19.9874C21.5635 20.4378 21.5635 21.1688 21.1132 21.6192C20.6628 22.0696 19.9317 22.0696 19.4814 21.6192L14.994 17.1318L10.7105 21.4152C10.2602 21.8656 9.52912 21.8656 9.07874 21.4152C8.62837 20.9648 8.62837 20.2338 9.07874 19.7834L13.3622 15.5L9.28272 11.4205C8.83235 10.9702 8.83235 10.2391 9.28272 9.78875C9.73309 9.33838 10.4641 9.33838 10.9145 9.78875L14.994 13.8682L19.2774 9.58478C19.7278 9.13441 20.4588 9.13441 20.9092 9.58478C21.3596 10.0352 21.3596 10.7662 20.9092 11.2166Z"
              fill="#F4600C"
            />
          ) : (
            <path
              d="M4.395 25.605C2.96234 24.2213 1.81961 22.5661 1.03348 20.7361C0.247341 18.906 -0.166453 16.9377 -0.18376 14.946C-0.201067 12.9543 0.178458 10.9791 0.932672 9.13569C1.68688 7.29224 2.80068 5.61747 4.20907 4.20908C5.61746 2.80069 7.29224 1.68689 9.13569 0.932676C10.9791 0.178462 12.9543 -0.201063 14.946 -0.183756C16.9377 -0.166449 18.906 0.247345 20.7361 1.03348C22.5661 1.81961 24.2213 2.96235 25.605 4.395C28.3374 7.22403 29.8493 11.0131 29.8151 14.946C29.7809 18.879 28.2034 22.6412 25.4223 25.4223C22.6412 28.2034 18.879 29.7809 14.946 29.8151C11.0131 29.8493 7.22403 28.3374 4.395 25.605ZM13.5 7.5V16.5H16.5V7.5H13.5ZM13.5 19.5V22.5H16.5V19.5H13.5Z"
              fill="#F4600C"
            />
          )}
        </g>
        <defs>
          <clipPath id="clip0_17_957">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </StyledIcon>
      {showAlert ? (
        <StyledLimit>
          <StyledText>
            Przekroczyłeś limit wydatków w kategorii {reachedLimits.join(', ')}.
          </StyledText>
        </StyledLimit>
      ) : null}
    </>
  );
}
