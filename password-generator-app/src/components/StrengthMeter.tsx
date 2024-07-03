type StrengthMeterProps = {
    passwordLength: number;
};

const StrengthMeter = ({ passwordLength }: StrengthMeterProps) => {
    if (passwordLength === 0) {
        return (
            <div className="p-[2.4rem] bg-veryDarkGrey h-[7.2rem] sm:h-[5.6rem] flex justify-between items-center mb-[3.2rem]">
                <p className="text-grey font-bold sm:text-[1.6rem]">STRENGTH</p>
                <div className="flex gap-[1.6rem] justify-between items-center">
                    <div className="flex gap-[0.8rem]">
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                    </div>
                </div>
            </div>
        );
    } else if (passwordLength >= 1 && passwordLength <= 5) {
        return (
            <div className="p-[2.4rem] bg-veryDarkGrey h-[7.2rem] sm:h-[5.6rem] flex justify-between items-center mb-[3.2rem]">
                <p className="text-grey font-bold sm:text-[1.6rem]">STRENGTH</p>
                <div className="flex gap-[1.6rem] justify-between items-center">
                    <p className="text-almostWhite font-bold text-[2.4rem] sm:text-[1.8rem]">
                        TOO WEAK!
                    </p>
                    <div className="flex gap-[0.8rem]">
                        <div className="bg-red w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                    </div>
                </div>
            </div>
        );
    } else if (passwordLength >= 6 && passwordLength <= 10) {
        return (
            <div className="p-[2.4rem] bg-veryDarkGrey h-[7.2rem] sm:h-[5.6rem] flex justify-between items-center mb-[3.2rem]">
                <p className="text-grey font-bold sm:text-[1.6rem]">STRENGTH</p>
                <div className="flex gap-[1.6rem] justify-between items-center">
                    <p className="text-almostWhite font-bold text-[2.4rem] sm:text-[1.8rem]">
                        WEAK
                    </p>
                    <div className="flex gap-[0.8rem]">
                        <div className="bg-orange w-[1rem] h-[2.8rem]"></div>
                        <div className="bg-orange w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                    </div>
                </div>
            </div>
        );
    } else if (passwordLength >= 11 && passwordLength <= 15) {
        return (
            <div className="p-[2.4rem] bg-veryDarkGrey h-[7.2rem] sm:h-[5.6rem] flex justify-between items-center mb-[3.2rem]">
                <p className="text-grey font-bold sm:text-[1.6rem]">STRENGTH</p>
                <div className="flex gap-[1.6rem] justify-between items-center">
                    <p className="text-almostWhite font-bold text-[2.4rem] sm:text-[1.8rem]">
                        MEDIUM
                    </p>
                    <div className="flex gap-[0.8rem]">
                        <div className="bg-yellow w-[1rem] h-[2.8rem]"></div>
                        <div className="bg-yellow w-[1rem] h-[2.8rem]"></div>
                        <div className="bg-yellow w-[1rem] h-[2.8rem]"></div>
                        <div className="border-2 border-almostWhite w-[1rem] h-[2.8rem]"></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="p-[2.4rem] bg-veryDarkGrey h-[7.2rem] sm:h-[5.6rem] flex justify-between items-center mb-[3.2rem]">
                <p className="text-grey font-bold sm:text-[1.6rem]">STRENGTH</p>
                <div className="flex gap-[1.6rem] justify-between items-center">
                    <p className="text-almostWhite font-bold text-[2.4rem] sm:text-[1.8rem]">
                        STRONG
                    </p>
                    <div className="flex gap-[0.8rem]">
                        <div className="bg-neonGreen w-[1rem] h-[2.8rem]"></div>
                        <div className="bg-neonGreen w-[1rem] h-[2.8rem]"></div>
                        <div className="bg-neonGreen w-[1rem] h-[2.8rem]"></div>
                        <div className="bg-neonGreen w-[1rem] h-[2.8rem]"></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default StrengthMeter;
