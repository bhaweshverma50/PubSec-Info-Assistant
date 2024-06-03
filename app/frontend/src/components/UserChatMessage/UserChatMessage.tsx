// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import styles from "./UserChatMessage.module.css";
import { GlobeSearch20Filled, BuildingMultiple20Filled, Person20Filled, Link16Filled } from "@fluentui/react-icons";
import { Approaches } from "../../api";
import WhiteLogo from "../../assets/new white logo.svg";

interface Props {
    message: string;
    approach: Approaches;
}

export const UserChatMessage = ({ message, approach }: Props) => {
    return (
        <div className={approach == Approaches.GPTDirect ? styles.containerUngrounded : styles.container}>
            <div
                className={
                    approach == Approaches.ChatWebRetrieveRead
                        ? styles.messageweb
                        : approach == Approaches.ReadRetrieveRead
                        ? styles.messagework
                        : approach == Approaches.GPTDirect
                        ? styles.messageungrounded
                        : styles.messagecompare
                }
            >
                <div
                    style={
                        {
                            // marginRight: "10px"
                            // width: "20px",
                            // height: "20px",
                            // display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            // flexDirection: "row"
                        }
                    }
                >
                    <img src={WhiteLogo} style={{ width: "25px", height: "25px" }} />
                </div>
                <span className={approach == Approaches.GPTDirect ? styles.userMessageUngrounded : styles.userMessage}>{message}</span>
            </div>
        </div>
    );
};
