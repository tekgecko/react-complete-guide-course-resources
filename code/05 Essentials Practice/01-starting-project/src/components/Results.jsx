import {calculateInvestmentResults, formatter} from "../util/investment";
import "../index.css";

export default function Results({userInput}) {

    const convertedInput = {
        initialInvestment: userInput["current-savings"],
        annualInvestment: userInput["yearly-contribution"],
        expectedReturn: userInput["expected-return"],
        duration: userInput["duration"]
    }


    const resultsData = calculateInvestmentResults(convertedInput)
    console.log(resultsData)


    return (
        <>
        <table id="result">
            <thead>
            <tr>    
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Investment Capital(Year)</th>
            </tr>
            </thead>
            <tbody>
            {resultsData.map((yearData) => (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{yearData.valueEndOfYear}</td>
                    <td>{yearData.interest}</td>
                    <td>{yearData.annualInvestment}</td>





                </tr>   
            ))}
            </tbody>
        </table>

        </>
    )

}