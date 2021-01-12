import React from 'react';

import Complete from './Complete';

const List = props => (
    <div>
        <ul>
            {
                props.list.map(
                item => 
                    <li>
                        {item}
                        <Complete item={item} />
                    </li>
                )  
            }
        </ul>
    </div>
);

export default List;