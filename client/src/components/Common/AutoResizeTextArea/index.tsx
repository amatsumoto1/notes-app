import React, {
    useState,
    useEffect,
    useRef,
    TextareaHTMLAttributes
} from 'react';

const AutoResizeTextArea: React.VFC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
        props: TextareaHTMLAttributes<HTMLTextAreaElement>
    ) => {
    const { onChange, ...rest } = props; 
    const ref = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState('');
    const [height, setHeight] = useState('auto');
    const [parentHeight, setParentHeight] = useState('auto');

    useEffect(() => {
        setParentHeight(`${ref.current!.scrollHeight}px`);
        setHeight(`${ref.current!.scrollHeight}px`);
    }, [text]);

    const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHeight('auto');
        setParentHeight(`${ref.current!.scrollHeight}px`);
        setText(e.currentTarget.value);

        if (onChange) {
            onChange(e);
        }
    }

    return (
        <div style={{minHeight: parentHeight}}>
            <textarea
                {...rest}
                ref={ref}
                rows={1}
                style={{
                    height: height
                }}
                onChange={onTextAreaChange}
            />
        </div>
    )
}

export default AutoResizeTextArea;