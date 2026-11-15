import {ReactElement} from "react";
import {StageBase, StageResponse, InitialData, Message} from "@chub-ai/stages-ts";
import {LoadResponse} from "@chub-ai/stages-ts/dist/types/load";

// To use a different song, change only this line.
// Use the plain track link, without anything after the "?".
const TRACK_URL = "https://soundcloud.com/joachimheinrich/haller-mig";

type MessageStateType = any;
type ConfigType = any;
type InitStateType = any;
type ChatStateType = any;

export class Stage extends StageBase<InitStateType, ChatStateType, MessageStateType, ConfigType> {

    constructor(data: InitialData<InitStateType, ChatStateType, MessageStateType, ConfigType>) {
        super(data);
    }

    async load(): Promise<Partial<LoadResponse<InitStateType, ChatStateType, MessageStateType>>> {
        return {
            success: true,
            error: null,
            initState: null,
            chatState: null,
        };
    }

    async setState(_state: MessageStateType): Promise<void> {
        // Nothing to remember: this stage only shows a music player.
    }

    async beforePrompt(_userMessage: Message): Promise<Partial<StageResponse<ChatStateType, MessageStateType>>> {
        return {
            stageDirections: null,
            messageState: null,
            modifiedMessage: null,
            systemMessage: null,
            error: null,
            chatState: null,
        };
    }

    async afterResponse(_botMessage: Message): Promise<Partial<StageResponse<ChatStateType, MessageStateType>>> {
        return {
            stageDirections: null,
            messageState: null,
            modifiedMessage: null,
            systemMessage: null,
            error: null,
            chatState: null,
        };
    }

    render(): ReactElement {
        const playerUrl =
            "https://w.soundcloud.com/player/?url=" + encodeURIComponent(TRACK_URL) +
            "&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false" +
            "&show_user=true&show_reposts=false&show_teaser=false&visual=false";

        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <iframe
                    title="Music player"
                    src={playerUrl}
                    allow="autoplay"
                    scrolling="no"
                    frameBorder="no"
                    style={{width: '100%', height: '100%', maxHeight: '166px', border: 'none'}}
                />
            </div>
        );
    }
}


