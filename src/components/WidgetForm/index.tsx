import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../Assets/bug.svg';
import ideaImageUrl from '../../Assets/idea.svg';
import thoughtImageUrl from '../../Assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
    BUG: {
        title: "problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        }
    },
    IDEA: {
        title: "ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada',
        }
    },
    OTHER: {
        title: "outro",
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de uma nuvem de pensamento',
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            onFeedbackSent={() => setFeedbackSent(true)}
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                        />
                    )}
                </>
            )}


            <footer className="text-xs text-neutral-400">

                Feito durante a NWL da  <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a>

            </footer>
        </div>
    );
}