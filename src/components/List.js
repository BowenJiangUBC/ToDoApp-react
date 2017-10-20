import React from 'react';

const List = (props) => {

    const list = props.listItem.map((el,i) => (
        <li key={i}>
                <div className="form-group">
                    <span
                        style={
                            el.done
                                ?{textDecoration: 'line-through', fontSize: '20px'}
                                :{textDecoration: 'none', fontSize: '20px'}
                        }
                        onClick={props.itemClick.bind(null,i)}>
                        {el.item}
                    </span>
                    <button
                        onClick={
                            props.deleteItem.bind(null,i)}
                        className="btn btn-danger pull-right">
                        x
                    </button>
            </div>
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