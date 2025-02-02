import React, { useRef, useState } from 'react'

export default function SomeComponent({ args }) {
    console.log(args)
    console.log(typeof(args))
    const [likes, setLikes] = useState(0);
    const increment = () => {
        setLikes(likes+1)
    }
    const decrement = () => {
        setLikes(likes-1)
    }

    const ref = useRef(0);
    const refIncrement = () => {
        ref.current = ref.current + 1;
    }

    const refDecrement = () => {
        ref.current = ref.current - 1;
    }

    // применения фильтра
    const mathematic = args.filter(person => person.profession === 'Математик')
    const listItem = mathematic.map(person => 
        <li key={person.id}>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession}
            </p>
        </li>
    );
  return (
    <div>
        SomeComponent
        <ul>
            {args.map((person) => (
                <li key={person.id}>{person.name}</li>
            ))}
        </ul>
        <img
            src='https://steamuserimages-a.akamaihd.net/ugc/777370773397739097/E104F8A875406EA135AB4A7F75A7610FE3186B59/?imw=512&amp;imh=413&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
            alt='Веселая картинка'
        />
        <br/>
        likes: {likes} <br/>
        <button onClick={increment}>
            +
        </button>
        <button onClick={decrement}>
            -
        </button>

        {/* Результат изменения видно только после рендеринга */}
        <br/>
        refLikes: {ref.current} <br/>

        <button onClick={e => {
            // если обработчик событий передается через props, то нужно остановить поднятие 
            e.stopPropagation();
            refIncrement();
            }}>
            +
        </button>

        <button onClick={refDecrement}>
            -
        </button>
        

        <br/>
        <h3>
            Применение фильтра (профессия = Математик)
        </h3>
        <ul>
            {listItem}
        </ul>

        <form onSubmit={(e) => {
            alert('You submit me!')
            e.preventDefault();
        }}>
            <input/>
            <button>
                Send
            </button>
        </form>
    </div>
  )
}
