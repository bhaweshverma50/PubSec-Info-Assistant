// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "How does HVAC settings impact indoor air quality?", value: "How does HVAC settings impact indoor air quality?" },
    { text: "What is the sizing and placement guideline for an XC21 unit?", value: "What is the sizing and placement guideline for an XC21 unit?" },
    { text: "How much more efficient is a 20 SEER vs 14 SEER?", value: "How much more efficient is a 20 SEER vs 14 SEER?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
