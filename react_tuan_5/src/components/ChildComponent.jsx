import React from 'react';

const ChildComponent = React.memo((props) => {
    const { count } = props;
    console.log('ChildComponent render');
    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
});

export default ChildComponent;