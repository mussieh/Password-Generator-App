import copyImage from "./assets/images/icon-copy.svg";
import rightArrowIcon from "./assets/images/icon-arrow-right.svg";
import StrengthMeter from "./components/StrengthMeter";
import { useState } from "react";
import {
    LOWER_CASE_LETTERS,
    NUMBERS,
    SYMBOLS,
    UPPER_CASE_LETTERS,
} from "./data/constants";

function App() {
    const [includeUpperCaseLetters, setIncludeUpperCaseLetters] =
        useState<boolean>(false);
    const [includeLowerCaseLetters, setIncludeLowerCaseLetters] =
        useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
    const [characterLength, setCharacterLength] = useState<number>(0);
    const [password, setPassword] = useState<string>("");

    const [copyIconStyle, setCopyIconStyle] = useState<string>("hidden");

    const generatePassword = () => {
        let charset = "";
        includeUpperCaseLetters ? (charset += UPPER_CASE_LETTERS) : null;
        includeLowerCaseLetters ? (charset += LOWER_CASE_LETTERS) : null;
        includeNumbers ? (charset += NUMBERS) : null;
        includeSymbols ? (charset += SYMBOLS) : null;

        let password = "";

        for (let i = 0; i < characterLength; i++) {
            password += charset.charAt(
                Math.floor(Math.random() * charset.length)
            );
        }
        return password;
    };

    return (
        <main>
            <section className="w-[90%] max-w-[54rem] mx-auto text-center h-[63.2rem] sm:h-[54rem]">
                <h1 className="text-grey font-bold text-[2.4rem] mt-[13.3rem] mb-[3.1rem] sm:mb-[1.6rem] sm:text-[1.6rem]">
                    Password Generator
                </h1>
                <div className="flex justify-between items-center bg-darkGrey p-[1.9rem] mb-[2.4rem] sm:mb-[1.6rem]">
                    <input
                        placeholder="P4$5W0rD!"
                        value={password}
                        disabled
                        className="font-bold bg-darkGrey text-[3.2rem] sm:text-[2.4rem] text-almostWhite"
                    />
                    <div className="flex gap-[1.6rem] flex-wrap items-center">
                        <p
                            className={`${copyIconStyle} text-neonGreen text-[1.8rem] xs:text-[1.4rem] xxs:text-[1rem] font-bold`}
                        >
                            COPIED
                        </p>
                        <img
                            onClick={() => {
                                if (password) {
                                    navigator.clipboard.writeText(password);
                                    setCopyIconStyle("block");
                                    setTimeout(() => {
                                        setCopyIconStyle("hidden");
                                    }, 3000);
                                }
                            }}
                            className="cursor-pointer sm:w-[1.75rem] sm:h-[2rem]"
                            id="copy-icon"
                            src={copyImage}
                            alt="Copy Icon"
                        />
                    </div>
                </div>
                <div className="bg-darkGrey max-h-[52.8rem] min-h-[42.3rem] text-[1.8rem] sm:text-[1.6rem] p-[1.9rem]">
                    <div className="flex justify-between items-center mb-[1.6rem] sm:mb-[0.8rem]">
                        <label
                            className="text-almostWhite font-bold"
                            htmlFor="password-length-range"
                        >
                            Character Length
                        </label>
                        <p className="text-neonGreen font-bold text-[3.2rem]">
                            {characterLength}
                        </p>
                    </div>
                    <input
                        type="range"
                        value={characterLength}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setCharacterLength(Number(event.target.value))}
                        min={0}
                        max={20}
                        name="password-length-range"
                        id="password-length-range"
                    />
                    <div className="flex gap-[2.4rem] items-center sm:gap-[2rem] mt-[3.2rem]">
                        <input
                            className="cursor-pointer    accent-neonGreen h-[2rem] w-[2rem]"
                            type="checkbox"
                            checked={includeUpperCaseLetters}
                            onChange={() => {
                                setIncludeUpperCaseLetters(
                                    (includeUpperCaseLetters) =>
                                        !includeUpperCaseLetters
                                );
                            }}
                            name="uppercase-letter-checkbox"
                            id="uppercase-letter-checkbox"
                        />
                        <label
                            className="cursor-pointer text-almostWhite"
                            htmlFor="uppercase-letter-checkbox"
                        >
                            Include Uppercase Letters
                        </label>
                    </div>
                    <div className="flex gap-[2.4rem] items-center sm:gap-[2rem] mt-[2rem]">
                        <input
                            className="cursor-pointer accent-neonGreen h-[2rem] w-[2rem]"
                            checked={includeLowerCaseLetters}
                            onChange={() => {
                                setIncludeLowerCaseLetters(
                                    (includeLowerCaseLetters) =>
                                        !includeLowerCaseLetters
                                );
                            }}
                            type="checkbox"
                            name="lowercase-letter-checkbox"
                            id="lowercase-letter-checkbox"
                        />
                        <label
                            className="cursor-pointer text-almostWhite"
                            htmlFor="lowercase-letter-checkbox"
                        >
                            Include Lowercase Letters
                        </label>
                    </div>
                    <div className="flex gap-[2.4rem] items-center sm:gap-[2rem] mt-[2rem]">
                        <input
                            className="cursor-pointer accent-neonGreen h-[2rem] w-[2rem]"
                            checked={includeNumbers}
                            onChange={() => {
                                setIncludeNumbers(
                                    (includeNumbers) => !includeNumbers
                                );
                            }}
                            type="checkbox"
                            name="number-checkbox"
                            id="number-checkbox"
                        />
                        <label
                            className="cursor-pointer text-almostWhite"
                            htmlFor="number-checkbox"
                        >
                            Include Numbers
                        </label>
                    </div>
                    <div className="flex gap-[2.4rem] items-center sm:gap-[2rem] mt-[2rem] mb-[3.2rem]">
                        <input
                            className="cursor-pointer accent-neonGreen h-[2rem] w-[2rem]"
                            checked={includeSymbols}
                            onChange={() => {
                                setIncludeSymbols(
                                    (includeSymbols) => !includeSymbols
                                );
                            }}
                            type="checkbox"
                            name="symbols-checkbox"
                            id="symbols-checkbox"
                        />
                        <label
                            className="cursor-pointer text-almostWhite"
                            htmlFor="symbols-checkbox"
                        >
                            Include Symbols
                        </label>
                    </div>
                    <StrengthMeter passwordLength={characterLength} />
                    <button
                        id="generate-btn"
                        onClick={() => {
                            setPassword(generatePassword());
                        }}
                        className="w-full flex justify-center items-center gap-[1.6rem] bg-neonGreen h-[6.5rem] sm:h-[5.6rem] font-bold text-[1.6rem] hover:bg-darkGrey hover:text-neonGreen hover:border-2 hover:border-neonGreen"
                    >
                        Generate
                        <img
                            id="right-arrow-icon"
                            src={rightArrowIcon}
                            alt="Right Arrow Icon"
                        />
                    </button>
                </div>
            </section>
        </main>
    );
}

export default App;
