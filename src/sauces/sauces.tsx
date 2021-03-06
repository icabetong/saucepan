import React, { FormEvent } from 'react';
import { IconButton } from '../components/components';
import { IconPencil, IconTrash, IconPlus } from '@tabler/icons';
import ReactMarkdown from 'react-markdown';
import { Sauce } from "../core/types";
import i18n from '../i18n';

import '../assets/output.css';

const md_bold = "**"
const md_code = "```"

type ListProps = {
    sauces: Sauce[]
    saucepanId: number,
    autoRenderToMarkdown: boolean,
    onCreate: Function
    onEdit: Function,
    onRemove: Function,
    onCopy: Function
}

const List = (props: ListProps) => {
    const renderItem = (sauce: Sauce) => {
        return <Item
                    key={sauce._id}
                    sauce={sauce}
                    saucepanId={props.saucepanId}
                    autoRenderToMarkdown={props.autoRenderToMarkdown}
                    onEdit={props.onEdit}
                    onRemove={props.onRemove}
                    onCopy={props.onCopy}
                />
    }

    return <div className="my-4 grid gap-2 grid-cols-auto-sauce grid-rows-auto-sauce">
                <button 
                    className="bg-gray-800 border border-dashed rounded-md border-gray-500 hover:bg-gray-600 hover:shadow-md transition text-white" 
                    onClick={() => props.onCreate()}>
                        <IconPlus className="mx-auto"/>
                </button>
            { props.sauces.map(sauce => renderItem(sauce)) }
        </div>
}

type ItemProps = {
    sauce: Sauce,
    saucepanId: number,
    autoRenderToMarkdown: boolean
    onCopy: Function,
    onEdit: Function,
    onRemove: Function
}

const Item = (props: ItemProps) => {
    const sauce = props.sauce;

    const question = md_bold.concat(sauce.question).concat(md_bold);
    const answer = md_code.concat(sauce.answer).concat(md_code);
    const output = question.concat("  ").concat(answer);

    return (
        <div
            className="flex flex-col justify-center p-4 border rounded-md text-white cursor-pointer hover:bg-indigo-500 hover:border-indigo-500"
            onClick={() => props.onCopy(output)}>
            <div className="text-lg">
                { props.autoRenderToMarkdown
                    ? <ReactMarkdown>{question}</ReactMarkdown>
                    : <span>{question}</span> }
            </div>
            <div className="text-md">
                { props.autoRenderToMarkdown
                    ? <ReactMarkdown>{answer}</ReactMarkdown>
                    : <span>{answer}</span> }
            </div>
            <div className="space-x-2">
                <IconButton
                    icon={<IconPencil/>}
                    label={i18n.t("button_edit")}
                    onClick={(e: FormEvent) => props.onEdit(sauce, e) }/>
                <IconButton
                    icon={<IconTrash/>}
                    label={i18n.t("button_remove")}
                    onClick={(e: FormEvent) => props.onRemove(props.saucepanId, sauce, e) }/>
            </div>
        </div>
    );
}

export { List, Item };