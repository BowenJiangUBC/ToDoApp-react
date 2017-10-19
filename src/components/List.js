import React from 'react';

const List = (props) => {

    const list = props.listItem.map((el,i) => (
        <li key={i}>
            <span>{el}</span>
        </li>
    ));

    return(
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )

};

export default List;