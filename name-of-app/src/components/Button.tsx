import React, { useState } from "react";
import { useCounter } from "../context/Counter";

interface MyButtonProps {
    text: string | number | boolean;
    onClick?: () => void;
    something?: boolean;
}

interface Book{
    name: String;
    data: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
   const context = useCounter();

   const {text, onClick } = props;
   const [value, setValue] = useState(1);
   const [val, setVal] = useState<Book>({ name: "hi", data: 0});
   const [formdata, setFormdata] = useState<String | undefined>();

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
       setFormdata(e.target.value);
   }
   const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e);
  }
   

    return (
            
            <div>
                <h3>{value}</h3>
                <button onClick={() => setValue(value+1)}>{text}</button>
                {/* <button onClick={props.onClick}>{props.text}</button> */}

                {/* custom */}
                <h3>{val.name} - {val.data}</h3>
                <button onClick={() => setVal({name: "hello",data:1})}>click</button>
                 <br />

                {/* form handling */}
                <form onSubmit={onSubmitHandler}>
                    <input onChange={onChangeHandler} placeholder="Enter the name" type="text" />
                    <h3>{formdata}</h3>
                    <button>submit</button>
                </form>

                <h1 onClick={e => {context?.setCount(context.value + 1)}}>{context?.value}</h1>
            </div>
    )
}

export default MyButton;


// const MyButton = (props: {text: String}) => {
//     return (
//         <div>
//             <button>Click</button>
//             <button>Click Me Again!</button>
//         </div>
//     )
// }